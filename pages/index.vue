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
      v-if="showReasons === true"
      title="WHY?"
      subTitle="Many people wonder why not to use Essential. We hope to make the reasons
      clear."
    />

    <NumberedList v-if="showReasons === true" :data="reasonsWhy" />

    <span>
      In case it wasn't clear, don't harass any people affiliated with
      Essential. We simply find that the flaws with Essential make it
      undesirable in most modded Minecraft circumstances. We do not have any
      conflicts with anybody at Essential.
    </span>
    <span>
      Please report any problems on our
      <NELink to="https://github.com/uesvital/notessential" :external="true"
        >GitHub</NELink
      >
      or
      <NELink to="https://discord.gg/wncdz7e8jy" :external="true"
        >Discord.</NELink
      ></span
    >

    <span class="flex flex-row gap-2"
      >with<LucideHeart class="stroke-[var(--brand-blue)]" /> from all at the
      Vital team
    </span>
  </div>
</template>

<script setup lang="ts">
const minecraftText = ref("MINECRAFT")

if (Math.floor(Math.random() * 10000) === 0) {
  minecraftText.value = "MINCERAFT"
}
const showReasons = ref(false)
if (process.client) {
  onMounted(() => {
    showReasons.value = true
  })
}

const locale = useI18n().locale.value
const altMessages = JSON.parse(
  JSON.stringify(useI18n().messages.value[locale].reasonsWhy),
)

const texts = altMessages.texts

const reasonsWhy = [
  {
    title: texts.reasons.incompatibility.name,
    body: texts.reasons.incompatibility.explainer,
  },
  {
    title: texts.reasons.bloat.name,
    body: texts.reasons.bloat.explainer,
  },
  {
    title: texts.reasons.microtransactions.name,
    body: texts.reasons.microtransactions.explainer,
  },
  {
    title: texts.reasons.security_privacy.name,
    body: texts.reasons.security_privacy.explainer,
  },
  {
    title: texts.reasons.clutter.name,
    body: texts.reasons.clutter.explainer,
  },
  {
    title: texts.reasons.force_install.name,
    body: texts.reasons.force_install.explainer,
  },
]

useSeoMeta({
  title: "Home",
  description:
    "Essential has many issues. This website tells why, and provides alternatives.",
  ogImage: "/img/icon512.png",
})
</script>
