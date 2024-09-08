<template>
  <div class="flex flex-col gap-8">
    <PageHero
      :title="$t('contributing.hero')"
      :sub-title="$t('contributing.subhero')"
    />
    <span class="text-4xl">{{ $t("contributing.welcome") }}</span>
    <TitledSection
      v-if="showGuidelines"
      v-for="section in guidelines"
      :data="section.data"
      :title="section.title"
      :subtitle="section.subtitle"
      :numbered="true"
    />
    <span class="text-xl flex flex-row gap-2 items-center flex-wrap"
      >{{ $t("contributing.end") }} <LucideHeart stroke="var(--brand-red)" />
    </span>
  </div>
</template>
<script setup lang="ts">
const showGuidelines = ref(false)
if (process.client) {
  onMounted(() => {
    showGuidelines.value = true
  })
}

const locale = useI18n().locale.value
const messages = JSON.parse(
  JSON.stringify(useI18n().messages.value[locale].contributing),
)
const titles = messages.titles
const descs = messages.subtitles
const guidelineTexts = messages.guidelines

const guidelines = {
  Translating: {
    title: titles.translating,
    subtitle: descs.translating,
    data: [
      guidelineTexts.translating[0],
      guidelineTexts.translating[1],
      guidelineTexts.translating[2],
      guidelineTexts.translating[3],
    ],
  },
  Developing: {
    title: titles.coding,
    subtitle: descs.coding,
    data: [
      guidelineTexts.coding[0],
      guidelineTexts.coding[1],
      guidelineTexts.coding[2],
      guidelineTexts.coding[3],
    ],
  },
  Alternatives: {
    title: titles.alternatives,
    subtitle: descs.alternatives,
    data: [
      guidelineTexts.alternatives[0],
      guidelineTexts.alternatives[1],
      guidelineTexts.alternatives[2],
      guidelineTexts.alternatives[3],
      guidelineTexts.alternatives[4],
    ],
  },
}

useSeoMeta({
  title: "Contributing",
  description: "Information on how to contribute to NotEssential.",
  ogImage: "/img/icon512.png",
})
</script>
