<template>
  <div class="api-container">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">API 列表</el-breadcrumb-item>
      <el-breadcrumb-item>{{ api?.name || '加载中...' }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button type="primary" :icon="ArrowLeft" @click="$router.push('/')" style="margin-bottom: 12px">
      返回
    </el-button>
    <div class="detail-container">
      <el-skeleton :loading="loading" animated>
        <template #template>
          <el-skeleton-item variant="h1" style="width: 50%; margin-bottom: 12px" />
          <el-skeleton-item variant="text" style="width: 30%" />
          <el-skeleton-item variant="text" style="width: 80%" />
          <el-skeleton-item variant="text" style="width: 60%" />
          <el-skeleton-item variant="rect" style="height: 150px; margin-top: 12px" />
        </template>
        <template #default>
          <h1 class="detail-title">{{ api.name }}</h1>
          <div class="detail-item card-status">
            <b>Status</b>：<span :class="statusClass"></span>
            <span>{{ statusCode }}</span>
          </div>
          <p class="detail-item"><strong>简介:</strong> {{ api.description }}</p>
          <p class="detail-item"><strong>地址:</strong> {{ api.endpoint }}</p>
          <div class="detail-item">
            <strong>文档:</strong>
            <div  class="detail-markdown" v-html="renderedMarkdown"></div>
          </div>
        </template>
      </el-skeleton>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import yaml from 'js-yaml'
import { marked } from 'marked'
import hljs from 'highlight.js'
import { checkApiStatus } from '../utils/checkStatus'
import { ArrowLeft } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

export default {
  setup() {
    const route = useRoute()
    const api = ref(null)
    const statusCode = ref(null)
    const loading = ref(true)
    const markdownContent = ref('')

    marked.setOptions({
      highlight: function (code, lang) {
        try {
          if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value
          }
          return hljs.highlightAuto(code).value
        } catch (error) {
          console.error('Highlight.js error:', error)
          return code
        }
      },
      langPrefix: 'hljs language-'
    })

    fetch('/data.yml')
      .then(response => response.text())
      .then(data => {
        const apis = yaml.load(data).apis
        api.value = apis.find(a => a.name === route.params.name)
        if (api.value) {
          checkStatus()
          loadMarkdown()
        } else {
          ElMessage.error('未找到该 API')
          loading.value = false
        }
      })
      .catch(() => {
        ElMessage.error('加载 API 数据失败')
        loading.value = false
      })

    async function checkStatus() {
      statusCode.value = await checkApiStatus(api.value.statusUrl)
    }

    async function loadMarkdown() {
      try {
        const response = await fetch(`/docs/${api.value.docFile}`)
        if (!response.ok) throw new Error('Markdown file not found')
        markdownContent.value = await response.text()
        loading.value = false
      } catch (error) {
        ElMessage.error('加载文档失败')
        loading.value = false
      }
    }

    const renderedMarkdown = computed(() => {
      return markdownContent.value ? marked(markdownContent.value) : ''
    })

    const statusClass = computed(() => {
      return statusCode.value === 200 ? 'status-dot status-green' : 'status-dot status-red'
    })

    return { api, statusCode, statusClass, loading, renderedMarkdown, ArrowLeft }
  }
}
</script>