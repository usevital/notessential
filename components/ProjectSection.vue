<template>
  <div class="flex flex-col flex-wrap gap-6 pb-8">
    <CategoryDivider>{{ title }}</CategoryDivider>
    <ProjectCard
      v-for="(projectData, title) in data"
      :title="title"
      :description="projectData.description"
      :loaders="projectData.loaders"
      :versions="projectData.versions"
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
