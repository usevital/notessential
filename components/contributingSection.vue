<template>
  <div class="flex flex-col flex-wrap gap-6 pb-8">
    <span
      class="text-[var(--big-text-color)] italic font-['Geist Mono'] text-[4rem]"
    >
      <span class="font-[250] tracking wider">{{ title }}</span>
    </span>
    <span class="text-2xl">{{ subtitle }} </span>

    <div v-for="(info, title) in data" class="text-xl indent-4">
      {{ title + 1 }}. {{ info }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
  title: String,
  subtitle: String,
})
</script>
