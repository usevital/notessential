<template>
  <span class="text-[4rem] flex flex-col flex-wrap">
    <span
      class="text-[1.5rem] text-pretty sm:text-[2rem] md:text-[3rem] lg:text-[4rem] internalFont"
    >
      {{ hero }}
    </span>
    <span class="text-lg">{{ subtext }}</span>
  </span>
</template>

<script setup>
const props = defineProps({
  hero: String,
  subtext: String,
})
</script>
