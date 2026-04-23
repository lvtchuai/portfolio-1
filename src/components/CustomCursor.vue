<template>
  <div
    v-if="isVisible"
    class="custom-cursor fixed z-[9998] pointer-events-none mix-blend-difference transition-all duration-75"
    :style="cursorStyle"
  >
    <div class="h-4 w-4 rounded-full bg-white"></div>
    <div class="absolute -top-1 -left-1 h-6 w-6 rounded-full border border-white/50"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const position = ref({ x: 0, y: 0 })

const cursorStyle = computed(() => ({
  left: `${position.value.x - 8}px`,
  top: `${position.value.y - 8}px`,
}))

const handleMouseMove = (event) => {
  position.value = { x: event.clientX, y: event.clientY }
}

const handleMouseEnter = () => {
  isVisible.value = true
}

const handleMouseLeave = () => {
  isVisible.value = false
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  document.body.addEventListener('mouseenter', handleMouseEnter)
  document.body.addEventListener('mouseleave', handleMouseLeave)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  document.body.removeEventListener('mouseenter', handleMouseEnter)
  document.body.removeEventListener('mouseleave', handleMouseLeave)
})
</script>
