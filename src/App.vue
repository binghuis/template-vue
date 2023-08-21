<script setup lang="ts">
import { RouterView } from 'vue-router'
import { toggleDark, isDark } from '@/composables'
import { Sunny, Moon } from '@element-plus/icons-vue'
import { ElButton, ElIcon } from 'element-plus'
</script>

<template>
  <ElButton @click="toggleDark()">
    <ElIcon size="small">
      <Moon v-if="isDark" />
      <Sunny v-else />
    </ElIcon>
  </ElButton>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
