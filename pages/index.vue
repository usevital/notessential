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
      v-if="whyNot === true && showReasons === true"
      title="WHY?"
      subTitle="Many people wonder why not to use Essential. We hope to make the reasons
      clear."
    />

    <NumberedList
      v-if="whyNot === true && showReasons === true"
      :data="reasonsWhy"
    />

    <span v-if="whyNot === true">
      In case it wasn't clear, don't harrass any people affiliated with
      Essential. We simply find that the flaws with Essential make it
      undesirable in most modded Minecraft circumstances. We do not have any
      conflicts with anybody at Essential.
    </span>

    <span v-if="whyNot === true" class="flex flex-row gap-2"
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

const whyNot = useCookie("whyNotEssential", { default: () => false })

const showReasons = ref(false)
if (process.client) {
  onMounted(() => {
    showReasons.value = true
  })
}

const reasonsWhy = [
  {
    title: "Incompatibilty",
    body: [
      "Essential's large-sweeping modifications to the game cause many side effects, mainly incompatibility with other mods.",
      "While Essential's desision to go source-available (not the same as open-source) may help improve compatibility issues, it's too soon to tell.",
      "For uninitiated users, open-source differs from source-available in that any user can send a request to fix an issue or add a new feature, which source-available doesn't let you do.",
      "We have a gallery of people saying that removing Essential has fixed an issue they experienced, you can find this at https://notessentialsite.github.io/gallery/",
    ],
  },
  {
    title: "Data corruption",
    body: [
      "Following on from the previous point, their large modifications to the game can cause data loss or world corruption.",
      "While, again, their decision to become source-available can help explain what's going on, it'd be better if these modifications weren't included in the first place.",
    ],
  },
  {
    title: "Microtransactions",
    body: [
      'In a game that is primarily played by children, Essential advertises its cosmetics shop, featuring microtransactions where you can buy "Essential Coins".',
      "While Essential does need money to support their devs and some of their features, a store with special currency microtransactions seems very predatory considering the context.",
      'Additionally, they have a system where you can purchase coins only in "bundles" which encourages over-purchase of coins, potentially wasting the remaining coins.',
      "This isn't exclusive to Essential, as it's a problem for Minecraft Bedrock Edition (which is a major annoyance point for most players), as well as other (mainly mobile/gacha) games. This, however, makes it seem like they know what they are doing.",
    ],
  },
  {
    title: "Security and Privacy",
    body: [
      "Essential requires that you accept the ToS in order to use the mod. This can come across as a red flag to some, as generally this is only present as a confirmation that you don't mind your data being harvested.",
      "While Essential's Privacy Policy states the data they collect (and it's not very significant to most people), most people will not be reading the policy, especially with the required legalese to cover their bases.",
      "Additionally, this is a game played by kids, the cohort that are most likely clueless on what a Terms of Service or Privacy Policy is, and don't understand the data they are giving out by agreeing and especially don't understand the language being used, even if kids are legally not allowed to agree to contracts in some areas.",
      "For full clarity, Essential says, on their Privacy Policy (checked 27/8/2024), they collect:",
      "* Minecraft UUID, Minecraft & modloader versions",
      "* Mod Checksums using MD5",
      "* User interfaces the player enters during their session",
      "* Cosmetics that players choose to preview",
      "* Essential config values (with random A/B testing)",
      "* Servers you join (if you choose to enable it in privacy settings)",
      "* Your computer specs",
      "Their privacy policy can be found at https://essential.gg/privacy-policy, which may be updated at any point after the writing of this.",
    ],
  },
  {
    title: "Too much bloat",
    body: [
      'For a mod that advertises itself as the "essential tool for Minecraft", it has too many features included within.',
      "The concept of an all-in-one mod isn't bad, but as a mod that should easily fit with other mods, having too many features causes too many potential conflicts.",
      "Being an all-in-one mod has downsides too, most notably that if a feature is crashing, the only easy solution for most users is removing the entire mod.",
      "The problems mentioned previously regarding compatibility with other mods certainly doesn't help Essential's case either.",
    ],
  },
  {
    title: "Cluttered Interface",
    body: [
      "This one comes more down to opinion but it's one we believe many players can share. You may disagree with this heavily, and that's okay.",
      "Essential's interface has many options and buttons. These tend to lead to severe clutter in certain parts of the game.",
      "Staying on the default configuration, the amount of screen space taken up by Essential makes the game cumbersome to navigate.",
      "Additionally, some of the buttons on the main menu aren't necessary or can be placed better. It's not a lot, but on the default screen size the space it takes up can be significant.",
    ],
  },
]

useSeoMeta({
  title: "Home",
  description:
    "Essential has many issues. This website tells why, and provides alternatives.",
  ogImage: "/img/icon512.png",
})
</script>
