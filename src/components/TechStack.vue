<template>
  <section id="skills" class="section-space relative border-y border-white/10">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent"></div>
    <div class="section-shell relative z-10">
      <div class="mb-12 flex items-center justify-between">
        <div>
          <p class="font-display text-sm uppercase tracking-[0.24em] text-accent-orange">Core strengths</p>
          <h2 class="mt-2 font-display text-3xl text-white md:text-4xl">Technical Expertise</h2>
        </div>
        <span class="hidden text-xs uppercase tracking-[0.18em] text-white/35 sm:block">What I work with</span>
      </div>

      <div class="grid gap-8 lg:grid-cols-2">
        <div class="space-y-8">
          <div v-for="group in groups" :key="group.title" class="reveal">
            <div class="mb-4 flex items-center gap-3">
              <div class="h-1 w-1 rounded-full bg-accent-orange"></div>
              <h3 class="font-display text-xl text-white">{{ group.title }}</h3>
            </div>
            <div class="grid gap-3 sm:grid-cols-2">
              <div
                v-for="item in group.items"
                :key="item"
                class="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-accent-orange/30 hover:bg-accent-orange/5"
              >
                <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/50 group-hover:bg-accent-orange/10 group-hover:text-accent-orange transition-colors">
                  <Check class="h-4 w-4" />
                </div>
                <span class="text-sm text-white/70 group-hover:text-white transition-colors">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="reveal">
          <div class="sticky top-32 space-y-6">
            <div class="glass-card p-6">
              <h3 class="mb-6 font-display text-lg text-white">Skill Proficiency</h3>
              <div class="space-y-5">
                <div v-for="skill in skillLevels" :key="skill.name">
                  <div class="mb-2 flex items-center justify-between">
                    <span class="text-sm font-medium text-white">{{ skill.name }}</span>
                    <span class="text-xs font-mono text-accent-orange">{{ skill.level }}%</span>
                  </div>
                  <div class="h-2 overflow-hidden rounded-full bg-white/5">
                    <div
                      class="h-full rounded-full bg-gradient-to-r from-accent-orange to-accent-blue transition-all duration-1000 ease-out"
                      :style="{ width: `${skill.level}%` }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="glass-card p-6">
              <h3 class="mb-4 font-display text-lg text-white">Currently Learning</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in learning"
                  :key="tech"
                  class="rounded-full border border-accent-blue/30 bg-accent-blue/10 px-3 py-1.5 text-xs font-mono text-accent-blue"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <p class="mb-4 text-xs uppercase tracking-[0.18em] text-white/40">Tech stack overview</p>
        <div class="marquee-container overflow-hidden">
          <div class="marquee whitespace-nowrap">
            <span v-for="tech in allTechnologies" :key="tech" class="mx-4 text-2xl font-mono text-white/25 hover:text-accent-orange transition-colors cursor-default">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Check } from 'lucide-vue-next'

const groups = [
  {
    title: 'Container & Orchestration',
    items: [
      'Docker image build & runtime',
      'Kubernetes basics: deploy, service, ingress',
      'Container troubleshooting & logs',
      'Helm charts & operators',
    ],
  },
  {
    title: 'Automation & IaC',
    items: [
      'Terraform provisioning for infra',
      'Ansible playbooks for config',
      'GitHub Actions for CI/CD',
      'Packer for image building',
    ],
  },
  {
    title: 'Delivery & Ops',
    items: [
      'Git/GitHub workflow discipline',
      'Release checklists & runbooks',
      'Monitoring mindset & alerts',
      'Incident response basics',
    ],
  },
]

const skillLevels = [
  { name: 'Docker', level: 85 },
  { name: 'Kubernetes', level: 75 },
  { name: 'Terraform', level: 80 },
  { name: 'Ansible', level: 70 },
  { name: 'GitHub Actions', level: 85 },
  { name: 'Linux/CLI', level: 90 },
  { name: 'AWS/GCP', level: 65 },
  { name: 'Monitoring', level: 70 },
]

const learning = [
  'Service Mesh',
  'Advanced K8s',
  'Observability',
  'GitOps',
  'Security',
]

const allTechnologies = [
  'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Git', 'GitHub Actions',
  'AWS', 'Linux', 'Helm', 'Prometheus', 'Grafana', 'Jenkins', 'CI/CD',
  'Bash', 'Python', 'YAML', 'JSON', 'HTTP', 'SSL/TLS', 'Nginx',
]
</script>

<style scoped>
.marquee-container {
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.marquee span {
  transition: all 0.3s ease;
}
</style>
