<template>

    <div class="text-[color:var(--big-text-colour)] select-none font-bold bg-[color:var(--brand-colour)] w-full p-2.5 rounded-3xl flex flex-row gap-12 items-center text-base justify-center pr-5">

        <NuxtLink class="font-[500] italic text-lg flex items-center flex-row gap-4 tracking-wider" to="/">
        
            <img class="h-10 rounded-xl border-4" src="~/assets/img/icon512.png">

            NOT {{ name }}

        </NuxtLink>

        &bull;

        <NuxtLink to="/alternatives"> Alternatives </NuxtLink>

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

var name = "ESSENTIAL"

</script>
