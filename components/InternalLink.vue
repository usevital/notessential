<template>
  <NuxtLink
    :to="to"
    class="inline-flex flex-row items-center gap-1 font-bold text-[var(--brand-blue)]"
  >
    <slot />
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  to: String,
})
</script>
