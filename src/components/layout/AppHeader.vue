<template>
  <div class="nav">
    <div class="scan-line"></div>

    <div class="nav-content">
      <h1 class="logo">KE</h1>

      <nav>
        <ul class="nav-links">
          <li v-for="nav in navs" :key="nav.name">
            <RouterLink :to="nav.path" active-class="active" class="nav-link">
              {{ nav.name }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
const navs = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]
</script>

<style scoped>
.nav {
  @apply fixed top-0 w-full z-[1000] bg-black/95 backdrop-blur border-b border-[var(--border-color)];
  transition: all 0.3s ease;
  position: fixed;
}

.scan-line {
  @apply absolute top-0 left-0 right-0 h-px;
  background: linear-gradient(to right, transparent, var(--primary-color), transparent);
  animation: scanLine 4s ease-in-out infinite;
}

.nav-content {
  @apply flex justify-between items-center px-8 py-4;
}

.logo {
  font-family: 'Orbitron', monospace;
  font-size: 1.8rem;
  font-weight: 900;
  color: var(--primary-color);
  text-shadow: var(--glow-white);
  animation: logoGlow 3s ease-in-out infinite alternate;
}

.nav-links {
  @apply flex list-none gap-8;
}

.nav-link {
  @apply relative font-medium text-[1.1rem] px-4 py-2 transition-all duration-300;
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
