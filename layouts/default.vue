<template>
  <div class="flex justify-center flex-col p-6 gap-8">
    <nav
      class="sm:mx-[5%] text-[color:var(--big-text-colour)] select-none font-bold bg-[color:var(--brand-colour)] w-[calc(100%-1.5rem-var(--scrollbar-width))] p-2.5 rounded-3xl flex flex-row items-center text-base justify-between gap-6"
    >
      <NuxtLink
        class="font-[500] italic text-lg flex items-center flex-row gap-4 tracking-wider"
        to="/"
      >
        <LogoType />
      </NuxtLink>

      <NuxtLink
        class="text-[0.5rem] sm:text-[1rem] internalFont"
        to="/alternatives"
      >
        Alternatives
      </NuxtLink>
    </nav>

    <main class="pb-8 sm:mb-0 sm:m-[5%] gap-8 flex-col flex">
      <slot />
    </main>

    <LogoScroll />

    <footer class="flex flex-col gap-1 pt-8">
      <span class="font-[500] text-[var(--text-colour)] text-xs text-center">
        THANKS FOR READING - WRITTEN BY BLURRYFACE - DESIGNED BY WORLDWIDEPIXEL
        &bull;
        <ExternalLink to="https://github.com/blryface/notessential"
          >PAGE SOURCE</ExternalLink
        >
      </span>
      <span class="font-[500] italic text-slate-400 text-xs text-center">
        THIS SITE IS IN NO WAY AFFILIATED WITH ESSENTIAL OR SPARK UNIVERSE
      </span>
    </footer>
  </div>
</template>

<style>
@import url(https://fonts.bunny.net/css?family=inter:100,200,300,400,500,600,700,800,900);

@font-face {
  font-family: "Internal";
  src: url("/font/QuinqueFive.ttf") format("truetype");
  font-weight: 500;
}

@font-face {
  font-family: "InternalBold";
  src: url("/font/PublicPixel.ttf") format("truetype");
  font-weight: 900;
}

.internalFont {
  font-family: Internal;
}

.internalBold {
  font-family: InternalBold;
}

:root {
  font-family: Inter, Helvetica, sans-serif;
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
