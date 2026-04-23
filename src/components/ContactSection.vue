<template>
  <section class="section-space border-t border-white/10">
    <div class="section-shell">
      <div class="mb-12">
        <p class="font-display text-sm uppercase tracking-[0.24em] text-accent-orange">Get in touch</p>
        <h2 class="mt-4 font-display text-4xl text-white md:text-5xl lg:text-6xl">
          Let's build something great together
        </h2>
      </div>

      <div class="grid gap-12 lg:grid-cols-2">
        <div>
          <p class="max-w-xl text-base leading-relaxed text-white/65">
            Co du an can hop tac hoac muon trao doi ve cong nghe? Gui email hoac ket noi qua cac kenh ben duoi.
            Luon san sang thao luan ve DevOps, automation, infrastructure, hoac bat ky chu de cong nghe nao.
          </p>

          <div class="mt-10 space-y-6">
            <div class="flex items-center gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-full border border-accent-orange/30 bg-accent-orange/10 text-accent-orange">
                <Mail class="h-5 w-5" />
              </div>
              <div>
                <p class="text-xs uppercase tracking-wider text-white/40">Email</p>
                <a href="mailto:lvtf07@gmail.com" class="font-display text-lg text-white hover:text-accent-orange transition-colors">
                  lvtf07@gmail.com
                </a>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-full border border-accent-blue/30 bg-accent-blue/10 text-accent-blue">
                <MapPin class="h-5 w-5" />
              </div>
              <div>
                <p class="text-xs uppercase tracking-wider text-white/40">Location</p>
                <p class="font-display text-lg text-white">Ho Chi Minh City, Vietnam</p>
              </div>
            </div>
          </div>

          <div class="mt-10">
            <p class="mb-4 text-xs uppercase tracking-wider text-white/40">Connect with me</p>
            <div class="flex flex-wrap gap-3">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/70 transition-all duration-300 hover:border-accent-orange/40 hover:bg-accent-orange/10 hover:text-accent-orange"
              >
                <component :is="social.icon" class="h-4 w-4" />
                <span>{{ social.name }}</span>
              </a>
            </div>
          </div>
        </div>

        <div class="glass-card p-8 md:p-10">
          <h3 class="font-display text-xl text-white mb-6">Send a message</h3>
          <form class="space-y-5" @submit.prevent="handleSubmit">
            <div>
              <label for="name" class="mb-2 block text-xs uppercase tracking-wider text-white/50">Name</label>
              <input
                type="text"
                id="name"
                class="input-field w-full"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label for="email" class="mb-2 block text-xs uppercase tracking-wider text-white/50">Email</label>
              <input
                type="email"
                id="email"
                class="input-field w-full"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label for="message" class="mb-2 block text-xs uppercase tracking-wider text-white/50">Message</label>
              <textarea
                id="message"
                rows="4"
                class="input-field w-full resize-none"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>
            <button type="submit" class="btn-primary w-full">
              <span>Send message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Mail, MapPin, Github, Linkedin } from 'lucide-vue-next'

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/lvtchuai', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
]

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted')
}
</script>
