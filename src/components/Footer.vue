<template>
  <footer class="border-t border-white/10 bg-black/20">
    <div class="section-shell py-12">
      <div class="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div class="text-center md:text-left">
          <a href="#hero" class="font-display text-xl tracking-[0.2em] text-white hover:text-accent-orange transition-colors">
            Tien<span class="text-accent-orange">.</span>Le
          </a>
          <p class="mt-2 text-sm text-white/50">
            DevOps Engineer focused on automation & infrastructure
          </p>
        </div>

        <div class="flex items-center gap-4">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-accent-orange/50 hover:bg-accent-orange/10 hover:text-accent-orange"
            :aria-label="`Visit ${social.name}`"
          >
            <component :is="social.icon" class="h-5 w-5" />
          </a>
        </div>
      </div>

      <div class="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-white/40 md:flex-row">
        <p>&copy; {{ currentYear }} Tien Le. All rights reserved.</p>
        <p>Built with Vue 3, Vite & Tailwind CSS</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { Github, Linkedin, Mail } from 'lucide-vue-next'

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/lvtchuai', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { name: 'Email', url: 'mailto:lvtf07@gmail.com', icon: Mail },
]

const currentYear = computed(() => new Date().getFullYear())
</script>
