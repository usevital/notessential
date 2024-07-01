<template>

    <projectContainer class="flex gap-8">

        <ProjectTitleBar>

            <span class="text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] internalFont flex flex-row flex-wrap gap-3">
                <span class="font-bold"> WHY SHOULD YOU NOT USE <span
                        class="brand-gradient">ESSENTIAL?</span></span>
            </span>

        </ProjectTitleBar>

        <ProjectParagraph>
            Why are we recommending not to use Essential? This page will list our reasons why you should use alternatives.
        </ProjectParagraph>

        <NuxtLink to="/alternatives"> <BigButton> <LucideArrowUpRight /> ALTERNATIVES </BigButton> </NuxtLink>

    </projectContainer>

</template>
<!-- ⬇️ is supposed to -->
<script setup lang="ts">
useSeoMeta({
    title: 'Why? | Not Essential',
    description: "Essential has many issues. This website tells why, and provides alternatives.",
    ogImage: "/img/icon512.png",
})
</script>

<!--
:3
-->
