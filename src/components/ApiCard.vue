<template>
  <router-link :to="`/API/${api.docFile.replace('.md', '')}`" class="card">
    <el-skeleton :loading="loading" animated>
      <template #template>
        <el-skeleton-item variant="h3" style="width: 50%; margin-bottom: 6px" />
        <el-skeleton-item variant="text" style="width: 30%" />
        <el-skeleton-item variant="text" style="width: 80%" />
        <el-skeleton-item variant="text" style="width: 60%" />
      </template>
      <template #default>
        <div class="card-header">
          <h3 class="card-title">{{ api.name }}</h3>
          <div class="card-status">
            <span :class="statusClass"></span>
            <span>{{ statusText }}</span>
          </div>
        </div>
        <p class="card-endpoint">
          <el-icon><Link /></el-icon>
          <code>{{ api.endpoint }}</code>
        </p>
        <p class="card-description">
          <el-icon><Document /></el-icon>
          {{ api.description }}
        </p>
      </template>
    </el-skeleton>
  </router-link>
</template>

<script>
import { ref, computed } from 'vue'
import { checkApiStatus } from '../utils/checkStatus'
import { Link, Document } from '@element-plus/icons-vue'

export default {
  components: { Link, Document },
  props: {
    api: Object
  },
  data() {
    return {
      statusCode: null,
      loading: true
    }
  },
  computed: {
    statusClass() {
      return this.statusCode === 200 ? 'status-dot status-green' : 'status-dot status-red'
    },
    statusText() {
      return this.statusCode === 200 ? '正常' : '错误'
    }
  },
  async created() {
    this.statusCode = await checkApiStatus(this.api.statusUrl)
    this.loading = false
  }
}
</script>

<style scoped>
.card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  color: #2d3748;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.card:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.card-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: #1a202c;
}

.card-status {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #4a5568;
  background: #f7fafc;
  padding: 4px 8px;
  border-radius: 12px;
}

.card-endpoint {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #4a5568;
  margin: 8px 0;
}

.card-endpoint code {
  background: #f1f5f9;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  word-break: break-all;
  max-width: 100%;
}

.card-description {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  font-size: 13px;
  color: #4a5568;
  line-height: 1.5;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.card-endpoint .el-icon,
.card-description .el-icon {
  font-size: 16px;
  color: #4a5568;
  transition: transform 0.3s ease;
}

.card:hover .card-endpoint .el-icon,
.card:hover .card-description .el-icon {
  transform: scale(1.15);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
}

.status-green {
  background-color: #38a169;
}

.status-red {
  background-color: #e53e3e;
}
</style>