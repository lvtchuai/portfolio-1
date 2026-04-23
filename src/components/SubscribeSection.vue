<template>
  <section id="subscribe" class="relative section-space overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-accent-purple/10 via-accent-orange/5 to-transparent"></div>
    <div class="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 animate-float opacity-10 blur-[120px] [background:radial-gradient(circle_at_center,rgba(139,92,246,0.6)_0%,transparent_70%)]" />
    <div class="absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 animate-float-delayed opacity-10 blur-[120px] [background:radial-gradient(circle_at_center,rgba(233,110,54,0.6)_0%,transparent_70%)]" />

    <div class="section-shell relative z-10">
      <div class="mx-auto max-w-3xl text-center">
        <div class="mb-8 inline-flex items-center gap-2 rounded-full border border-accent-purple/30 bg-accent-purple/10 px-4 py-2 text-xs uppercase tracking-wider text-accent-purple">
          <Mail class="h-3 w-3" />
          Newsletter
        </div>

        <h2 class="font-display text-4xl text-white md:text-5xl lg:text-6xl">
          Stay <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-accent-purple">updated</span>
        </h2>
        <p class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60">
          Get notified about new projects, technical deep dives, and infrastructure insights.
          No spam, only quality content.
        </p>

        <form class="mx-auto mt-10 max-w-md" @submit.prevent="handleSubscribe">
          <div class="relative group">
            <input
              type="email"
              placeholder="Enter your email"
              class="input-field w-full py-4 pl-6 pr-32 text-base"
              required
            />
            <button
              type="submit"
              class="absolute right-2 top-1/2 -translate-y-1/2 btn-primary px-6"
            >
              <span>Subscribe</span>
            </button>
          </div>
          <p class="mt-4 text-xs text-white/40">
            By subscribing, you agree to the Privacy Policy. Unsubscribe anytime.
          </p>
        </form>

        <div class="mt-12 flex items-center justify-center gap-8">
          <div v-for="stat in subscribeStats" :key="stat.label" class="text-center">
            <p class="font-display text-3xl font-bold text-white">{{ stat.value }}</p>
            <p class="mt-1 text-xs uppercase tracking-wider text-white/50">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Mail } from 'lucide-vue-next'

const subscribeStats = [
  { value: '500+', label: 'Subscribers' },
  { value: 'Monthly', label: 'Updates' },
  { value: '0%', label: 'Spam' },
]

const handleSubscribe = () => {
  // Handle subscription
  console.log('Subscribed')
}
</script>
