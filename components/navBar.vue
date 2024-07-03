<template>
  <div
    class="sm:mx-[5%] text-[color:var(--big-text-colour)] select-none font-bold bg-[color:var(--brand-colour)] w-[calc(100%-1.5rem-var(--scrollbar-width))] p-2.5 rounded-3xl flex flex-row items-center text-base justify-between"
  >
    <NuxtLink
      class="font-[500] italic text-lg flex items-center flex-row gap-4 tracking-wider"
      to="/"
    >
      <img class="h-4" src="/img/logotype.svg" />
    </NuxtLink>

    <NuxtLink
      class="text-[0.5rem] sm:text-[1rem] internalFont"
      to="/alternatives"
    >
      Alternatives
    </NuxtLink>

    <NuxtLink
      class="text-[0.5rem] sm:text-[1rem] internalFont"
      to="/info"
    >
      Why not Essential?
    </NuxtLink>

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
