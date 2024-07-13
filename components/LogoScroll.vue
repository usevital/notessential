<template>
  <div class="logo-scroll">
    <div class="logo-scroll_inner">
      <ColourableLogo color="var(--brand-red)" />
      <ColourableLogo color="var(--brand-orange)" />
      <ColourableLogo color="var(--brand-yellow)" />
      <ColourableLogo color="var(--brand-green)" />
      <ColourableLogo color="var(--brand-blue)" />
      <ColourableLogo color="var(--brand-purple)" />
      <ColourableLogo color="var(--brand-rose)" />
      <ColourableLogo color="var(--brand-red)" />
      <ColourableLogo color="var(--brand-orange)" />
      <ColourableLogo color="var(--brand-yellow)" />
      <ColourableLogo color="var(--brand-green)" />
      <ColourableLogo color="var(--brand-blue)" />
      <ColourableLogo color="var(--brand-purple)" />
      <ColourableLogo color="var(--brand-rose)" />
    </div>
  </div>
</template>

<style>
.logo-scroll {
  /* Width will be overitten by JS */
  width: 720px;
  min-height: 4em;
  overflow: hidden;
}

.logo-scroll_inner {
  display: flex;
  align-items: center;
  min-width: fit-content;
  min-height: 100%;
  gap: 5em;
  animation: 100s scroll linear infinite;
}

.logo-scroll_inner > * {
  min-width: calc(375px + 0.2em);
  min-height: calc(25px + 0.2em);
}

@keyframes scroll {
  to {
    transform: translateX(calc(-50% - 2.5em));
  }
}
</style>

<script setup>
onMounted(() => {
  document.querySelector(".logo-scroll").style.width = `${window.innerWidth}px`
})
</script>
