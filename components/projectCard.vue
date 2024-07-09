<template>
  <div
    class="flex flex-col gap-4 bg-[color:var(--brand-colour)] rounded-2xl max-w-full"
  >
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
    <div class="flex mb-5 gap-3">
      <NuxtLink
        v-for="(link, index) in urls"
        :to="link"
        class="flex gap-2 px-10 py-3 rounded-xl items-center text-lg border-2 border-[var(--text-colour)] duration-300 hover:bg-[var(--text-colour)] hover:text-black active:scale-95"
        ><LucideDownload />{{ index }}</NuxtLink
      >
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
