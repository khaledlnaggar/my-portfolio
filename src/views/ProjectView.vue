<template>
  <div class="project-view mt-[5%] flex flex-col items-center justify-center gap-3">
    <h1 class="section-title">Projects</h1>
    <div class="project__carousel w-full">
      <swiper-container>
        <swiper-slide
          v-for="(project, index) in projects"
          :key="project.title"
          class="mb-8"
          :class="index === projects.length - 1 ? 'last-slide' : ''"
        >
          <a :href="project.link" target="_blank" class="flex flex-col items-center">
            <img class="aspect-video sm:w-[1500px]" :src="project.img" alt="" />
            <h4 class="font-orbitron text-4xl">{{ project.title }}</h4>
          </a>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectView',

  data() {
    return {
      projects: [
        {
          title: 'Qawafil Development',
          img: new URL('@/assets/images/qawafil.gif', import.meta.url).href,
          link: 'https://www.qawafil-eg.com/en',
        },
        {
          title: 'Az Studios',
          img: new URL('@/assets/images/Az Studios .gif', import.meta.url).href,
          link: 'https://www.az-studios.com',
        },
        {
          title: 'Swvl',
          img: new URL('@/assets/images/swvl.gif', import.meta.url).href,
          link: 'https://www.swvl.com/',
        },
      ],
    }
  },
  mounted() {
    this.initializeSwiper()
  },
  methods: {
    initializeSwiper() {
      const swiperEl = document.querySelector('swiper-container')

      const swiperParams = {
        slidesPerView: 1,
        spaceBetween: 20,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true,
      }

      Object.assign(swiperEl, swiperParams)

      swiperEl.initialize()
    },
  },
}
</script>
<style scoped>
swiper-container {
  --swiper-navigation-color: white;
  --swiper-pagination-color: white;
  --swiper-pagination-bullet-inactive-color: #d1d5db;
  --swiper-navigation-size: 44px;
}
.last-slide img {
  height: 45rem;
  margin: 3rem 0;
}
</style>
