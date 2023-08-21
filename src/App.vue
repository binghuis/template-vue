<script setup lang="ts">
import { RouterView } from 'vue-router'
import { toggleDark, isDark } from '@/composables'
</script>

<template>
  <header>
    <button
      @click="
        () => {
          toggleDark()
        }
      "
    >
      <span>{{ isDark ? 'Dark' : 'Light' }}</span>
    </button>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
