<template>
  <article class="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/30 md:p-8">
    <div class="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
      <div class="max-w-2xl">
        <p class="text-xs uppercase tracking-[0.18em] text-white/40">0{{ index }} / {{ year }}</p>
        <h3 class="mt-3 font-display text-3xl leading-tight text-white md:text-4xl">{{ title }}</h3>
        <p class="mt-4 text-sm leading-relaxed text-white/65 md:text-base">{{ description }}</p>
        <p class="mt-6 inline-flex rounded-full border border-white/15 px-4 py-1.5 text-xs uppercase tracking-[0.16em] text-white/60">
          {{ category }}
        </p>
      </div>

      <div class="rounded-2xl border border-white/10 bg-black/30 p-4 md:min-w-[220px]">
        <p class="text-[11px] uppercase tracking-[0.18em] text-white/40">Outcome</p>
        <p class="mt-3 font-display text-xl text-white">{{ impact }}</p>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
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
})
</script>