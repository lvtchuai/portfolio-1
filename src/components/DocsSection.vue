<template>
  <section id="docs" class="section-space border-y border-white/10">
    <div class="section-shell">
      <div class="mb-12 flex items-center justify-between">
        <div>
          <p class="font-display text-sm uppercase tracking-[0.24em] text-accent-orange">Deep dives</p>
          <h2 class="mt-2 font-display text-3xl text-white md:text-4xl">Technical Documentation</h2>
        </div>
        <span class="text-xs uppercase tracking-[0.18em] text-white/35">Learn more</span>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <article
          v-for="(doc, index) in docs"
          :key="doc.title"
          class="group reveal glass-card p-6 card-hover"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="mb-4 flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors">
              <component :is="doc.icon" class="h-5 w-5" />
            </div>
            <span class="rounded-full bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white/50 font-mono">
              {{ doc.type }}
            </span>
          </div>

          <h3 class="font-display text-xl text-white group-hover:text-accent-blue transition-colors">
            {{ doc.title }}
          </h3>

          <p class="mt-3 text-sm leading-relaxed text-white/60">
            {{ doc.description }}
          </p>

          <div class="mt-6 flex items-center gap-2 text-sm font-medium text-accent-blue opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Read document</span>
            <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { BookOpen, FileText, ScrollText, ArrowRight } from 'lucide-vue-next'

const docs = [
  {
    title: 'Terraform Modules Library',
    description: 'Chuẩn hóa hạ tầng, versioning và kế hoạch mở rộng với reusable Terraform modules.',
    type: 'Case study',
    icon: BookOpen,
  },
  {
    title: 'Kubernetes Runbook',
    description: 'Quy trình deploy, scale và xử lý sự cố cơ bản cho cụm K8s.',
    type: 'Technical note',
    icon: ScrollText,
  },
  {
    title: 'Ansible Playbooks Guide',
    description: 'Cấu hình server, chuẩn hóa môi trường và tự động hóa với Ansible.',
    type: 'Reference',
    icon: FileText,
  },
]
</script>
