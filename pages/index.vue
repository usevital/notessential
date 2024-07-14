<template>
  <div class="flex flex-col gap-8">
    <span
      class="text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] internalFont flex flex-row flex-wrap gap-3"
    >
      <span class="font-bold">
        {{ $t("landing.hero") }}
        <span class="brand-gradient">{{ minecraftText }}</span
        >.</span
      >
    </span>
    <!-- THE WORD 'MINECRAFT' AND THE 'NOTESSENTIAL' NAME SHOULD NOT BE LOCALISED. -->

    <Link to="/" show-icon>test.com</Link>

    <p class="text-2xl">
      {{ $t("landing.reason") }}
    </p>

    <NEButton class="w-fit sm:px-20 px-15 py-8" to="/alternatives">
      <LucideArrowUpRight /> {{ $t("landing.buttons.alternatives") }}
    </NEButton>
  </div>
</template>

<script setup lang="ts">
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
