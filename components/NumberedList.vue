<template>
  <div class="flex flex-col gap-4" v-for="(item, index) in data">
    <div
      class="flex flex-row gap-2 items-center font-bold text-3xl sm:text-4xl"
    >
      <span> {{ index + 1 }}. </span>
      <span :id="item.title.toLowerCase().replaceAll(' ', '-')">
        {{ item.title }}
      </span>
    </div>
    <span
      v-html="useFormatting(paragraph)"
      class="text-xl"
      v-for="paragraph in item.body"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  data: Array,
})
</script>

<style>
li {
  margin-left: 1em;
}
</style>
