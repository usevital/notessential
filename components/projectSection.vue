<template>
  <div class="flex flex-col flex-wrap gap-8">
    <span class="text-white italic text-[4rem]">
      <span class="font-[250] tracking wider">{{ title }}</span>
    </span>
    <ProjectCard
      v-for="(projectData, title) in data"
      :title="title"
      :description="projectData.description"
      :urls="projectData.links"
      :icon="projectData.icon"
      service="Modrinth"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
  title: String,
})
</script>
