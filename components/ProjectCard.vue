<template>
  <div class="flex flex-col gap-4 max-w-full">
    <!-- Title -->
    <span
      class="gap-4 flex flex-row items-center text-[color:var(--big-text-colour)] text-4xl sm:text-5xl font-bold"
    >
      <!-- Icon -->
      <img
        class="h-12 bg-[var(--text-colour)] rounded-xl p-[2px]"
        :src="props.icon"
      />
      {{ props.title }}
    </span>
    <!-- Description -->
    <div
      v-for="description in description"
      class="flex flex-col gap-3 text-xl sm:text-2xl"
    >
      {{ description }}
    </div>
    <!-- Buttons -->
    <div class="flex flex-row flex-wrap gap-3 mb-5">
      <NEButton v-for="(link, index) in urls" :to="link" secondary external>
        <LucideDownload />{{ index }}
      </NEButton>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: Object,
  urls: Object,
  icon: String,
})
</script>
