<template>
  <div
    class="flex flex-col gap-8 sm:gap-16 bg-[color:var(--brand-colour)] h-dvh"
  >
    <!-- NAVBAR -->

    <nav
      class="sm:px-[calc(5%+2rem)] text-[color:var(--big-text-colour)] flex flex-col items-center select-none font-bold p-8 border-b border-b-slate-800"
    >
      <div
        class="flex flex-col items-center text-base justify-center gap-6 max-w-[80rem] w-full"
      >
        <NuxtLink
          class="font-[500] italic text-lg flex items-center flex-row gap-4 tracking-wider"
          to="/"
        >
          <BlackoutLogoType />
        </NuxtLink>
      </div>
    </nav>

    <!-- MAIN CONTENT -->

    <main class="flex flex-col px-4 flex-auto items-center max-w-full">
      <div class="flex gap-4 justify-center flex-col max-w-[60rem]">
        <CategoryDivider>We'll be right back.</CategoryDivider>
        <span>
          We're experiencing technical, management and interest issues at the
          moment. Don't worry, we'll be back REALLY SOON, but for now we need to
          display this page instead.
        </span>
        <span>We apologise for any inconvenience.</span>
        <span>- Blurry</span>
      </div>
    </main>

    <!-- FOOTER -->

    <BlackoutLogoScroll />
    <div></div>
  </div>
</template>

<style>
.internalFont {
  font-family: Internal, InternalBold, Geist, Inter;
}

.internalBold {
  font-family: InternalBold, Internal, Geist, Inter;
}

.monocraftFont {
  font-family: Monocraft;
}

:root {
  font-family: Geist, Inter, Helvetica;
  --brand-colour: rgb(0, 0, 0);
  --brand-background: rgb(0, 0, 0);
  --brand-background-old: rgb(0, 86, 234);
  --text-colour: rgb(227, 245, 255);
  --big-text-colour: rgb(227, 245, 255);
  --brand-scrollbar: rgb(0, 86, 234);

  --brand-logo: rgb(227, 245, 255);
  --brand-red: #fa6f5a;
  --brand-orange: #faa55a;
  --brand-yellow: #fadd5a;
  --brand-green: #9dfa5a;
  --brand-blue: #5a95fa;
  --brand-purple: #ba5afa;
  --brand-rose: #fa5a87;

  scrollbar-color: var(--brand-scrollbar) var(--brand-colour);
}

.brand-gradient {
  background: linear-gradient(
    90deg,
    rgb(0, 106, 255) 0%,
    rgb(31, 180, 255) 100%
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

.brand-gradient-bg {
  background: linear-gradient(
    90deg,
    rgb(0, 106, 255) 0%,
    rgb(31, 180, 255) 100%
  );
}

body {
  background-color: var(--brand-background);
  color: var(--text-colour);
}
</style>

<script setup>
useHead({
  title: "We'll be right back.",
  titleTemplate: "%s",
  meta: [
    {
      name: "description",
      content:
        "We're experiencing technical, management and interest issues at the moment. Don't worry, we'll be back REALLY SOON, but for now we need to display this page instead.",
    },
  ],
})
</script>
