<template>
  <section class="section-space relative border-y border-white/10">
    <div class="section-shell">
      <div class="mb-10 flex items-center justify-between">
        <h2 class="font-display text-sm uppercase tracking-[0.24em] text-white/60">My skills</h2>
        <p class="text-xs uppercase tracking-[0.18em] text-white/35">Core strengths</p>
      </div>

      <div class="grid gap-5 md:grid-cols-3">
        <article v-for="group in groups" :key="group.title" class="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 class="font-display text-xl text-white">{{ group.title }}</h3>
          <ul class="mt-5 space-y-3 text-sm text-white/65">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>

      <div class="mt-8 overflow-hidden rounded-full border border-white/10 bg-black/20 py-3">
        <div class="marquee whitespace-nowrap text-xs uppercase tracking-[0.2em] text-white/40">
          Docker · GitHub · Ansible · Kubernetes · Terraform · Linux · CI/CD · Monitoring · Automation ·
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const groups = [
  {
    title: 'Container & Orchestration',
    items: ['Docker image build & runtime', 'Kubernetes basics: deploy, service, ingress', 'Container troubleshooting & logs'],
  },
  {
    title: 'Automation & IaC',
    items: ['Terraform provisioning for infra', 'Ansible playbooks for config', 'GitHub Actions for CI/CD'],
  },
  {
    title: 'Delivery & Ops',
    items: ['Git/GitHub workflow discipline', 'Release checklists & runbooks', 'Monitoring mindset & alerts'],
  },
]
</script>