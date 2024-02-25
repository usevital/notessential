<template>

    <div v-if="!isBrowseMenuOpen" class="text-[color:var(--big-text-colour)] select-none font-bold bg-[color:var(--brand-colour)] w-full p-2.5 rounded-3xl flex flex-row gap-12 items-center text-base justify-center pr-5">

        <NuxtLink class="text-lg flex items-center flex-row gap-2" to="https://blurryface.xyz">
        
            <img class="h-10 rounded-2xl" src="~/assets/img/icon512.png">

            {{ name }}

        </NuxtLink>

        <NuxtLink to="/" class="hidden sm:block"> Home </NuxtLink>

        <NuxtLink to="/projects" class="hidden sm:block"> Projects </NuxtLink>

        <NuxtLink to="" class="block sm:hidden" @click="toggleDropdown"> <LucideMenu /> </NuxtLink>

    </div>

    <div v-if="isBrowseMenuOpen" class="text-[color:var(--big-text-colour)] select-none font-bold bg-[color:var(--brand-colour)] w-full p-2.5 rounded-3xl flex flex-col gap-2.5 items-center text-base justify-between sm:justify-normal">

        <div class="w-full rounded-3xl flex flex-row gap-12 items-center text-base justify-center pr-2.5">

            <NuxtLink class="text-lg flex items-center flex-row gap-2" to="https://blurryface.xyz">
        
                <img class="h-10 rounded-2xl" src="~/assets/img/icon512.png">

                {{ name }}

            </NuxtLink>

            <NuxtLink to="" class="block" @click="toggleDropdown"> <LucideMenu /> </NuxtLink>

        </div>

            <NuxtLink to="/" @click="toggleDropdown" class="text-center block bg-[color:var(--brand-background)] w-full p-4 rounded-2xl"> Home </NuxtLink>

            <NuxtLink to="/projects" @click="toggleDropdown" class="text-center block bg-[color:var(--brand-background)] w-full p-4 rounded-2xl"> Projects </NuxtLink>

    </div>

</template>

<script setup lang="ts">

const isBrowseMenuOpen = ref(false)
isBrowseMenuOpen.value = false

function toggleDropdown() {
  isBrowseMenuOpen.value = !isBrowseMenuOpen.value

 /* if (isBrowseMenuOpen.value) {
    isMobileMenuOpen.value = false
  } */
}

var name = "Blurryface"

</script>
