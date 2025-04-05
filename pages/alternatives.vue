<template>
  <PageHero
    :title="$t('alternatives.hero')"
    :sub-title="$t('alternatives.reason')"
  />

  <!-- Need to add a project? It's now data driven (and localised!). Go to the English lang file (~/i18n/lang/en-US.json) -->

  <ProjectSection
    v-if="showAlternatives"
    v-for="(section, title) in alternatives"
    :data="section"
    :title="title"
  />

  <!-- Div is here so NuxtLink will act as inline element -->

  <div>
    <NuxtLink to="/contributing" class="text-lg brightness-75 hover:underline">
      {{ $t("alternatives.nudge_for_contributing") }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Alternatives",
  description: "Essential has many issues. This page provides alternatives.",
  ogImage: "/img/icon512.png",
})

const showAlternatives = ref(false)
if (process.client) {
  onMounted(() => {
    showAlternatives.value = true
  })
}

const locale = useI18n().locale.value
const altMessages = JSON.parse(
  JSON.stringify(useI18n().messages.value[locale].alternatives),
)
const texts = altMessages.texts
//console.log(texts)

const alternatives = {
  Multiplayer: {
    "World Host": {
      description: texts.multiplayer.world_host,
      projectId: "2AIZDfYo",
    },
    e4mc: {
      description: texts.multiplayer.e4mc,
      projectId: "qANg5Jrr",
    },
  },
  Cosmetics: {
    Cosmetica: {
      description: texts.cosmetics.cosmetica,
      projectId: "s9hF9QGp",
    },
    Ears: {
      description: texts.cosmetics.ears,
      projectId: "mfzaZK3Z",
    },
    Capes: {
      description: texts.cosmetics.capes,
      projectId: "89Wsn8GD",
    },
    "Customizable Player Models": {
      description: texts.cosmetics.customizable_player_models,
      projectId: "h1E7sQNL",
    },
    Figura: {
      description: texts.cosmetics.figura,
      projectId: "s9gIPDom",
    },
    "Skin Shuffle": {
      description: texts.cosmetics.skin_shuffle,
      projectId: "3s19I5jr",
    },
    Emotecraft: {
      description: texts.cosmetics.emotecraft,
      projectId: "pZ2wrerK",
    },
  },
  Misc: {
    Screencapper: {
      description: texts.misc.screencapper,
      projectId: "yzNFLSqx",
    },
    "Screenshot Viewer": {
      description: texts.misc.screenshot_viewer,
      projectId: "laNoi025",
    },
    Snapper: {
      description: texts.misc.snapper,
      projectId: "MZQyESDC",
    },
    "Auth Me": {
      description: texts.misc.auth_me,
      projectId: "yjgIrBjZ",
    },
    "In-Game Account Switcher": {
      description: texts.misc.in_game_account_switcher,
      projectId: "cudtvDnd",
    },
    CraftPresence: {
      description: texts.misc.craftpresence,
      projectId: "DFqQfIBR",
    },
    Zume: {
      description: texts.misc.zume,
      projectId: "o6qsdrrQ",
    },
  },
}
</script>
