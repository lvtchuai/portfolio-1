<template>
  <section class="relative section-space overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-accent-orange/5 via-accent-blue/5 to-transparent"></div>
    <div class="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 animate-float opacity-20 blur-[100px] [background:radial-gradient(circle_at_center,rgba(233,110,54,0.5)_0%,transparent_70%)]" />
    <div class="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 animate-float-delayed opacity-15 blur-[100px] [background:radial-gradient(circle_at_center,rgba(55,122,255,0.5)_0%,transparent_70%)]" />

    <div class="section-shell relative z-10">
      <div class="mb-12 text-center">
        <p class="font-display text-sm uppercase tracking-[0.24em] text-accent-orange">Milestones</p>
        <h2 class="mt-4 font-display text-4xl text-white md:text-5xl lg:text-6xl">
          Achievements & Impact
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-white/60">
          Key metrics and accomplishments from my DevOps journey
        </p>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(achievement, index) in achievements"
          :key="achievement.label"
          class="group reveal glass-card p-6 text-center card-hover"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center">
            <div class="absolute inset-0 animate-ping-slow rounded-full bg-accent-orange/20"></div>
            <div class="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent-orange/30 bg-accent-orange/10">
              <component :is="achievement.icon" class="h-6 w-6 text-accent-orange" />
            </div>
          </div>
          <p class="font-display text-4xl font-bold text-white">{{ achievement.value }}</p>
          <p class="mt-2 text-xs uppercase tracking-wider text-white/50">{{ achievement.label }}</p>
          <p class="mt-3 text-sm text-white/40">{{ achievement.description }}</p>
        </div>
      </div>

      <div class="mt-16 grid gap-6 md:grid-cols-3">
        <div v-for="testimonial in testimonials" :key="testimonial.author" class="glass-card p-6 card-hover">
          <div class="mb-4 flex">
            <span v-for="n in 5" :key="n" class="text-accent-orange text-sm">★</span>
          </div>
          <p class="mb-4 text-sm leading-relaxed text-white/70 italic">"{{ testimonial.quote }}"</p>
          <div class="flex items-center gap-3">
            <div class="h-10 w-10 rounded-full bg-gradient-to-br from-accent-orange to-accent-blue flex items-center justify-center text-white font-bold">
              {{ testimonial.initials }}
            </div>
            <div>
              <p class="text-sm font-semibold text-white">{{ testimonial.author }}</p>
              <p class="text-xs text-white/50">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Trophy, GitCommit, Clock, Award, Star } from 'lucide-vue-next'

const achievements = [
  {
    value: '50%',
    label: 'Faster Deployments',
    description: 'CI/CD optimization achieved',
    icon: Trophy,
  },
  {
    value: '99.9%',
    label: 'Uptime Maintained',
    description: 'Infrastructure reliability',
    icon: Award,
  },
  {
    value: '2+ Years',
    label: 'Hands-on Experience',
    description: 'DevOps & Cloud engineering',
    icon: Clock,
  },
  {
    value: '15+',
    label: 'Projects Completed',
    description: 'Infrastructure & automation',
    icon: GitCommit,
  },
]

const testimonials = [
  {
    quote: "Great at automating repetitive tasks and improving team efficiency.",
    author: 'Dev Lead',
    initials: 'DL',
    role: 'Tech Startup',
  },
  {
    quote: "Solid understanding of infrastructure principles and IaC practices.",
    author: 'Senior Engineer',
    initials: 'SE',
    role: 'Cloud Company',
  },
  {
    quote: "Reliable, detail-oriented, and always learning new technologies.",
    author: 'Team Manager',
    initials: 'TM',
    role: 'Enterprise',
  },
]
</script>

<style scoped>
@keyframes ping-slow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.3);
    opacity: 0;
  }
}

.animate-ping-slow {
  animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>
