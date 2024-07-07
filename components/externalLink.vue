<template>
  <a
    :href="to"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex flex-row items-center gap-1"
  >
    <LucideExternalLink v-if="showIcon" />
    <slot />
  </a>
</template>

<script setup>
const props = defineProps({
  to: String,
  showIcon: Boolean,
})
</script>
