<template>
  <NuxtLink
    :to="to"
    :target="external ? '_blank' : ''"
    :rel="external ? 'noopener noreferrer' : ''"
    :class="
      'flex gap-2 px-10 py-3 rounded-xl items-center text-lg text-inherit font-normal duration-300 active:scale-95 ' +
      (secondary
        ? 'border-2 border-brand-text hover:bg-brand-text hover:text-black'
        : 'border-2 border-brand-colour bg-brand-colour hover:brightness-150')
    "
  >
    <slot />
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  to: String,
  size: String,
  secondary: Boolean,
  external: Boolean,
})
</script>
