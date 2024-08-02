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
  Modpacks: {
    Vital: {
      description: texts.modpacks.vital,
      icon: "https://cdn.modrinth.com/data/Fecmmdly/1a31487f238f354268d34d5f51ced1c1900d0106.png",
      links: {
        Modrinth: "https://modrinth.com/modpack/vital",
      },
    },
  },
  Multiplayer: {
    "World Host": {
      description: texts.multiplayer.world_host,
      icon: "https://cdn.modrinth.com/data/2AIZDfYo/90c8330e827a1162c6e5f4996be4795c8e274991.png",
      links: {
        Modrinth: "https://modrinth.com/mod/world-host",
      },
    },
    E4MC: {
      description: texts.multiplayer.e4mc,
      icon: "https://cdn.modrinth.com/data/qANg5Jrr/95dcc112830c1f3ddef30cc8451a1903dec17988.png",
      links: {
        Modrinth: "https://modrinth.com/mod/e4mc",
      },
    },
  },
  Cosmetics: {
    Cosmetica: {
      description: texts.cosmetics.cosmetica,
      icon: "https://cdn.modrinth.com/data/s9hF9QGp/e954c4883e72f95d8e799d167171cde74b059b51.gif",
      links: {
        Modrinth: "https://modrinth.com/mod/cosmetica",
      },
    },
    Ears: {
      description: texts.cosmetics.ears,
      icon: "https://cdn.modrinth.com/data/mfzaZK3Z/icon.png",
      links: {
        Modrinth: "https://modrinth.com/mod/ears",
      },
    },
    Capes: {
      description: texts.cosmetics.capes,
      icon: "https://cdn.modrinth.com/data/89Wsn8GD/icon.png",
      links: {
        Modrinth: "https://modrinth.com/mod/capes",
      },
    },
    "Customizable Player Models": {
      description: texts.cosmetics.customizable_player_models,
      icon: "https://cdn.modrinth.com/data/h1E7sQNL/icon.png",
      links: {
        Modrinth: "https://modrinth.com/plugin/custom-player-models",
      },
    },
    Figura: {
      description: texts.cosmetics.figura,
      icon: "https://cdn.modrinth.com/data/s9gIPDom/9e3994b58a6a50d9143c0aa87df1c3b54e4b7919.png",
      links: {
        Modrinth: "https://modrinth.com/mod/figura",
      },
    },
    "Skin Shuffle": {
      description: texts.cosmetics.skin_shuffle,
      icon: "https://cdn.modrinth.com/data/3s19I5jr/e66d99492c9b25e88a614846cca6b154ec5309f2.png",
      links: {
        Modrinth: "https://modrinth.com/mod/skinshuffle",
      },
    },
    Emotecraft: {
      description: texts.cosmetics.emotecraft,
      icon: "https://cdn.modrinth.com/data/pZ2wrerK/icon.png",
      links: {
        Modrinth: "https://modrinth.com/mod/emotecraft",
      },
    },
  },
  Misc: {
    Screencapper: {
      description: texts.misc.screencapper,
      icon: "https://cdn.modrinth.com/data/yzNFLSqx/d5d842e0b6b8c1babcd2212b923d712d85641af1.png",
      links: {
        Modrinth: "https://modrinth.com/mod/screencapper",
      },
    },
    "Screenshot Viewer": {
      description: texts.misc.screenshot_viewer,
      icon: "https://cdn.modrinth.com/data/laNoi025/1bbd371a465710708ce253fad6f9f8e7c8e3e56e.png",
      links: {
        Modrinth: "https://modrinth.com/mod/screenshot-viewer",
      },
    },
    "Auth Me": {
      description: texts.misc.auth_me,
      icon: "https://cdn.modrinth.com/data/yjgIrBjZ/icon.png",
      links: {
        Modrinth: "https://modrinth.com/mod/auth-me",
      },
    },
    "In-Game Account Switcher": {
      description: texts.misc.in_game_account_switcher,
      icon: "https://cdn.modrinth.com/data/cudtvDnd/4f2f65f4b3b9b6c7c3fcc265d651a1814ae80075.png",
      links: {
        Modrinth: "https://modrinth.com/mod/in-game-account-switcher",
      },
    },
    CraftPresence: {
      description: texts.misc.craftpresence,
      icon: "https://cdn.modrinth.com/data/DFqQfIBR/icon.png",
      links: {
        Modrinth: "https://modrinth.com/mod/craftpresence",
      },
    },
    Zume: {
      description: texts.misc.zume,
      icon: "https://cdn.modrinth.com/data/o6qsdrrQ/baecae4eaaac86de4ac699f57e5203edb3019f3f.png",
      links: {
        Modrinth: "https://modrinth.com/mod/zume",
      },
    },
  },
}
</script>
