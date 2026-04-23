<template>
  <div class="page-shell">
    <div class="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <header class="mx-auto flex w-full max-w-[1180px] items-center justify-between px-6 py-6 md:px-10">
        <a href="#hero" class="font-display text-sm tracking-[0.26em] text-white">LOVITI</a>
        <nav class="hidden items-center gap-8 text-xs uppercase tracking-[0.18em] md:flex">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            class="nav-link text-white/60"
            :class="{ 'is-active text-white': activeSection === item.id }"
          >
            {{ item.label }}
          </a>
        </nav>
      </header>
    </div>

    <main>
      <HeroSection id="hero" class="reveal" />
      <AboutSection id="about" class="reveal" />
      <TechStack id="skills" class="reveal" />

      <section id="projects" class="reveal section-shell section-space">
        <div class="mb-10 flex items-center justify-between border-b border-white/10 pb-6">
          <h2 class="font-display text-sm uppercase tracking-[0.24em] text-white/60">My projects</h2>
          <span class="text-xs uppercase tracking-[0.2em] text-white/40">2024 - 2026</span>
        </div>

        <div class="space-y-4">
          <ProjectCard
            v-for="(project, index) in projects"
            :key="project.title"
            :index="index + 1"
            :title="project.title"
            :description="project.description"
            :year="project.year"
            :category="project.category"
            :impact="project.impact"
          />
        </div>
      </section>

      <DocsSection id="docs" class="reveal" />
      <SubscribeSection id="subscribe" class="reveal" />
      <ContactSection id="contact" class="reveal" />
    </main>

    <LiveChatWidget />
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import TechStack from './components/TechStack.vue'
import ProjectCard from './components/ProjectCard.vue'
import DocsSection from './components/DocsSection.vue'
import SubscribeSection from './components/SubscribeSection.vue'
import ContactSection from './components/ContactSection.vue'
import LiveChatWidget from './components/LiveChatWidget.vue'

const navItems = [
  { id: 'hero', label: 'Hero banner' },
  { id: 'about', label: 'About me' },
  { id: 'skills', label: 'My skills' },
  { id: 'projects', label: 'My projects' },
  { id: 'docs', label: 'Technical docs' },
  { id: 'subscribe', label: 'Subscribe' },
  { id: 'contact', label: 'Contact me' },
]

const activeSection = ref('hero')
let sectionObserver
let revealObserver

onMounted(() => {
  document.documentElement.classList.add('reveal-enabled')

  const sections = navItems
    .map((item) => document.getElementById(item.id))
    .filter(Boolean)

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (visible[0]) {
        activeSection.value = visible[0].target.id
      }
    },
    { threshold: [0.3, 0.55, 0.8], rootMargin: '0px 0px -45% 0px' }
  )

  sections.forEach((section) => sectionObserver.observe(section))

  const revealTargets = document.querySelectorAll('.reveal')
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
  )

  revealTargets.forEach((target) => revealObserver.observe(target))
})

onBeforeUnmount(() => {
  if (sectionObserver) {
    sectionObserver.disconnect()
  }
  if (revealObserver) {
    revealObserver.disconnect()
  }
})

const projects = [
  {
    title: 'CI/CD Pipeline Automation',
    description: 'Thiết kế pipeline với GitHub Actions, Docker build và kiểm thử tự động cho các dịch vụ nhỏ.',
    year: '2025',
    category: 'DevOps / CI-CD',
    impact: 'Deploy time reduced by 50%'
  },
  {
    title: 'Kubernetes Lab Cluster',
    description: 'Triển khai cụm Kubernetes cho lab, thiết lập namespace, resource limit và monitoring cơ bản.',
    year: '2026',
    category: 'DevOps / Kubernetes',
    impact: 'Stable multi-service environment'
  },
  {
    title: 'Infrastructure as Code Setup',
    description: 'Áp dụng Terraform + Ansible để chuẩn hóa provisioning và cấu hình máy chủ.',
    year: '2024',
    category: 'DevOps / IaC',
    impact: 'Provisioning in minutes'
  },
]
</script>