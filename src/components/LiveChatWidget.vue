<template>
  <div class="fixed bottom-5 right-5 z-50 md:bottom-8 md:right-8">
    <div
      v-if="isOpen"
      class="mb-4 w-[88vw] max-w-sm rounded-2xl border border-white/20 bg-[#151515] p-4 shadow-2xl backdrop-blur"
    >
      <div class="flex items-center justify-between border-b border-white/10 pb-3">
        <span class="font-display text-base text-white">Quick Chat</span>
        <button @click="isOpen = false" class="text-white/45 transition hover:text-white">x</button>
      </div>
      <div class="py-4 text-sm leading-relaxed text-white/65">
        Hi! De lai email va loi nhan, minh se phan hoi trong vong 24h.
      </div>
      <div>
        <input
          type="text"
          placeholder="Your email"
          class="w-full rounded-xl border border-white/15 bg-black/25 px-3 py-2 text-sm text-white placeholder:text-white/35 focus:border-white/35 focus:outline-none"
        />
      </div>
    </div>

    <button
      @click="isOpen = !isOpen"
      class="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white text-black shadow-xl transition hover:scale-105"
      aria-label="Toggle live chat"
    >
      <span class="text-lg">•••</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>
