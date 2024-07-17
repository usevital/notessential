<template>
  <div class="flex flex-col gap-4" v-for="(item, index) in data">
    <div class="flex flex-row gap-2 items-center">
      <span class="internalFont text-4xl sm:text-5xl tracking-[-1rem]">
        {{ index + 1 }}.
      </span>
      <span class="text-4xl sm:text-5xl font-bold"> {{ item.title }} </span>
    </div>
    <span class="text-xl" v-for="paragraph in item.body">
      {{ paragraph }}
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Array,
})
</script>
