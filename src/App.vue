<template>
  <div class="page-shell">
    <LoadingScreen :is-loading="isLoading" />
    <CustomCursor />
    <div class="grain-overlay"></div>
    <AnimatedBackground />
    <div class="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <header class="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#hero" class="font-display text-sm tracking-[0.26em] text-white hover:text-accent-orange transition-colors duration-300">
          Tien<span class="text-accent-orange">.</span>Le
        </a>
        <nav class="hidden items-center gap-8 text-xs uppercase tracking-[0.18em] md:flex">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            class="nav-link text-white/60 hover:text-white"
            :class="{ 'is-active text-white': activeSection === item.id }"
          >
            {{ item.label }}
          </a>
        </nav>
        <a href="#contact" class="btn-primary text-xs !py-2.5 !px-4 md:hidden">
          Contact
        </a>
      </header>
    </div>

    <main>
      <HeroSection id="hero" class="reveal" />
      <AchievementsSection v-if="showAchievements" class="reveal" />
      <AboutSection id="about" class="reveal" />
      <TechStack id="skills" class="reveal" />

      <section id="projects" class="reveal section-space">
        <div class="mb-12 flex items-center justify-between border-b border-white/10 pb-6 section-shell">
          <h2 class="font-display text-sm uppercase tracking-[0.24em] text-white/60">Featured projects</h2>
          <span class="text-xs uppercase tracking-[0.2em] text-white/40">2024 - 2026</span>
        </div>

        <div class="space-y-6">
          <ProjectCard
            v-for="(project, index) in projects"
            :key="project.title"
            :index="index + 1"
            :title="project.title"
            :description="project.description"
            :year="project.year"
            :category="project.category"
            :impact="project.impact"
            :technologies="project.technologies"
            :links="project.links"
          />
        </div>
      </section>

      <DocsSection id="docs" class="reveal" />
      <SubscribeSection id="subscribe" class="reveal" />
      <ContactSection id="contact" class="reveal" />
      <Footer />
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
import Footer from './components/Footer.vue'
import AnimatedBackground from './components/AnimatedBackground.vue'
import LoadingScreen from './components/LoadingScreen.vue'
import AchievementsSection from './components/AchievementsSection.vue'
import CustomCursor from './components/CustomCursor.vue'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'docs', label: 'Docs' },
  { id: 'subscribe', label: 'Subscribe' },
  { id: 'contact', label: 'Contact' },
]

const activeSection = ref('hero')
const isLoading = ref(true)
const showAchievements = ref(true)
let sectionObserver
let revealObserver

onMounted(() => {
  // Hide loading screen after content loads
  setTimeout(() => {
    isLoading.value = false
  }, 1500)

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
    description: 'Thiết kế pipeline với GitHub Actions, Docker build và kiểm thử tự động cho các dịch vụ nhỏ. Tích hợp automated testing, security scanning, và deployment strategies.',
    year: '2025',
    category: 'DevOps / CI-CD',
    impact: 'Deploy time reduced by 50%',
    technologies: ['GitHub Actions', 'Docker', 'Shell', 'Testing'],
    links: {
      github: 'https://github.com',
      demo: 'https://demo.example.com'
    }
  },
  {
    title: 'Kubernetes Lab Cluster',
    description: 'Triển khai cụm Kubernetes cho lab, thiết lập namespace, resource limit và monitoring cơ bản. Implement Helm charts và custom resources.',
    year: '2026',
    category: 'DevOps / Kubernetes',
    impact: 'Stable multi-service environment',
    technologies: ['Kubernetes', 'Helm', 'Prometheus', 'Grafana'],
    links: {
      github: 'https://github.com',
      docs: 'https://docs.example.com'
    }
  },
  {
    title: 'Infrastructure as Code Setup',
    description: 'Áp dụng Terraform + Ansible để chuẩn hóa provisioning và cấu hình máy chủ. Build reusable modules với testing và versioning.',
    year: '2024',
    category: 'DevOps / IaC',
    impact: 'Provisioning in minutes',
    technologies: ['Terraform', 'Ansible', 'AWS', 'Git'],
    links: {
      github: 'https://github.com'
    }
  },
]
</script>