<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <RouterView />
  </main>
</template>
<script setup lang="ts">
import AppHeader from './appHeader.vue'
import { RouterView } from 'vue-router'
</script>
<style></style>
