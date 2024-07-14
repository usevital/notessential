<template>
  <NuxtLink
    :to="to"
    :target="external ? '_blank' : ''"
    :rel="external ? 'noopener noreferrer' : ''"
    class="inline-flex flex-row items-center gap-1 font-bold text-[var(--brand-blue)] duration-300 active:scale-95"
  >
    <LucideExternalLink v-if="showIcon" />
    <slot />
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  to: String,
  external: Boolean,
  showIcon: Boolean,
})
</script>
