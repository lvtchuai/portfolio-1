<template>
  <article class="group card-hover reveal rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden">
    <div class="relative p-6 md:p-8">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div class="flex-1">
          <div class="mb-4 flex items-center gap-3">
            <span class="rounded-lg bg-accent-orange/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-accent-orange font-mono">
              {{ year }}
            </span>
            <span class="rounded-lg bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white/50 font-mono">
              {{ category }}
            </span>
          </div>

          <h3 class="font-display text-2xl leading-tight text-white transition-colors group-hover:text-accent-orange md:text-3xl">
            {{ index }}. {{ title }}
          </h3>

          <p class="mt-4 text-sm leading-relaxed text-white/60 md:text-base">
            {{ description }}
          </p>

          <div v-if="technologies && technologies.length" class="mt-6 flex flex-wrap gap-2">
            <span
              v-for="tech in technologies"
              :key="tech"
              class="skill-badge"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="mt-6 lg:mt-0 lg:ml-8">
          <div class="rounded-2xl border border-accent-orange/20 bg-gradient-to-br from-accent-orange/10 to-transparent p-5 min-w-[160px]">
            <p class="text-[10px] uppercase tracking-[0.2em] text-accent-orange/60">Impact</p>
            <p class="mt-2 font-display text-lg text-white">{{ impact }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="hasLinks" class="flex border-t border-white/5 bg-white/[0.01]">
      <a
        v-if="links?.github"
        :href="links.github"
        target="_blank"
        rel="noopener noreferrer"
        class="flex flex-1 items-center justify-center gap-2 border-r border-white/5 px-4 py-3 text-xs uppercase tracking-wider text-white/50 transition-all hover:bg-white/5 hover:text-accent-orange"
      >
        <Github class="h-4 w-4" />
        <span>Code</span>
      </a>
      <a
        v-if="links?.demo"
        :href="links.demo"
        target="_blank"
        rel="noopener noreferrer"
        class="flex flex-1 items-center justify-center gap-2 border-r border-white/5 px-4 py-3 text-xs uppercase tracking-wider text-white/50 transition-all hover:bg-white/5 hover:text-accent-blue"
      >
        <ExternalLink class="h-4 w-4" />
        <span>Live demo</span>
      </a>
      <a
        v-if="links?.docs"
        :href="links.docs"
        target="_blank"
        rel="noopener noreferrer"
        class="flex flex-1 items-center justify-center gap-2 px-4 py-3 text-xs uppercase tracking-wider text-white/50 transition-all hover:bg-white/5 hover:text-accent-purple"
      >
        <FileText class="h-4 w-4" />
        <span>Docs</span>
      </a>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { Github, ExternalLink, FileText } from 'lucide-vue-next'

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  impact: {
    type: String,
    required: true,
  },
  technologies: {
    type: Array,
    default: () => [],
  },
  links: {
    type: Object,
    default: () => ({}),
  },
})

const hasLinks = computed(() => {
  return props.links && (props.links.github || props.links.demo || props.links.docs)
})
</script>
