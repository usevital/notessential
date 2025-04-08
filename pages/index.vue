<template>
  <div class="flex flex-col gap-8">
    <section class="flex flex-col gap-8 h-[90dvh]">
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

      <div class="flex flex-col sm:flex-row gap-3">
        <NEButton class="w-fit sm:px-20 px-15 py-8" to="/alternatives">
          <LucideArrowUpRight /> {{ $t("landing.buttons.alternatives") }}
        </NEButton>
        <NEButton class="w-fit sm:px-20 px-15 py-8" to="#why-not?" secondary>
          <LucideCircleHelp /> {{ $t("reasonsWhy.hero") }}
        </NEButton>
      </div>
    </section>

    <PageHero
      v-if="showReasons"
      :title="$t('reasonsWhy.hero')"
      :subTitle="$t('reasonsWhy.sub')"
    />

    <NumberedList v-if="showReasons" :data="reasonsWhy" />

    <span>
      {{ $t("reasonsWhy.do_not_harass") }}
    </span>
    <span>
      {{ $t("reasonsWhy.report_problems") }}
      <NELink to="https://github.com/usevital/notessential" :external="true"
        >GitHub</NELink
      >
      {{ $t("reasonsWhy.or") }}
      <NELink to="https://discord.gg/wncdz7e8jy" :external="true"
        >Discord.</NELink
      ></span
    >

    <span class="flex flex-row gap-2"
      >{{ $t("reasonsWhy.signoff1")
      }}<LucideHeart class="stroke-[var(--brand-blue)]" />
      {{ $t("reasonsWhy.signoff2") }}
    </span>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Home",
  description:
    "Essential has many issues. This website tells why, and provides alternatives.",
  ogImage: "/img/icon512.png",
})

const minecraftText = ref("MINECRAFT")

if (Math.floor(Math.random() * 10000) === 0) {
  minecraftText.value = "MINCERAFT"
}
const showReasons = ref(true)

const locale = useI18n().locale.value
const altMessages = JSON.parse(
  JSON.stringify(useI18n().messages.value[locale]?.reasonsWhy ?? {}),
)

const reasonsWhy = [
  {
    title: altMessages.reasons.incompatibility.name,
    body: altMessages.reasons.incompatibility.explainer,
  },
  {
    title: altMessages.reasons.bloat.name,
    body: altMessages.reasons.bloat.explainer,
  },
  {
    title: altMessages.reasons.microtransactions.name,
    body: altMessages.reasons.microtransactions.explainer,
  },
  {
    title: altMessages.reasons.security_privacy.name,
    body: altMessages.reasons.security_privacy.explainer,
  },
  {
    title: altMessages.reasons.clutter.name,
    body: altMessages.reasons.clutter.explainer,
  },
  {
    title: altMessages.reasons.force_install.name,
    body: altMessages.reasons.force_install.explainer,
  },
]
</script>
