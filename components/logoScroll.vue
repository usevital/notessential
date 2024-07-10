<template>
  <div class="w-full inline-flex flex-nowrap overflow-hidden">
    <div
      class="flex items-center justify-center md:justify-start animate-infinite-scroll"
    >
      <ColourableLogo
        color="var(--brand-red)"
        class="max-w-none mx-8 logotype"
      />
      <ColourableLogo
        color="var(--brand-orange)"
        class="max-w-none mx-8 logotype"
      />
      <ColourableLogo
        color="var(--brand-yellow)"
        class="max-w-none mx-8 logotype"
      />
      <ColourableLogo
        color="var(--brand-green)"
        class="max-w-none mx-8 logotype"
      />
      <ColourableLogo
        color="var(--brand-blue)"
        class="max-w-none mx-8 logotype"
      />
      <ColourableLogo
        color="var(--brand-purple)"
        class="max-w-none mx-8 logotype"
      />
      <ColourableLogo
        color="var(--brand-rose)"
        class="max-w-none mx-8 logotype"
      />
    </div>
    <div
      class="flex items-center justify-center md:justify-start animate-infinite-scroll"
      aria-hidden="true"
    >
      <ColourableLogo
        color="var(--brand-red)"
        class="max-w-none mx-8 logotype"
      />
      <ColourableLogo
        color="var(--brand-orange)"
        class="max-w-none mx-8 logotype"
      />
      <ColourableLogo
        color="var(--brand-yellow)"
        class="max-w-none mx-8 logotype"
      />
      <ColourableLogo
        color="var(--brand-green)"
        class="max-w-none mx-8 logotype"
      />
      <ColourableLogo
        color="var(--brand-blue)"
        class="max-w-none mx-8 logotype"
      />
      <ColourableLogo
        color="var(--brand-purple)"
        class="max-w-none mx-8 logotype"
      />
      <ColourableLogo
        color="var(--brand-rose)"
        class="max-w-none mx-8 logotype"
      />
    </div>
  </div>
</template>

<style>
.logotype {
  width: fit-content;
  height: 1.5rem;
}

@keyframes infinite-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
.animate-infinite-scroll {
  animation: infinite-scroll 25s linear infinite;
}
</style>
