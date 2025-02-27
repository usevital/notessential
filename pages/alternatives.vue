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
      loaders: "Fabric, Forge, NeoForge, Quilt",
      versions: "1.16.1 - 1.21.4",
      icon: "https://cdn.modrinth.com/data/2AIZDfYo/90c8330e827a1162c6e5f4996be4795c8e274991.png",
      links: {
        Modrinth: "https://modrinth.com/mod/world-host",
      },
    },
    e4mc: {
      description: texts.multiplayer.e4mc,
      loaders: "Fabric, Forge, NeoForge, Quilt",
      versions: "1.17 - 1.21.4",
      icon: "https://cdn.modrinth.com/data/qANg5Jrr/95dcc112830c1f3ddef30cc8451a1903dec17988.png",
      links: {
        Modrinth: "https://modrinth.com/mod/e4mc",
      },
    },
  },
  Cosmetics: {
    Cosmetica: {
      description: texts.cosmetics.cosmetica,
      loaders: "Fabric, Quilt",
      versions: "1.16.5 - 1.20.6",
      icon: "https://cdn.modrinth.com/data/s9hF9QGp/e954c4883e72f95d8e799d167171cde74b059b51.gif",
      links: {
        Modrinth: "https://modrinth.com/mod/cosmetica",
      },
    },
    Ears: {
      description: texts.cosmetics.ears,
      loaders: "Fabric, Forge, NeoForge, Quilt, Rift",
      versions: "1.2.5 - 1.21.4",
      icon: "https://cdn.modrinth.com/data/mfzaZK3Z/icon.png",
      links: {
        Modrinth: "https://modrinth.com/mod/ears",
      },
    },
    Capes: {
      description: texts.cosmetics.capes,
      loaders: "Fabric, Forge",
      versions: "1.2.5",
      icon: "https://cdn.modrinth.com/data/89Wsn8GD/icon.png",
      links: {
        Modrinth: "https://modrinth.com/mod/capes",
      },
    },
    "Customizable Player Models": {
      description: texts.cosmetics.customizable_player_models,
      loaders: "Fabric, Forge, NeoForge, Quilt",
      versions: "1.17 - 1.21.4",
      icon: "https://cdn.modrinth.com/data/h1E7sQNL/icon.png",
      links: {
        Modrinth: "https://modrinth.com/plugin/custom-player-models",
      },
    },
    Figura: {
      description: texts.cosmetics.figura,
      loaders: "Fabric, Forge, NeoForge, Quilt",
      versions: "1.16.5 - 1.21.4",
      icon: "https://cdn.modrinth.com/data/s9gIPDom/9e3994b58a6a50d9143c0aa87df1c3b54e4b7919.png",
      links: {
        Modrinth: "https://modrinth.com/mod/figura",
      },
    },
    "Skin Shuffle": {
      description: texts.cosmetics.skin_shuffle,
      loaders: "Fabric",
      versions: "1.20 - 1.21.4",
      icon: "https://cdn.modrinth.com/data/3s19I5jr/e66d99492c9b25e88a614846cca6b154ec5309f2.png",
      links: {
        Modrinth: "https://modrinth.com/mod/skinshuffle",
      },
    },
    Emotecraft: {
      description: texts.cosmetics.emotecraft,
      loaders: "Fabric, Forge, NeoForge, Quilt",
      versions: "1.16.5 - 1.21.4",
      icon: "https://cdn.modrinth.com/data/pZ2wrerK/icon.png",
      links: {
        Modrinth: "https://modrinth.com/mod/emotecraft",
      },
    },
  },
  Misc: {
    Screencapper: {
      description: texts.misc.screencapper,
      loaders: "Fabric",
      versions: "1.18 - 1.21",
      icon: "https://cdn.modrinth.com/data/yzNFLSqx/d5d842e0b6b8c1babcd2212b923d712d85641af1.png",
      links: {
        Modrinth: "https://modrinth.com/mod/screencapper",
      },
    },
    "Screenshot Viewer": {
      description: texts.misc.screenshot_viewer,
      loaders: "Fabric, Forge, NeoForge",
      versions: "1.12.2 - 1.21.4",
      icon: "https://cdn.modrinth.com/data/laNoi025/1bbd371a465710708ce253fad6f9f8e7c8e3e56e.png",
      links: {
        Modrinth: "https://modrinth.com/mod/screenshot-viewer",
      },
    },
    Snapper: {
      description: texts.misc.snapper,
      loaders: "Fabric",
      versions: "1.21 - 1.21.1",
      icon: "https://cdn.modrinth.com/data/MZQyESDC/9badee3a30ccea4818c3408a390e8137590b808a.png",
      links: {
        Modrinth: "https://modrinth.com/mod/snapper",
      },
    },
    "Auth Me": {
      description: texts.misc.auth_me,
      loaders: "Fabric, NeoForge, Quilt",
      versions: "1.16 - 1.21.4",
      icon: "https://cdn.modrinth.com/data/yjgIrBjZ/icon.png",
      links: {
        Modrinth: "https://modrinth.com/mod/auth-me",
      },
    },
    "In-Game Account Switcher": {
      description: texts.misc.in_game_account_switcher,
      loaders: "Fabric, Forge, NeoForge, Quilt",
      versions: "1.7.10 - 1.21.4",
      icon: "https://cdn.modrinth.com/data/cudtvDnd/4b71b38a8a1784ea17d29a254442b884e9dbe8b5_96.webp",
      links: {
        Modrinth: "https://modrinth.com/mod/in-game-account-switcher",
      },
    },
    CraftPresence: {
      description: texts.misc.craftpresence,
      loaders: "Fabric, Forge, NeoForge, Quilt",
      versions: "1.0 - 1.21.4",
      icon: "https://cdn.modrinth.com/data/DFqQfIBR/icon.png",
      links: {
        Modrinth: "https://modrinth.com/mod/craftpresence",
      },
    },
    Zume: {
      description: texts.misc.zume,
      loaders: "Fabric, Forge, NeoForge",
      versions: "1.6.4 - 1.21.4",
      icon: "https://cdn.modrinth.com/data/o6qsdrrQ/baecae4eaaac86de4ac699f57e5203edb3019f3f.png",
      links: {
        Modrinth: "https://modrinth.com/mod/zume",
      },
    },
  },
}
</script>
