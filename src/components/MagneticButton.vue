<template>
  <button
    ref="buttonRef"
    class="magnetic-button group relative overflow-hidden rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:shadow-glow-blue"
    :class="sizeClass"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <span class="relative z-10 flex items-center justify-center gap-2">
      <slot />
    </span>
    <div
      class="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    ></div>
    <div
      class="absolute -inset-1 rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-orange opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-50"
    ></div>
  </button>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
})

const buttonRef = ref(null)

const sizeClass = computed(() => {
  const sizes = {
    sm: 'px-4 py-2 text-[10px]',
    md: 'px-8 py-4 text-xs',
    lg: 'px-10 py-5 text-sm',
  }
  return sizes[props.size]
})

const onMouseMove = (event) => {
  const button = buttonRef.value
  if (!button) return

  const rect = button.getBoundingClientRect()
  const x = event.clientX - rect.left - rect.width / 2
  const y = event.clientY - rect.top - rect.height / 2

  const distance = 20
  const moveX = (x / (rect.width / 2)) * distance
  const moveY = (y / (rect.height / 2)) * distance

  button.style.transform = `translate(${moveX}px, ${moveY}px)`
}

const onMouseLeave = () => {
  const button = buttonRef.value
  if (button) {
    button.style.transform = 'translate(0, 0)'
  }
}
</script>
