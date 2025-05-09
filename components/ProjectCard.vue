<template>
  <div class="flex flex-col gap-4 max-w-full">
    <!-- Title -->
    <span
      class="gap-4 flex flex-row items-center text-[color:var(--big-text-colour)] text-4xl sm:text-5xl font-bold"
    >
      <!-- Icon -->
      <img
        class="h-12 bg-[var(--text-colour)] rounded-xl p-[2px]"
        :src="data?.icon_url"
      />
      {{ props.title }}
    </span>
    <!-- Description -->
    <div
      v-for="description in description"
      class="flex flex-col gap-3 text-xl sm:text-2xl"
    >
      {{ description }}
    </div>
    <!-- Tags -->
    <div class="flex flex-row gap-3">
      <!-- Supported loaders -->
      <div class="flex flex-row gap-1">
        <LucideLoader />
        <span class="max-w-72">{{ data?.loaders.join(", ") }}</span>
      </div>
      <!-- Supported versions -->
      <div class="flex flex-row gap-1">
        <LucideMilestone />
        <span
          >{{ data?.game_versions[0] }} -
          {{ data?.game_versions[data?.game_versions.length - 1] }}</span
        >
      </div>
    </div>
    <!-- Buttons -->
    <div class="flex flex-row flex-wrap gap-3 mb-5">
      <!-- <NEButton v-for="(link, index) in urls" :to="link" secondary external>
        <LucideDownload />{{ index }}
      </NEButton> -->
      <NEButton
        :to="`https://modrinth.com/project/${props.projectId}`"
        secondary
        external
      >
        <LucideDownload />Modrinth
      </NEButton>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: Object,
  projectId: String,
})

const loaderNames = {
  fabric: "Fabric",
  quilt: "Quilt",
  neoforge: "NeoForge",
  forge: "Forge",
  rift: "Rift",
  bukkit: "Bukkit",
  sponge: "Sponge",
  paper: "Paper",
  velocity: "Velocity",
  folia: "Folia",
  spigot: "Spigot",
  liteloader: "LiteLoader",
  purpur: "Purpur",
  waterfall: "Waterfall",
  bungeecord: "BungeeCord",
}

let { data } = await useFetch(
  `https://api.modrinth.com/v2/project/${props.projectId}`,
)

watchEffect(() => {
  if (data.value?.loaders) {
    data.value.loaders = data.value.loaders.map((loader) => {
      return loaderNames[loader] || loader
    })
  }
})

function capitalizeArrayFirstLetter(array) {
  let newArray = array

  for (var i = 1; i < newArray.length; i++) {
    newArray[i] = newArray[i].charAt(0).toUpperCase()
  }

  return newArray.join(", ")
}
</script>
