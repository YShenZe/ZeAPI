<template>
  <div class="api-container">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item>API 列表</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="header">
      <h1>梦泽 API 管理平台</h1>
      <el-input
        v-model="searchQuery"
        placeholder="搜索 API..."
        clearable
        class="search-input"
        :prefix-icon="Search"
      />
    </div>
    <div class="api-grid-container">
      <el-skeleton :loading="loading" animated :count="4">
        <template #template>
          <div class="api-grid">
            <el-skeleton-item v-for="i in 4" :key="i" variant="rect" style="height: 140px; border-radius: 8px" />
          </div>
        </template>
        <template #default>
          <div class="api-grid">
            <ApiCard v-for="api in filteredApis" :key="api.name" :api="api" />
            <div class="no-more">
              <el-icon size="24"><Box /></el-icon>
              <span>没有更多了哦~</span>
            </div>
          </div>
        </template>
      </el-skeleton>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import yaml from 'js-yaml'
import ApiCard from '../components/ApiCard.vue'
import { Search, Box } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

export default {
  components: { ApiCard, Search, Box },
  setup() {
    const apis = ref([])
    const loading = ref(true)
    const searchQuery = ref('')

    fetch('/data.yml')
      .then(response => {
        if (!response.ok) throw new Error('Failed to load data.yml')
        return response.text()
      })
      .then(data => {
        apis.value = yaml.load(data).apis
        loading.value = false
      })
      .catch(() => {
        loading.value = false
        ElMessage.error('加载 API 数据失败')
      })

    const filteredApis = computed(() => {
      return apis.value.filter(api =>
        api.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        api.description.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    })

    return { apis, loading, searchQuery, filteredApis }
  }
}
</script>

<style scoped>
.api-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

h1 {
  font-size: 26px;
  font-weight: 700;
  color: #1a202c;
  margin: 0;
}

.search-input {
  width: 250px;
  border-radius: 8px;
}

.api-grid-container {
}

.api-grid {
  display:DOF0grid;
  gap: 16px;
  padding: 12px 0;
}

@media (max-width: 768px) {
  .api-grid {
    grid-template-columns: 1fr;
  }

  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .search-input {
    width: 100%;
  }
  
  .api-container {
  padding: 8px;
 }
}

@media (min-width: 769px) {
  .api-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.no-more {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  color: #4a5568;
  text-align: center;
  grid-column: span 1;
}

@media (min-width: 769px) {
  .no-more {
    grid-column: span 4;
  }
}
</style>