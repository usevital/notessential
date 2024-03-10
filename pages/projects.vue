<template>

    <span class="text-[4rem]">
        <span class="font-bold"> My current </span>
        <span class="font-bold brand-gradient"> projects. </span>
        <span class="text-sm">(and orgs)</span>
    </span>

    <projectContainer>

        <ProjectTitleBar>

            <ProjectTitle> CRSS </ProjectTitle>

            <img class="h-12 bg-white rounded-xl p-1" src="https://crss.blurryface.xyz/favicon.ico">

        </ProjectTitleBar>

        <ProjectParagraph>

            This is a server made by Blurryface, hosted by TheClashFruit, played by Devin, and sponsored by TheClashFruit's Real Hosting Company Limited Liability Company (TCFRHCLLC) and Pridecraft Studios!

        </ProjectParagraph>

    </projectContainer>

    <div class="flex flex-row gap-4 flex-wrap">

        <NuxtLink to="https://crss.blurryface.xyz"> <user> Website <LucideAppWindow /> </user> </NuxtLink>

    </div>

    <projectContainer>

        <ProjectTitleBar>

            <ProjectTitle> Loop <ProjectBadge>ORG</ProjectBadge> </ProjectTitle>

            <img class="h-12 bg-white rounded-xl p-1" src="~/assets/img/icons/loop.png">

        </ProjectTitleBar>

        <ProjectParagraph>

            An organization dedicated to making Minecraft modding more accessible.

        </ProjectParagraph>

    </projectContainer>

    <div class="flex flex-row gap-4 flex-wrap">

        <NuxtLink to="https://crss.blurryface.xyz"> <user> Website <LucideAppWindow /> </user> </NuxtLink>

        <NuxtLink to="https://modrinth.com/organization/loop"> <user> Modrinth <LucideBox /> </user> </NuxtLink>

    </div>

    <projectContainer>

        <ProjectTitleBar>

            <ProjectTitle> Pridecraft <ProjectBadge>ORG</ProjectBadge> </ProjectTitle>

            <img class="h-12 bg-white rounded-xl p-1" src="https://pridecraft.gay/favicon.png">

        </ProjectTitleBar>

        <ProjectParagraph>

            A collective of developers making LGBT-themed modifications to Minecraft.

        </ProjectParagraph>

    </projectContainer>

    <div class="flex flex-row gap-4 flex-wrap">

        <NuxtLink to="https://pridecraft.gay"> <user> Website <LucideAppWindow /> </user> </NuxtLink>

        <NuxtLink to="https://modrinth.com/organization/pridecraft"> <user> Modrinth <LucideBox /> </user> </NuxtLink>

    </div>

    <projectContainer>

        <ProjectTitleBar>

            <ProjectTitle> CustardMC <ProjectBadge>ORG</ProjectBadge> </ProjectTitle>

            <img class="h-12 bg-white rounded-xl p-1" src="https://github.com/custardmc.png">

        </ProjectTitleBar>

        <ProjectParagraph>

            A bunch of people making a bunch of random mods, such as openCane.

        </ProjectParagraph>

    </projectContainer>

    <div class="flex flex-row gap-4 flex-wrap">

        <NuxtLink to="https://github.com/custardmc"> <user> Github <LucideGithub /> </user> </NuxtLink>

        <NuxtLink to="https://modrinth.com/organization/custardmc"> <user> Modrinth <LucideBox /> </user> </NuxtLink>

    </div>

</template>

<script setup lang="ts">
useSeoMeta({
  title: 'projects - blurryface',
  description: "Hi! I'm Blurry. I make some silly projects on the internet and I make Minecraft become gay.",
  ogImage: "~/assets/img/icon512.png",
})
</script>
