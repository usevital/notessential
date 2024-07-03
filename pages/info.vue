<template>

    <projectContainer class="flex gap-8">

        <ProjectTitleBar>

            <span class="text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] internalFont flex flex-row flex-wrap gap-3">
                <span class="font-bold"> WHY SHOULD YOU NOT USE <span
                        class="brand-gradient">ESSENTIAL?</span></span>
            </span>

        </ProjectTitleBar>

        <ProjectParagraph>
            Why are we recommending not to use Essential? Here, we will list our reasons why you should use alternatives to it.
        </ProjectParagraph>

        <NuxtLink to="/alternatives"> <BigButton> <LucideArrowUpRight /> ALTERNATIVES </BigButton> </NuxtLink>

        <ProjectParagraph>
            Disclaimer: We are not encouraging you to hate on Essential, nor do we have personal beef with the Essential staff. We simply find that these issues are what makes Essential undesirable in most circumstances when playing modded Minecraft.
        </ProjectParagraph>

    </projectContainer>

    <projectContainer>

        <projectTitleBar>

        <projectTitle> 1. It's closed-source. </projectTitle>

        </projectTitleBar>

        <projectParagraph>

            A piece of software being closed-source means that the source code is not publicly available anywhere. Usually, the software code is obfuscated as well, meaning that even if we have the piece of software, we still cannot view its code without dedicating more time to decompiling it.

        </projectParagraph>

        <projectParagraph>

            Closed-source software exists everywhere, so you might be wondering - "well, why is that a bad thing if there is a lot of closed-source software that we use?" And while that may be true, Minecraft modding is very different.

        </projectParagraph>

        <projectParagraph>

            Minecraft modding can be very limitless, but this is because of one thing: Minecraft mods have access to (almost) your entire computer. This makes it very risky to run mods, which means that we have to trust the code that we are executing.

        </projectParagraph>

        <projectParagraph>
            
            But, the very nature of closed-source and obfuscation hinders that in a very big way. If we cannot see the code that is being ran, how can we trust it won't be looking through our files? This is why mods being open-source, as well as being unobfuscated, is a big deal.

        </projectParagraph>

        <projectParagraph>

            Note: This isn't meant to imply that Essential is accessing our files. In fact, making it closed-source makes it less accessible for anyone (besides Essential devs) to verify if that statement is true or not. Also, Essential itself is not obfuscated, only closed-source.

        </projectParagraph>
        
    </projectContainer>

</template>
<!-- ⬇️ is supposed to -->
<script setup lang="ts">
import ProjectParagraph from '../components/projectParagraph.vue';

useSeoMeta({
    title: 'Why? | Not Essential',
    description: "Essential has many issues. This website tells why, and provides alternatives.",
    ogImage: "/img/icon512.png",
})
</script>

<!--
:3
-->