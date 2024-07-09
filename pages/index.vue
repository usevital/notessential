<template>
  <div
    class="flex flex-col gap-2 bg-[color:var(--brand-colour)] p-4 rounded-2xl gap-8"
  >
    <ProjectTitleBar>
      <span
        class="text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] internalFont flex flex-row flex-wrap gap-3"
      >
        <span class="font-bold">
          THERE ARE BETTER WAYS TO PLAY
          <span class="brand-gradient">{{ minecraftText }}</span
          >.</span
        >
      </span>
    </ProjectTitleBar>

    <p class="text-2xl">
      Don't be forced to use Essential. There are countless open-source
      alternatives to help you.
    </p>

    <div class="button-container flex flex-col gap-4 sm:flex-row">
      <NuxtLink class="w-fit" to="/alternatives">
        <BigButton> <LucideArrowUpRight /> ALTERNATIVES </BigButton>
      </NuxtLink>

      <NuxtLink class="w-fit" to="/info">
        <BigButton> <LucideFileQuestion /> WHY NOT? </BigButton>
      </NuxtLink>
    </div>
    
  </projectContainer>
  
</template>

<script setup lang="ts">
import ProjectTitleBar from "../components/projectTitleBar.vue"
import BigButton from "../components/bigButton.vue"

const minecraftText = ref("MINECRAFT")

if (Math.floor(Math.random() * 10000) === 0) {
  minecraftText.value = "MINCERAFT"
}

useSeoMeta({
  title: "Home",
  description:
    "Essential has many issues. This website tells why, and provides alternatives.",
  ogImage: "/img/icon512.png",
})
</script>
