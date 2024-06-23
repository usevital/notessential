<template>

    <projectContainer class="flex gap-8">

        <ProjectTitleBar>

            <span class="text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] internalFont flex flex-row flex-wrap gap-3">
                <span class="font-bold"> THERE ARE BETTER WAYS TO PLAY <span
                        class="brand-gradient">MINECRAFT</span>.</span>
            </span>

        </ProjectTitleBar>

        <ProjectParagraph>
            Don't be forced to use Essential. There are countless open-source alternatives to help you.
        </ProjectParagraph>

        <NuxtLink to="/alternatives"> <BigButton> <LucideArrowUpRight /> ALTERNATIVES </BigButton> </NuxtLink>


    </projectContainer>

    <ProjectContainer class="flex gap-8">

        <ProjectTitleBar>

            <span class="test-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] internalFont flex flex-row flex-wrap gap-3">
                <span class="font-bold"> Why not Essential? </span>
            </span>

        </ProjectTitleBar>

        <ProjectParagraph> Essential is a closed-source mod. While the loader itself is open-source and available on their GitHub, the actual mod that gets downloaded is still closed-source. This makes it hard to work with for other mod developers.</ProjectParagraph>
    </ProjectContainer>

</template>
<!-- ⬇️ is supposed to -->
<script setup lang="ts">
useSeoMeta({
    title: 'Home | Not Essential',
    description: "Essential has many issues. This website tells why, and provides alternatives.",
    ogImage: "/img/icon512.png",
})
</script>

<!--
:3
-->
