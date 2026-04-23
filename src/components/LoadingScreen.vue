<template>
  <div
    class="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center bg-black/95 transition-opacity duration-500"
    :class="{ 'opacity-0 pointer-events-none': !isLoading, 'opacity-100': isLoading }"
  >
    <div class="text-center">
      <div class="relative mb-8">
        <div class="absolute inset-0 animate-ping">
          <div class="h-24 w-24 rounded-full border-4 border-accent-orange/30"></div>
        </div>
        <div class="relative h-24 w-24 animate-spin-slow">
          <svg class="h-full w-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(233, 110, 54, 0.2)"
              stroke-width="2"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#gradient)"
              stroke-width="3"
              stroke-dasharray="283"
              stroke-dashoffset="200"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#e96e36" />
                <stop offset="50%" stop-color="#377aff" />
                <stop offset="100%" stop-color="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p class="font-display text-xl text-white/70 tracking-wider">LOADING</p>
      <div class="mt-4 flex justify-center gap-1">
        <span class="h-1.5 w-1.5 animate-bounce rounded-full bg-accent-orange" style="animation-delay: 0ms"></span>
        <span class="h-1.5 w-1.5 animate-bounce rounded-full bg-accent-blue" style="animation-delay: 150ms"></span>
        <span class="h-1.5 w-1.5 animate-bounce rounded-full bg-accent-purple" style="animation-delay: 300ms"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isLoading: {
    type: Boolean,
    default: true,
  },
})
</script>
