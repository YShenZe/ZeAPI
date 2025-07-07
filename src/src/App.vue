<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f1f3f4;
}

router-view {
  flex: 1 0 auto;
}

footer {
  flex-shrink: 0;
}
</style>