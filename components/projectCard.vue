<template>
  <div
    class="flex flex-col gap-4 bg-[color:var(--brand-colour)] rounded-2xl max-w-full"
  >
    <!-- Title -->
    <span
      class="gap-4 flex flex-row items-center text-[color:var(--big-text-colour)] text-4xl sm:text-5xl font-bold"
    >
      {{ props.title }}
      <!-- Icon -->
      <img class="h-12 bg-white rounded-xl p-1" :src="props.icon" />
    </span>
    <!-- Description -->
    <div
      v-for="description in description"
      class="flex flex-col gap-3 text-xl sm:text-2xl"
    >
      {{ description }}
    </div>
    <!-- Buttons -->
    <div class="flex mt-5">
      <NuxtLink
        v-for="(link, index) in urls"
        :to="link"
        class="flex gap-2 px-10 py-3 rounded-xl items-center text-lg border-2 duration-300 hover:bg-white hover:text-black active:scale-95"
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
