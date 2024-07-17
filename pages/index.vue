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

    <p class="text-2xl">
      {{ $t("landing.reason") }}
    </p>

    <NEButton class="w-fit sm:px-20 px-15 py-8" to="/alternatives">
      <LucideArrowUpRight /> {{ $t("landing.buttons.alternatives") }}
    </NEButton>

    <PageHero
      v-if="runtimeConfig.public.dev === true"
      title="WHY?"
      subTitle="Many people wonder why not to use Essential. We hope to make the reasons
      clear."
    />

    <NumberedList v-if="runtimeConfig.public.dev === true" :data="reasonsWhy" />

    <span v-if="runtimeConfig.public.dev === true">
      In case it wasn't clear, don't harrass any people affiliated with
      Essential. We simply find that the flaws with Essential make it
      undesirable in most modded Minecraft circumstances. We do not have any
      conflicts with anybody at Essential.
    </span>

    <span v-if="runtimeConfig.public.dev === true" class="flex flex-row gap-2"
      >with<LucideHeart class="stroke-[var(--brand-blue)]" /> from all at the
      NotEssential team
    </span>
  </div>
</template>

<script setup lang="ts">
const minecraftText = ref("MINECRAFT")

if (Math.floor(Math.random() * 10000) === 0) {
  minecraftText.value = "MINCERAFT"
}

const runtimeConfig = useRuntimeConfig()

const reasonsWhy = [
  {
    title: "Incompatibilty",
    body: [
      "Essential's large-sweeping modifications to the game cause many side effects, mainly incompatibility with other mods.",
      "While Essential's desision to go source-available (not the same as open-source) may help improve compatibility issues, it's too soon to tell.",
    ],
  },
  {
    title: "Cluttered Interface",
    body: [
      "Essential's interface has many options and buttons. These tend to lead to severe clutter in certain parts of the game.",
      "Staying on the default configuration, the amount of screen space taken up by Essential makes the game cumbersome to navigate.",
    ],
  },
  {
    title: "Security and Privacy",
    body: [],
  },
  {
    title: "Microtransactions",
    body: [],
  },
]

useSeoMeta({
  title: "Home",
  description:
    "Essential has many issues. This website tells why, and provides alternatives.",
  ogImage: "/img/icon512.png",
})
</script>
