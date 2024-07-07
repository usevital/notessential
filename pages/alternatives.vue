<template>
  <span class="text-[4rem] flex flex-col flex-wrap">
    <span
      class="text-[1.5rem] text-pretty sm:text-[2rem] md:text-[3rem] lg:text-[4rem] internalFont"
    >
      ALTERNATIVES
    </span>
    <span class="text-lg"
      >Essential has many issues. This page provides alternatives.</span
    >
  </span>

  <!-- Need to add a project? It's now data driven. Scroll down to the JSON to add them! -->

  <ProjectSection
    v-if="showAlternatives"
    v-for="(section, title) in alternatives"
    :data="section"
    :title="title"
  />
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

/*

TEMPLATE:

    Name: {
      description: ["Para1", "Para2", "Para3", "Para4"],
      icon: "iconUrl",
      links: {
        Modrinth: "ModrinthURL",
      },
    },

*/

const alternatives = {
  Modpack: {
    "Vital": {
      description: [
        "If you want to have everything neatly organized into one modpack, you can use Vital.",
        "It has most of the mods on this list, including Cosmetica, World Host, and more.",
        "It also has an organized main menu like Essential with FancyMenu.",
      ],
      icon: "https://cdn.modrinth.com/data/Fecmmdly/48f79c02d315b13bddad245b7a3acd439586fd2d.png",
      links: {
        Modrinth: "https://modrinth.com/modpack/vital",
      },
    },
  },
  Multiplayer: {
    "World Host": {
      description: [
        "For multiplayer with a friends system, you can use World Host. It's a free and open source way to broadcast your world to those on your friends list, and everyone you want to share it with.",
        "It has a friends list system you can use to let your friends join your game right as you open it to them.",
        'You simply hit "Open to Friends" and your friends will be able to join. You can also share the link that appears in chat with the people you want to play with!',
        "This mod is recommended for mostly vanilla or lightly/client-side modded instances only. For better experiences with modpacks, use e4mc, which is featured below.",
      ],
      icon: "https://cdn.modrinth.com/data/2AIZDfYo/90c8330e827a1162c6e5f4996be4795c8e274991.png",
      links: {
        Modrinth: "https://modrinth.com/mod/world-host",
      },
    },
    E4MC: {
      description: [
        "For Multiplayer, you can use E4MC. It's a free and open source way to broadcast your LAN server to everyone you want to share it with.",
        'You simply hit "Open to LAN" and share the link that appears in chat with the people you want to play with!',
        "e4mc is recommended over World Host for modpacks, as this is a very simple mod which means it shouldn't interfere with potential mods. Just make sure your modlists are identical to avoid de-syncing!",
      ],
      icon: "https://cdn.modrinth.com/data/qANg5Jrr/95dcc112830c1f3ddef30cc8451a1903dec17988.png",
      links: {
        Modrinth: "https://modrinth.com/mod/e4mc",
      },
    },
  },
  Cosmetics: {
    Cosmetica: {
      description: [
        "For Cosmetics, you may want to use Cosmetica. It's a free and open source cosmetics service, with custom capes and cosmetics support.",
        "It can even support cosmetics for OptiFine, Lunar Client and more!",
        '"Cosmetica lets you customize your player on a whole new level with cosmetics that rival those of popular PvP clients" (taken from the Modrinth page)',
      ],
      icon: "https://cdn.modrinth.com/data/s9hF9QGp/e954c4883e72f95d8e799d167171cde74b059b51.gif",
      links: {
        Modrinth: "https://modrinth.com/mod/cosmetica",
      },
    },
    Ears: {
      description: [
        "Ears is another mod you can use for skin customization. It uses your actual Minecraft Skin to set up how people will see your skin, if they have Ears installed.",
        "It's available for many versions (Beta 1.7.3 - Release 1.20.6), and adds Ears, Snouts/Muzzles, Tails, Wings and More.",
      ],
      icon: "https://cdn.modrinth.com/data/mfzaZK3Z/icon.png",
      links: {
        Modrinth: "https://modrinth.com/mod/ears",
      },
    },
    Capes: {
      description: [
        "This mod gives you the ability to use and see capes from OptiFine, LabyMod and the MinecraftCapes mod.",
        "You just install the mod and that's it! If you want to disable capes from certain mods you can do it on the configuration screen.",
      ],
      icon: "https://cdn.modrinth.com/data/89Wsn8GD/icon.png",
      links: {
        Modrinth: "https://modrinth.com/mod/capes",
      },
    },
    "Customizable Player Models": {
      description: [
        "Customizable Player Models is a mod that lets you deeply modify your player model.",
        "It has an interface where you can add, remove, modify, model and texture your own player model, similar to how Blender works.",
        "The models are stored in unused space on your Minecraft Skin, or as a Gist on GitHub.",
        "Upload the exported image file as your skin to load the custom model.",
      ],
      icon: "https://cdn.modrinth.com/data/h1E7sQNL/icon.png",
      links: {
        Modrinth: "https://modrinth.com/plugin/custom-player-models",
      },
    },
    Figura: {
      description: [
        "If you're looking to step it up a notch, Figura allows you to modify your player model much more!",
        "Figura focuses less on maintaining compatibility, which means it's able to add much more to your model, such as pets, ears, and more! You can also use Lua scripts to customise even further!",
        "Bonus: It also has sort of a built-in anti-cheat for things such as invisible player models!",
      ],
      icon: "https://cdn.modrinth.com/data/s9gIPDom/9e3994b58a6a50d9143c0aa87df1c3b54e4b7919.png",
      links: {
        Modrinth: "https://modrinth.com/mod/figura",
      },
    },
    "Skin Shuffle": {
      description: [
        "Essential's skin swapper in-game can be convenient if you want to change your game without having to relaunch Minecraft. This mod can achieve this for you!",
        'Skin Shuffle is a mod that can change, store, and customise your skin, all in-game without requiring to relaunch. They are stored in what they call "Skin Presets" which can be created off of URLs, files, Usernames/UUIDs, in-game textures and even your current skin!',
        "If the server has Skin Shuffle installed, you can also switch your skin and it will be shown to everyone on the server, even those without the mod, all while not requiring you to disconnect from the server!",
      ],
      icon: "https://cdn.modrinth.com/data/3s19I5jr/e66d99492c9b25e88a614846cca6b154ec5309f2.png",
      links: {
        Modrinth: "https://modrinth.com/mod/skinshuffle",
      },
    },
    Emotecraft: {
      description: [
        "For Emotes, you may want to use Emotecraft. It's a free and open source emotes service, with support for custom emotes.",
        "You can download many emotes, or even make your own! The discord server has a lot of emotes you can download. It's a little bit outdated, though.",
      ],
      icon: "https://cdn.modrinth.com/data/pZ2wrerK/icon.png",
      links: {
        Modrinth: "https://modrinth.com/mod/emotecraft",
      },
    },
  },
  Miscellaneous: {
    Screencapper: {
      description: [
        "Essential has a screenshot preview feature, this mod entirely implements a basic equivalent.",
        "A highly advanced screenshot improvement mod.",
      ],
      icon: "https://cdn.modrinth.com/data/yzNFLSqx/d5d842e0b6b8c1babcd2212b923d712d85641af1.png",
      links: {
        Modrinth: "https://modrinth.com/mod/screencapper",
      },
    },
    "Screenshot Viewer": {
      description: [
        "Essential has a screenshot viewer feature, and you can get something similar using this mod.",
        "Screenshot Viewer is a mod that allows you to see the screenshots that you have taken while you were gaming! (including the accidental ones you took when you where trying to press F3).",
      ],
      icon: "https://cdn.modrinth.com/data/laNoi025/1bbd371a465710708ce253fad6f9f8e7c8e3e56e.png",
      links: {
        Modrinth: "https://modrinth.com/mod/screenshot-viewer",
      },
    },
    "Auth Me": {
      description: [
        "Essential has an in-game account switcher feature. You can use this mod to achieve one important aspect of it.",
        'Auth Me is able to re-authenticate yourself in case your session expires, solving the infamous "Invalid Session" error.',
      ],
      icon: "https://cdn.modrinth.com/data/yjgIrBjZ/icon.png",
      links: {
        Modrinth: "https://modrinth.com/mod/auth-me",
      },
    },
    "In-Game Account Switcher": {
      description: [
        "If you need the other aspect of Essential's account switcher, you can use the aptly-named In-Game Account Switcher mod.",
        "In-Game Account Switcher has the ability to, well, switch accounts that are logged in, without needing to restart the game!",
        "They also have various optional security measures to increase security when using your accounts with IAS.",
      ],
      icon: "https://cdn.modrinth.com/data/cudtvDnd/4f2f65f4b3b9b6c7c3fcc265d651a1814ae80075.png",
      links: {
        Modrinth: "https://modrinth.com/mod/in-game-account-switcher",
      },
    },
    CraftPresence: {
      description: [
        "Essential has a Discord RPC feature that displays the version and server you are playing on. This mod can do that AND let you customize it further.",
        "This popular RPC mod allows you to broadcast your Minecraft gaming session to Discord and change the lines that show on your Discord bio when you do so.",
      ],
      icon: "https://cdn.modrinth.com/data/DFqQfIBR/icon.png",
      links: {
        Modrinth: "https://modrinth.com/mod/craftpresence",
      },
    },
    Zume: {
      description: [
        "Essential has a zoom feature with it. This mod can replace that function, and it supports a LOT of Minecraft versions!",
        "Not only does it zoom in and out, it also has keybinds for customising the zoom level!",
      ],
      icon: "https://cdn.modrinth.com/data/o6qsdrrQ/baecae4eaaac86de4ac699f57e5203edb3019f3f.png",
      links: {
        Modrinth: "https://modrinth.com/mod/zume",
      },
    },
  },
}
</script>
