<template>
  <div class="api-container">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">API 列表</el-breadcrumb-item>
      <el-breadcrumb-item>{{ api?.name || '加载中...' }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button type="primary" :icon="ArrowLeft" @click="$router.push('/')" class="back-button">
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
          <div class="detail-header">
            <h1 class="detail-title">{{ api.name }}</h1>
            <div class="detail-status">
              <span :class="statusClass"></span>
              <span>{{ statusText }}</span>
            </div>
          </div>
          <div class="detail-content">
            <p class="detail-item"><strong>简介:</strong> {{ api.description }}</p>
            <p class="detail-item"><strong>地址:</strong> {{ api.endpoint }}</p>
          </div>
          <div class="detail-markdown" v-html="renderedMarkdown"></div>
        </template>
      </el-skeleton>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import yaml from 'js-yaml';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { checkApiStatus } from '../utils/checkStatus';
import { ArrowLeft } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';

export default {
  setup() {
    const route = useRoute();
    const api = ref(null);
    const statusCode = ref(null);
    const loading = ref(true);
    const markdownContent = ref('');

    // Configure marked with highlight.js
    marked.setOptions({
      highlight: function (code, lang) {
        try {
          if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value;
          }
          return hljs.highlightAuto(code).value;
        } catch (error) {
          console.error('Highlight.js error:', error);
          return code;
        }
      },
      langPrefix: 'hljs language-',
      pedantic: false,
      gfm: true,
      breaks: true,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    });

    // Fetch API data
    fetch('/data.yml')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to load data.yml');
        return response.text();
      })
      .then((data) => {
        const apis = yaml.load(data).apis;
        const apiName = route.params.name;
        api.value = apis.find(
          (a) => a.docFile.replace('.md', '') === apiName || a.name === apiName
        );
        if (api.value) {
          checkStatus();
          loadMarkdown();
        } else {
          ElMessage.error('未找到该 API');
          loading.value = false;
        }
      })
      .catch(() => {
        ElMessage.error('加载 API 数据失败');
        loading.value = false;
      });

    async function checkStatus() {
      statusCode.value = await checkApiStatus(api.value.statusUrl);
    }

    async function loadMarkdown() {
      try {
        const response = await fetch(`/docs/${api.value.docFile}`);
        if (!response.ok) throw new Error('Markdown file not found');
        markdownContent.value = await response.text();
        loading.value = false;
      } catch (error) {
        ElMessage.error('加载文档失败');
        loading.value = false;
      }
    }

    const renderedMarkdown = computed(() => {
      return markdownContent.value ? marked(markdownContent.value) : '';
    });

    const statusClass = computed(() => {
      return statusCode.value === 200 ? 'status-dot status-green' : 'status-dot status-red';
    });

    const statusText = computed(() => {
      return statusCode.value === 200 ? '正常' : '错误';
    });

    return { api, statusCode, statusClass, statusText, loading, renderedMarkdown, ArrowLeft };
  },
};
</script>

<style scoped>
.api-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.back-button {
  margin-bottom: 16px;
  border-radius: 8px;
  padding: 10px 20px;
  transition: all 0.3s ease;
}

.back-button:hover {
  transform: translateX(-2px);
}

.detail-container {
  background: #f9fafb;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 24px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  margin-top: 16px;
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.detail-title {
  font-size: 24px;
  font-weight: 700;
  color: #1a202c;
  margin: 0;
}

.detail-status {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #4a5568;
  background: #ffffff;
  padding: 6px 12px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.detail-content {
  background: #ffffff;
  border-radius: 8px;
  padding: 8px;
  border: 1px solid #e2e8f0;
}

.detail-item {
  margin-bottom: 8px;
  margin-top: 8px;
  font-size: 14px;
}

@media (max-width: 768px) {
  .api-container {
    padding: 8px;
  }

  .detail-container {
    padding: 8px;
    margin: 0;
  }

  .detail-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .detail-markdown pre {
    padding: 12px;
  }
}
</style>