<template>
  <section id="hero" class="relative min-h-[90vh] flex items-center overflow-hidden section-space">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -left-32 top-1/4 h-96 w-96 animate-float opacity-30 blur-[100px] [background:radial-gradient(circle_at_center,rgba(233,110,54,0.5)_0%,transparent_70%)]" />
      <div class="absolute -right-32 top-1/3 h-80 w-80 animate-float-delayed opacity-20 blur-[100px] [background:radial-gradient(circle_at_center,rgba(55,122,255,0.5)_0%,transparent_70%)]" />
      <div class="absolute bottom-32 left-1/4 h-64 w-64 animate-float opacity-15 blur-[100px] [background:radial-gradient(circle_at_center,rgba(139,92,246,0.5)_0%,transparent_70%)]" />
    </div>

    <div class="section-shell relative z-10">
      <div class="grid gap-16 lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div class="space-y-8">
          <div class="inline-flex items-center gap-2 rounded-full border border-accent-orange/30 bg-accent-orange/10 px-4 py-2 text-xs uppercase tracking-wider text-accent-orange">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-orange opacity-75"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-accent-orange"></span>
            </span>
            Available for new opportunities
          </div>

          <div>
            <p class="mb-3 text-xs uppercase tracking-[0.22em] text-accent-orange/70">Hello, I'm</p>
            <h1 class="hero-title text-[clamp(3rem,10vw,6rem)] leading-[0.95]">
              Tien <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange via-accent-blue to-accent-purple animate-gradient-shift bg-300%">Le</span>
            </h1>
            <div class="mt-4 flex items-center gap-3">
              <p class="text-lg font-mono text-white/50 md:text-xl">
                <span class="typing-text">{{ displayText }}</span>
                <span class="typing-caret" />
              </p>
            </div>
          </div>

          <p class="max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">
            DevOps engineer focused on automation, infrastructure as code, and container orchestration.
            Building reliable systems with <span class="text-accent-orange">Docker</span>, <span class="text-accent-blue">Kubernetes</span>,
            <span class="text-accent-purple">Terraform</span>, and <span class="text-accent-teal">GitHub Actions</span>.
          </p>

          <div class="flex flex-wrap gap-4 pt-2">
            <a href="#projects" class="btn-primary">
              <span>View projects</span>
            </a>
            <a href="#contact" class="btn-secondary">
              Get in touch
            </a>
            <a href="/resume.pdf" class="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-accent-blue" target="_blank">
              <Download class="h-4 w-4 transition-transform group-hover:translate-y-1" />
              <span>Resume</span>
            </a>
          </div>

          <div class="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3">
            <div v-for="stat in stats" :key="stat.label" class="card-hover rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm">
              <p class="text-2xl font-display font-bold text-white">{{ stat.value }}</p>
              <p class="mt-1 text-xs uppercase tracking-wider text-white/50">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <div class="relative hidden lg:block">
          <div class="relative aspect-square max-w-lg mx-auto">
            <div class="absolute inset-0 animate-float">
              <div class="glass-card h-full w-full p-8 flex items-center justify-center">
                <div class="text-center">
                  <div class="mb-6 text-6xl">🚀</div>
                  <p class="font-display text-xl text-white/70">Infrastructure</p>
                  <p class="text-sm text-white/50 mt-2">as Code</p>
                </div>
              </div>
            </div>
            <div class="absolute -right-8 top-1/4 animate-float-delayed">
              <div class="glass-card px-4 py-2 flex items-center gap-2">
                <Box class="h-5 w-5 text-accent-blue" />
                <span class="text-sm font-mono text-white">Docker</span>
              </div>
            </div>
            <div class="absolute -left-8 top-1/3 animate-float">
              <div class="glass-card px-4 py-2 flex items-center gap-2">
                <Cloud class="h-5 w-5 text-accent-orange" />
                <span class="text-sm font-mono text-white">K8s</span>
              </div>
            </div>
            <div class="absolute right-12 bottom-12 animate-float-delayed">
              <div class="glass-card px-4 py-2 flex items-center gap-2">
                <Terminal class="h-5 w-5 text-accent-purple" />
                <span class="text-sm font-mono text-white">Bash</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Download, Box, Cloud, Terminal } from 'lucide-vue-next'

const roles = [
  'DevOps Engineer',
  'Site Reliability Engineer',
  'Platform Engineer',
  'Cloud Engineer',
  'Infrastructure Engineer',
]

const displayText = ref('')
const roleIndex = ref(0)
let isDeleting = false
let typingTimer

const typeDelay = 80
const deleteDelay = 50
const holdDelay = 2000
const resetDelay = 500

const tick = () => {
  const current = roles[roleIndex.value] || ''

  if (!isDeleting) {
    displayText.value = current.slice(0, displayText.value.length + 1)
    if (displayText.value === current) {
      isDeleting = true
      typingTimer = window.setTimeout(tick, holdDelay)
      return
    }
    typingTimer = window.setTimeout(tick, typeDelay)
    return
  }

  displayText.value = current.slice(0, displayText.value.length - 1)
  if (displayText.value.length === 0) {
    isDeleting = false
    roleIndex.value = (roleIndex.value + 1) % roles.length
    typingTimer = window.setTimeout(tick, resetDelay)
    return
  }
  typingTimer = window.setTimeout(tick, deleteDelay)
}

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '15+', label: 'Projects Completed' },
  { value: '99%', label: 'Uptime Achieved' },
  { value: '50%', label: 'Faster Deploys' },
]

onMounted(() => {
  tick()
})

onBeforeUnmount(() => {
  if (typingTimer) {
    window.clearTimeout(typingTimer)
  }
})
</script>

<style scoped>
.typing-caret {
  display: inline-block;
  width: 2px;
  height: 1.2em;
  margin-left: 2px;
  background: linear-gradient(180deg, #e96e36, #377aff);
  animation: blink 1s step-end infinite;
  vertical-align: text-bottom;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
