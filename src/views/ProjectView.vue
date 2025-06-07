<template>
  <div
    class="project-view lg:mt-[5%] md:mt-[15%] mt-[27%] px-4 flex flex-col items-center justify-center gap-6"
  >
    <h1 class="section-title text-3xl sm:text-4xl md:text-5xl text-center mb-4">Projects</h1>

    <div v-if="isMobile" class="flex flex-col items-center w-full gap-8 max-w-7xl">
      <div
        v-for="project in projects"
        :key="project.title"
        class="flex flex-col items-center gap-4 w-full max-w-[90%]"
      >
        <img
          loading="lazy"
          class="aspect-video w-full object-cover rounded-lg shadow-md max-h-[562px]"
          :src="project.img"
          :alt="project.title"
        />
        <h4
          class="font-orbitron text-xl sm:text-2xl md:text-3xl text-[var(--primary-color)] text-center"
        >
          {{ project.title }}
        </h4>
      </div>
    </div>

    <div v-else class="project__carousel w-full max-w-7xl">
      <swiper-container class="w-full">
        <swiper-slide
          v-for="(project, index) in projects"
          :key="project.title"
          class="mb-8 flex justify-center"
          :class="index === projects.length - 1 ? 'last-slide' : ''"
        >
          <a
            :href="project.link"
            target="_blank"
            class="flex flex-col items-center gap-4 w-full max-w-[90%]"
          >
            <img
              loading="lazy"
              class="w-full object-cover object-center rounded-lg shadow-lg transition-transform hover:scale-[1.01] max-h-[562px]"
              :src="project.img"
              :alt="project.title"
            />
            <h4
              class="font-orbitron text-xl sm:text-2xl md:text-3xl text-[var(--primary-color)] text-center"
            >
              {{ project.title }}
            </h4>
          </a>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMobile = ref(false)

function handleResize() {
  isMobile.value = window.innerWidth < 640
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
  if (!isMobile.value) initializeSwiper()
})

function initializeSwiper() {
  const swiperEl = document.querySelector('swiper-container')

  if (!swiperEl) {
    console.error('Swiper container not found')
    return
  }

  Object.assign(swiperEl, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  swiperEl.initialize()
}

const projects = [
  {
    title: 'Qawafil Development',
    img: new URL('@/assets/images/qawafil-logo (1).png', import.meta.url).href,
    link: 'https://www.qawafil-eg.com/en',
  },
  {
    title: 'Az Studios',
    img: new URL('@/assets/images/qawafil-logo (2).png', import.meta.url).href,
    link: 'https://www.az-studios.com',
  },
  {
    title: 'Swvl',
    img: new URL('@/assets/images/qawafil-logo (3).png', import.meta.url).href,
    link: 'https://www.swvl.com/',
  },
]
</script>

<style scoped>
swiper-container {
  --swiper-navigation-color: white;
  --swiper-pagination-color: white;
  --swiper-pagination-bullet-inactive-color: #d1d5db;
  --swiper-navigation-size: 44px;
}

.last-slide img {
  max-height: 562px;
  aspect-ratio: 315/256;
  object-fit: cover;
  object-position: center;
}
</style>
