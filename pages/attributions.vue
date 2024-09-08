<template>
  <div class="flex flex-col gap-8">
    <PageHero
      :title="$t('attributions.hero')"
      :sub-title="$t('attributions.subtitle')"
    />
    <TitledSection
      v-if="showAttributions"
      v-for="section in sections"
      :data="section.data"
      :title="section.title"
      :subtitle="section.subtitle"
    />
    <span class="text-xl flex flex-row gap-2 items-center flex-wrap"
      >{{ $t("attributions.end") }} <LucideHeart stroke="var(--brand-red)" />
    </span>
    <span class="text-xl flex flex-row gap-2 items-center flex-wrap"
      >{{ $t("attributions.help") }}
    </span>
  </div>
</template>
<script setup lang="ts">
const showAttributions = ref(false)
if (process.client) {
  onMounted(() => {
    showAttributions.value = true
  })
}

const locale = useI18n().locale.value
const messages = JSON.parse(
  JSON.stringify(useI18n().messages.value[locale].attributions),
)
const titles = messages.titles
const descs = messages.subtitles

const sections = {
  Translators: {
    title: titles.translators,
    subtitle: descs.translators,
    data: [
      "cutiegin",
      "ThinkSeal",
      "WaffleIBOT",
      "Andre_601",
      "Nitrrine",
      "X-Cloudy-X",
      "Felix14-v2",
      "FlyMode",
      "notlin4",
      "TheClashFruit",
      "Lupancham",
      "X1l0b3n",
      "egorro",
      "TheUran",
      "KTrain5369",
      "Blryface",
      "Erb3",
    ],
  },
  Information: {
    title: titles.information_writers,
    subtitle: descs.information_writers,
    data: [
      "Microcontrollers' Alternatives - https://alternatives.microcontrollers.dev/",
      "Essential's Privacy Policy - https://essential.gg/privacy-policy",
    ],
  },
  "Core Team": {
    title: titles.core,
    subtitle: descs.core,
    data: [
      "Blryface (https://blurry.gay)",
      "WorldWidePixel (https://worldwidepixel.ca)",
      "KTrain (https://github.com/ktrain5369)",
      "Nitrrine (https://github.com/nitrrine)",
    ],
  },
}

useSeoMeta({
  title: "Attributions",
  description: "The people who made Notessential possible.",
  ogImage: "/img/icon512.png",
})
</script>
