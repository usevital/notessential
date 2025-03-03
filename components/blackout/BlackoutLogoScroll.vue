<template>
  <div class="logo-scroll">
    <div class="logo-scroll_inner">
      <BlackoutColourableLogo color="var(--brand-red)" />
      <BlackoutColourableLogo color="var(--brand-orange)" />
      <BlackoutColourableLogo color="var(--brand-yellow)" />
      <BlackoutColourableLogo color="var(--brand-green)" />
      <BlackoutColourableLogo color="var(--brand-blue)" />
      <BlackoutColourableLogo color="var(--brand-purple)" />
      <BlackoutColourableLogo color="var(--brand-rose)" />
      <BlackoutColourableLogo color="var(--brand-red)" />
      <BlackoutColourableLogo color="var(--brand-orange)" />
      <BlackoutColourableLogo color="var(--brand-yellow)" />
      <BlackoutColourableLogo color="var(--brand-green)" />
      <BlackoutColourableLogo color="var(--brand-blue)" />
      <BlackoutColourableLogo color="var(--brand-purple)" />
      <BlackoutColourableLogo color="var(--brand-rose)" />
      <BlackoutColourableLogo color="var(--brand-red)" />
      <BlackoutColourableLogo color="var(--brand-orange)" />
      <BlackoutColourableLogo color="var(--brand-yellow)" />
      <BlackoutColourableLogo color="var(--brand-green)" />
      <BlackoutColourableLogo color="var(--brand-blue)" />
      <BlackoutColourableLogo color="var(--brand-purple)" />
      <BlackoutColourableLogo color="var(--brand-rose)" />
      <BlackoutColourableLogo color="var(--brand-red)" />
      <BlackoutColourableLogo color="var(--brand-orange)" />
      <BlackoutColourableLogo color="var(--brand-yellow)" />
      <BlackoutColourableLogo color="var(--brand-green)" />
      <BlackoutColourableLogo color="var(--brand-blue)" />
      <BlackoutColourableLogo color="var(--brand-purple)" />
      <BlackoutColourableLogo color="var(--brand-rose)" />
    </div>
  </div>
</template>

<style>
.logo-scroll {
  width: 100%;
  min-height: 4em;
  overflow: hidden;
  animation: 5s scroller-load;
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
  min-width: calc(25px + 0.2em);
  min-height: calc(25px + 0.2em);
}

@keyframes scroller-load {
  from {
    opacity: 0;
  }
}

@keyframes scroll {
  to {
    transform: translateX(calc(-50% - 2.5em));
  }
}
</style>
