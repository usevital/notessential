<template>

    <span class="text-[4rem]">
        <span class="font-bold"> Hi! I'm </span>
        <span class="font-bold brand-gradient"> Blurryface. </span>
    </span>

    <div class="text-2xl">

        Hi! I'm Blurryface. I mainly do random projects if I'm not developing for <NuxtLink class="underline" to="https://pridecraft.gay">Pridecraft</NuxtLink>.

    </div>

    <!--<div class="text-2xl">

        This is some template text
        that WorldWidePixel made for <NuxtLink class="underline" to="https://pridecraft.gay">You</NuxtLink>.

    </div>-->

    <span class="text-5xl font-bold"> Socials </span>

    <div class="flex flex-row gap-4 flex-wrap">

        <NuxtLink to="https://www.youtube.com/@blrryface"> <user> Youtube <LucidePlayCircle /> </user> </NuxtLink>

        <NuxtLink to="https://www.github.com/blryface/"> <user> Github <LucideGithub /> </user> </NuxtLink>

        <NuxtLink to="https://www.twitch.tv/faceblrry"> <user> Twitch <LucideGamepad2 /> </user> </NuxtLink>

        <NuxtLink to="https://tech.lgbt/@blurryface"> <user> Mastodon <LucideText /> </user> </NuxtLink>

        <NuxtLink to="https://www.youtube.com/@crss666"> <user> CRSS Youtube <LucideLeaf /> </user> </NuxtLink>

    </div>

</template>

<script setup lang="ts">
useSeoMeta({
  title: 'home - blurryface',
  description: "Hi! I'm Blurry. I make some silly projects on the internet and I make Minecraft become gay.",
  ogImage: "~/assets/img/icon512.png",
})
</script>