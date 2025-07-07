<template>
  <div class="api-container">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">API 列表</el-breadcrumb-item>
      <el-breadcrumb-item>About</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button type="primary" :icon="ArrowLeft" @click="$router.push('/')" style="margin-bottom: 12px">
      返回
    </el-button>
    <div class="detail-container">
      <h1 class="detail-title">关于我们</h1>
      <p class="detail-item">
        API 管理平台是一个现代化工具，用于高效管理和监控 API 服务，提供实时状态监控和文档展示。
      </p>
      <p class="detail-item">
        技术栈：Vue 3, Element Plus, Vite, Marked。
      </p>
      <p class="detail-item">
        采用拟态设计，响应式布局（移动端一行一个卡片，PC 端一行四个），优化用户体验。
      </p>
    </div>
  </div>
</template>

<script>
import { ArrowLeft } from '@element-plus/icons-vue'

export default {
  components: { ArrowLeft }
}
</script>