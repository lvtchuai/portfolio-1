<template>
  <section class="section-space relative overflow-hidden">
    <div class="noise-layer"></div>
    <div class="section-shell grid gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
      <div>
        <p class="mb-4 text-xs uppercase tracking-[0.22em] text-white/45">Hero banner</p>
        <h1 class="hero-title text-[11vw] leading-[0.95] text-white md:text-[6.4rem]">
          Tien
          <br />
          <span class="text-white/60">Le</span>
        </h1>
        <p class="mt-4 text-xs uppercase tracking-[0.24em] text-white/55">
          <span class="typewriter">{{ displayText }}</span>
          <span class="typewriter-caret" aria-hidden="true"></span>
        </p>
        <p class="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          DevOps engineer in training, tap trung vao automation, IaC, va container orchestration voi Docker, GitHub, Ansible, Kubernetes, Terraform.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            class="rounded-full bg-white px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-black transition hover:bg-gray-200"
          >
            View projects
          </a>
          <a
            href="#contact"
            class="rounded-full border border-white/20 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-white/80 transition hover:border-white/50"
          >
            Contact me
          </a>
        </div>
        <div class="mt-8 grid max-w-xl grid-cols-2 gap-4 text-xs uppercase tracking-[0.18em] text-white/55">
          <div class="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p class="text-white/40">Core stack</p>
            <p class="mt-2 text-sm text-white">Docker + K8s</p>
          </div>
          <div class="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p class="text-white/40">Automation</p>
            <p class="mt-2 text-sm text-white">Ansible + Terraform</p>
          </div>
        </div>
      </div>

      <div class="md:pt-8">
        <div class="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
          <p class="text-xs uppercase tracking-[0.18em] text-white/45">Currently</p>
          <p class="mt-4 font-display text-2xl leading-tight text-white">
            Building infra for high-traffic products and internal automation.
          </p>
          <div class="mt-8 space-y-4 text-sm text-white/65">
            <div class="flex items-center justify-between border-b border-white/10 pb-3">
              <span>Container platform</span>
              <span class="text-white/35">Docker / Kubernetes</span>
            </div>
            <div class="flex items-center justify-between border-b border-white/10 pb-3">
              <span>Infrastructure as Code</span>
              <span class="text-white/35">Terraform</span>
            </div>
            <div class="flex items-center justify-between">
              <span>Config automation</span>
              <span class="text-white/35">Ansible / GitHub</span>
            </div>
          </div>
        </div>

        <div class="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/40">
          <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
          Open to new opportunities in 2026
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

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

const typeDelay = 90
const deleteDelay = 55
const holdDelay = 1400
const resetDelay = 350

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

onMounted(() => {
  tick()
})

onBeforeUnmount(() => {
  if (typingTimer) {
    window.clearTimeout(typingTimer)
  }
})
</script>