<template>
  <div
    class="card-design flex flex-col items-center justify-center p-6 bg-[#ffffff0d] border border-[var(--border-color)] rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:border-[var(--text-secondary)] gap-2 min-w-[20rem] hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
  >
    <h2 class="text-5xl font-orbitron font-bold mb-4">{{ title }}</h2>
    <p class="text-lg text-[var(--text-secondary)] uppercase">{{ description }}</p>
  </div>
</template>
<script>
export default {
  name: 'CardDesign',
  props: {
    title: String,
    description: String,
  },
}
</script>
<style></style>
