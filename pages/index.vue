<template>
  <projectContainer class="flex gap-8">
    <ProjectTitleBar>
      <span
        class="text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] internalFont flex flex-row flex-wrap gap-3"
      >
        <span class="font-bold">
          THERE ARE BETTER WAYS TO PLAY
          <span class="brand-gradient">MINECRAFT</span>.</span
        >
      </span>
    </ProjectTitleBar>

    <ProjectParagraph>
      Don't be forced to use Essential. There are countless open-source
      alternatives to help you.
    </ProjectParagraph>

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
<!-- ⬇️ is supposed to -->
<script setup lang="ts">
import ProjectTitleBar from '../components/projectTitleBar.vue';

useSeoMeta({
  title: "Home | Not Essential",
  description:
    "Essential has many issues. This website tells why, and provides alternatives.",
  ogImage: "/img/icon512.png",
})
</script>

<!--
:3
-->
