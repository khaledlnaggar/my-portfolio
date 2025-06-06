<template>
  <div>
    <section
      class="section min-h-screen home flex items-center justify-center snap-start relative pt-20 pb-5 text-center snap-always"
    >
      <div class="relative z-[2]">
        <h1
          class="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[5px] text-[var(--primary-color)] mb-4 animate-titleGlow"
        >
          KHALED ELNAGGAR
        </h1>

        <p
          class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-[var(--text-secondary)] mb-8 animate-fadeInUpDelay1"
        >
          Frontend Developer
        </p>

        <p
          class="text-base sm:text-lg md:text-xl lg:text-[1.3rem] text-[var(--text-muted)] max-w-[700px] mx-auto mb-12 animate-fadeInUpDelay2"
        >
          Angular specialist transitioning to Vue.js. Building modern, scalable web applications
          with clean code and innovative solutions. Crafting the future of digital experiences.
        </p>

        <router-link to="/projects" class="main-btn">View Projects</router-link>
      </div>
    </section>

    <section class="section expertise pb-12">
      <h2 class="section-title">Expertise</h2>

      <div class="flex flex-wrap justify-around mt-12 text-center gap-6">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="relative overflow-hidden p-12 text-center rounded-[15px] border border-[var(--border-color)] bg-[rgba(255,255,255,0.03)] transition-all duration-500 ease-in-out hover:translate-y-[-10px] hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:border-[var(--text-secondary)] w-full sm:w-1/2 md:w-1/3 lg:w-1/4 skill-card"
        >
          <h3
            class="text-xl sm:text-2xl md:text-[1.6rem] lg:text-[1.8rem] mb-6 font-semibold text-[var(--primary-color)]"
          >
            {{ skill.title }}
          </h3>
          <p
            class="text-sm sm:text-base md:text-lg lg:text-[1.1rem] text-[var(--text-secondary)] leading-[1.8]"
          >
            {{ skill.description }}
          </p>
        </div>
      </div>
    </section>

    <section
      class="section about-section bg-[rgba(255,255,255,0.02)] border-y border-[var(--border-color)]"
    >
      <div>
        <div class="about-content max-w-[800px] mx-auto text-center">
          <h2
            class="font-orbitron text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] mb-12 text-[var(--primary-color)]"
            style="text-shadow: var(--glow-white)"
          >
            ABOUT ME
          </h2>

          <p
            class="text-base sm:text-lg md:text-xl lg:text-[1.3rem] leading-[2] text-[var(--text-secondary)] mb-12"
          >
            I'm a passionate frontend developer with a keen eye for detail and a love for creating
            seamless user experiences. My journey in web development has been driven by curiosity
            and the desire to push the boundaries of what's possible in the browser. I specialize in
            transforming complex ideas into elegant, functional interfaces.
          </p>

          <div class="stats-grid flex justify-center flex-wrap gap-12">
            <div class="stat-item text-center">
              <CardDesign title="2+" description="Years Experience" />
            </div>
            <div class="stat-item text-center">
              <CardDesign title="7+" description="Projects" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import CardDesign from '@/components/shared/CardDesign.vue'
const skills = [
  {
    title: 'Frontend Frameworks',
    description:
      'Angular.js with 2 years of hands-on experience, Vue.js 3, React.js , TypeScript for type-safe development, and modern JavaScript ES6+ features ES6+ for efficient code writing.',
  },
  {
    title: 'Styling & UI',
    description:
      ' Advanced CSS3 animations, SCSS preprocessing, Tailwind CSS utility-first approach, Bootstrap framework, responsive design principles, and Material Design implementation.',
  },
  {
    title: 'Tools & Workflow',
    description:
      'Git version control, Webpack & Vite build tools, npm package management, VS Code optimization, Chrome DevTools proficiency, and Figma design collaboration.',
  },
]
</script>

<style scoped>
@keyframes titleGlow {
  0% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    transform: scale(1);
  }
  100% {
    text-shadow: 0 0 40px rgba(255, 255, 255, 0.6);
    transform: scale(1.02);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-titleGlow {
  animation: titleGlow 4s ease-in-out infinite alternate;
}

.animate-fadeInUpDelay1 {
  animation: fadeInUp 1s ease-out 0.5s both;
}

.animate-fadeInUpDelay2 {
  animation: fadeInUp 1s ease-out 1s both;
}

.skill-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(from 0deg, transparent, var(--primary-color), transparent);
  animation: rotate 6s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
}

.skill-card::after {
  content: '';
  position: absolute;
  inset: 1px;
  background: var(--bg-primary);
  border-radius: 14px;
  z-index: 1;
}

.skill-card:hover::before {
  opacity: 0.3;
}

.skill-card > * {
  position: relative;
  z-index: 2;
}

.section {
  min-height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position: relative;
  padding: 80px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
