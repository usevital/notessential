<template>
  <div
    class="flex flex-col gap-6 bg-[color:var(--brand-colour)] rounded-2xl max-w-full"
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
    <div class="flex flex-col gap-3 text-xl sm:text-2xl">
      <slot />
    </div>
    <!-- Buttons -->
    <div class="flex mt-5">
      <NuxtLink
        :to="download"
        class="flex gap-2 px-10 py-3 rounded-xl items-center text-lg border-2 duration-300 hover:bg-white hover:text-black active:scale-95"
        ><LucideDownload />{{service}}</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  download: String,
  icon: String,
  service: String
})
</script>
