<template>
  <div
    class="flex lg:mt-[1%] md:mt-[15%] mt-[27%] flex-col items-center justify-center min-h-[90vh] gap-12 max-w-7xl m-auto px-4"
  >
    <h1 class="section-title">My Social Account</h1>
    <div class="flex flex-wrap items-center justify-center gap-6">
      <a
        v-for="social in socials"
        :key="social.name"
        :href="social.name === 'Gmail' ? `mailto:${social.url}` : social.url"
        target="_blank"
        class="card-design"
      >
        <CardDesign :title="social.name" :description="social.url" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardDesign from '@/components/shared/CardDesign.vue'

const socials = [
  { name: 'Github', url: 'https://github.com/khaledlnaggar' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/khaled-elnaggar-10189321b/' },
  { name: 'Instagram', url: 'https://www.instagram.com/khaledlnaggar/' },
  { name: 'Facebook', url: 'https://www.facebook.com/khaled.moataz.33/' },
  { name: 'Gmail', url: 'khaledlnaggar@gmail.com' },
]
</script>
