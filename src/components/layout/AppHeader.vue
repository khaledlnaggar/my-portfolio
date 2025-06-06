<template>
  <div class="nav">
    <div class="scan-line"></div>

    <div class="nav-content">
      <RouterLink to="/" class="logo" @click="closeMobileNav">
        <h1 class="logo">KE</h1>
      </RouterLink>

      <button
        class="hamburger sm:hidden text-[var(--primary-color)] text-3xl"
        @click="toggleMobileNav"
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <nav class="hidden sm:block">
        <ul class="nav-links">
          <li v-for="nav in navs" :key="nav.name">
            <RouterLink :to="nav.path" active-class="active" class="nav-link">
              {{ nav.name }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>

    <transition name="slide-fade">
      <div v-if="mobileNavOpen" class="mobile-nav sm:hidden">
        <ul class="flex flex-col gap-6 items-center py-6">
          <li v-for="nav in navs" :key="nav.name">
            <RouterLink
              :to="nav.path"
              active-class="active"
              class="nav-link"
              @click="closeMobileNav"
            >
              {{ nav.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const navs = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

const mobileNavOpen = ref(false)

function toggleMobileNav() {
  mobileNavOpen.value = !mobileNavOpen.value
}
function closeMobileNav() {
  mobileNavOpen.value = false
}
</script>

<style scoped>
.nav {
  @apply fixed top-0 w-full z-[1000] bg-black/95 backdrop-blur border-b border-[var(--border-color)];
  transition: all 0.3s ease;
}

.scan-line {
  @apply absolute top-0 left-0 right-0 h-px;
  background: linear-gradient(to right, transparent, var(--primary-color), transparent);
  animation: scanLine 4s ease-in-out infinite;
}

.nav-content {
  @apply flex justify-between items-center px-4 sm:px-8 py-4;
}

.logo {
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--primary-color);
  text-shadow: var(--glow-white);
  animation: logoGlow 3s ease-in-out infinite alternate;
}

.nav-links {
  @apply flex list-none gap-6;
}

.nav-link {
  @apply relative font-medium text-base sm:text-[1.1rem] px-3 py-2 transition-all duration-300;
  color: var(--text-secondary);
  text-decoration: none;
}

.nav-link:hover,
.nav-link.active {
  color: var(--bg-primary);
  text-shadow: none;
}

.nav-link::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--primary-color);
  opacity: 0;
  z-index: -1;
  border-radius: 4px;
  transition: opacity 0.3s ease;
}

.nav-link:hover::before,
.nav-link.active::before {
  opacity: 1;
}

.hamburger {
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
}

.mobile-nav {
  @apply bg-black/95 w-full text-center border-t border-[var(--border-color)];
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@keyframes scanLine {
  0%,
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
  50% {
    opacity: 1;
    transform: translateX(100%);
  }
}

@keyframes logoGlow {
  0% {
    text-shadow: var(--glow-white);
  }
  100% {
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.6);
  }
}
</style>
