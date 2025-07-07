<template>
  <router-link :to="`/api/${api.name}`" class="card">
    <el-skeleton :loading="loading" animated>
      <template #template>
        <el-skeleton-item variant="h3" style="width: 50%; margin-bottom: 6px" />
        <el-skeleton-item variant="text" style="width: 30%" />
        <el-skeleton-item variant="text" style="width: 80%" />
        <el-skeleton-item variant="text" style="width: 60%" />
      </template>
      <template #default>
        <h3 class="card-title">{{ api.name }}</h3>
        <div class="card-status">
          <b>API状态：</b><span :class="statusClass"></span>
          <span>{{ statusCode }}</span>
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
import { ref } from 'vue'
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
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #2d3748;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.card:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.card-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 6px;
  color: #2d3748;
}

.card-status {
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  font-size: 12px;
  color: #4a5568;
}

.card-endpoint {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #4a5568;
  margin: 6px 0;
}

.card-endpoint code {
  background: #edf2f7;
  padding: 3px 6px;
  border-radius: 4px;
  font-size: 12px;
  word-wrap: break-word;
  white-space: normal;
  max-width: 100%;
  box-sizing: border-box;
}

.card-description {
  display: flex;
  align-items: flex-start;
  gap: 4px;
  font-size: 12px;
  color: #4a5568;
  line-height: 1.4;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.card-endpoint .el-icon,
.card-description .el-icon {
  font-size: 14px;
  transition: transform 0.2s ease;
}

.card:hover .card-endpoint .el-icon,
.card:hover .card-description .el-icon {
  transform: scale(1.2);
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 6px;
}

.status-green {
  background-color: #48bb78;
}

.status-red {
  background-color: #f56565;
}
</style>