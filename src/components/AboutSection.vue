<template>
  <section id="about" class="section-space bg-white/[0.01]">
    <div class="section-shell">
      <div class="mb-12">
        <p class="font-display text-sm uppercase tracking-[0.24em] text-accent-blue">Who I am</p>
        <h2 class="mt-4 font-display text-4xl text-white md:text-5xl lg:text-6xl">
          About <span class="text-accent-blue">Me</span>
        </h2>
      </div>

      <div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div class="space-y-6">
          <div class="prose prose-invert max-w-none">
            <p class="text-lg leading-relaxed text-white/70">
              DevOps engineer định hướng tập trung vào tự động hóa hạ tầng, vận hành ổn định và triển khai nhanh.
            </p>
            <p class="text-base leading-relaxed text-white/60">
              Hiện tại mình học và thực hành các kỹ năng DevOps cơ bản: Docker, GitHub, Ansible, Kubernetes và Terraform.
              Mình ưu tiên CI/CD rõ ràng, hạ tầng có thể tái tạo và tài liệu vận hành chi tiết.
            </p>
            <p class="text-base leading-relaxed text-white/60">
              Mục tiêu của mình là xây dựng hệ thống ổn định, dễ mở rộng và dễ vận hành.
              Luôn tìm kiếm cơ hội học hỏi công nghệ mới và cải tiến quy trình.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3">
            <div class="glass-card p-4 text-center">
              <p class="text-2xl font-display font-bold text-accent-orange">2+</p>
              <p class="mt-1 text-xs uppercase tracking-wider text-white/50">Years</p>
            </div>
            <div class="glass-card p-4 text-center">
              <p class="text-2xl font-display font-bold text-accent-blue">15+</p>
              <p class="mt-1 text-xs uppercase tracking-wider text-white/50">Projects</p>
            </div>
            <div class="glass-card p-4 text-center">
              <p class="text-2xl font-display font-bold text-accent-purple">100%</p>
              <p class="mt-1 text-xs uppercase tracking-wider text-white/50">Dedicated</p>
            </div>
          </div>

          <div class="flex flex-wrap gap-3 pt-2">
            <span
              v-for="interest in interests"
              :key="interest"
              class="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60 transition-colors hover:border-accent-blue/40 hover:text-accent-blue"
            >
              {{ interest }}
            </span>
          </div>
        </div>

        <div class="space-y-6">
          <div class="glass-card p-6">
            <h3 class="mb-6 font-display text-lg text-white">Personal Info</h3>
            <dl class="space-y-4">
              <div class="flex justify-between border-b border-white/5 pb-3">
                <dt class="text-sm text-white/50">Full Name</dt>
                <dd class="text-sm font-mono text-white">Tien Le</dd>
              </div>
              <div class="flex justify-between border-b border-white/5 pb-3">
                <dt class="text-sm text-white/50">Location</dt>
                <dd class="text-sm font-mono text-white">Ho Chi Minh City, Vietnam</dd>
              </div>
              <div class="flex justify-between border-b border-white/5 pb-3">
                <dt class="text-sm text-white/50">Experience</dt>
                <dd class="text-sm font-mono text-white">2+ Years</dd>
              </div>
              <div class="flex justify-between border-b border-white/5 pb-3">
                <dt class="text-sm text-white/50">English</dt>
                <dd class="text-sm font-mono text-white">Professional</dd>
              </div>
              <div class="flex justify-between pb-3">
                <dt class="text-sm text-white/50">Availability</dt>
                <dd class="text-sm font-mono text-accent-emerald">Open to opportunities</dd>
              </div>
            </dl>
          </div>

          <div class="glass-card p-6">
            <h3 class="mb-4 font-display text-lg text-white">Work Approach</h3>
            <ul class="space-y-3">
              <li v-for="approach in approaches" :key="approach" class="flex items-start gap-3">
                <CheckCircle class="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-teal" />
                <span class="text-sm text-white/70">{{ approach }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircle } from 'lucide-vue-next'

const interests = [
  'Infrastructure as Code',
  'Container Orchestration',
  'CI/CD Pipelines',
  'Cloud Computing',
  'Automation',
  'Monitoring',
  'DevSecOps',
  'System Design',
]

const approaches = [
  'Infrastructure as Code first approach',
  'Automate everything that repeats',
  'Documentation as part of delivery',
  'Monitor, observe, and improve',
  'Security integrated from the start',
]
</script>
