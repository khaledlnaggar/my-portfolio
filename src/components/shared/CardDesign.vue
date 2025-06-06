<template>
  <div
    class="card-design flex flex-col items-center justify-center p-6 sm:p-8 bg-[#ffffff0d] border border-[var(--border-color)] rounded-xl transition-all duration-300 hover:scale-105 hover:border-[var(--text-secondary)] gap-3 min-w-[16rem] sm:min-w-[20rem] hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
  >
    <h2
      class="font-orbitron font-bold mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[var(--primary-color)]"
    >
      {{ props.title }}
    </h2>
    <p
      class="text-sm sm:text-base md:text-lg lg:text-xl text-[var(--text-secondary)] uppercase text-center"
    >
      {{ props.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
}>()
</script>

<style scoped>
.card-design {
  width: 100%;
  max-width: 100%;
}
</style>
