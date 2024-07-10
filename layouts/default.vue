<template>
  <div class="flex justify-center flex-col p-6 gap-8">
    <nav
      class="sm:mx-[5%] text-[color:var(--big-text-colour)] select-none font-bold bg-[color:var(--brand-colour)] w-[calc(100%-1.5rem-var(--scrollbar-width))] p-2.5 flex flex-row items-center text-base justify-between gap-6 max-w-full"
    >
      <NuxtLink
        class="font-[500] italic text-lg flex items-center flex-row gap-4 tracking-wider"
        to="/"
      >
        <LogoType class="w-min" />
      </NuxtLink>

      <NuxtLink
        class="text-[0.5rem] sm:text-[1rem] internalFont"
        to="/alternatives"
      >
        {{ $t("layout.nav.alternatives") }}
      </NuxtLink>
    </nav>

    <main class="pb-8 sm:mb-0 sm:m-[5%] gap-8 flex-col flex">
      <slot />
    </main>
  </div>

  <LogoScroll />

  <div class="flex justify-center flex-col gap-8 mt-8">
    <footer class="flex flex-col gap-0 items-center pb-8">
      <div
        class="flex flex-col sm:flex-row items-center sm:items-start sm:justify-center py-6 gap-8"
      >
        <!--  <span class="font-[500] text-[var(--text-colour)] text-xs text-center">
        {{ $t("layout.thank_you") }} &bull; ORIGINALLY CREATED BY BLURRYFACE
        &bull; DESIGNED BY WORLDWIDEPIXEL &bull;
        <ExternalLink to="https://github.com/blryface/notessential">{{
          $t("layout.page_source")
        }}</ExternalLink>
      </span>
      <span class="font-[500] italic text-slate-400 text-xs text-center">
        {{ $t("layout.disclaimer") }}
      </span>-->
        <div class="flex flex-col gap-4 pt-2">
          <ClientOnly>
            <ColourableLogo :color="easterEggColour" />
          </ClientOnly>
          <div
            class="flex flex-col gap-1 font-[500] text-[var(--text-colour)] text-sm"
          >
            <span>
              {{ $t("layout.footer.open_source_1") }}
              <ExternalLink to="https://github.com/blryface/notessential">{{
                $t("layout.footer.open_source_2")
              }}</ExternalLink
              >.</span
            >
          </div>
        </div>
        <div class="flex flex-row gap-6 sm:gap-8">
          <div
            class="flex flex-col gap-2 font-[500] text-[var(--text-colour)] text-sm"
          >
            <span class="font-bold text-base">{{
              $t("layout.footer.about")
            }}</span>
            <span
              >{{ $t("layout.footer.credit_creator") }}
              <ExternalLink to="https://blurryface.xyz"
                >Blurryface</ExternalLink
              ></span
            >
            <span
              >{{ $t("layout.footer.credit_designed") }}
              <ExternalLink to="https://worldwidepixel.ca"
                >WorldWidePixel</ExternalLink
              ></span
            >
          </div>
          <div
            class="flex flex-col gap-2 font-[500] text-[var(--text-colour)] text-sm"
          >
            <span class="font-bold text-base">{{
              $t("layout.footer.interact")
            }}</span>
            <ExternalLink to="https://crowdin.com/project/notessential"
              >Crowdin <LucideGlobe class="h-5"
            /></ExternalLink>
            <ExternalLink to="https://discord.gg/wncdz7e8jy"
              >Discord <LucideMessageCircle class="h-5"
            /></ExternalLink>
          </div>
        </div>
      </div>
      <span class="font-[500] italic text-slate-400 text-xs text-center">
        {{ $t("layout.footer.disclaimer") }}
      </span>
      <span class="font-[500] italic text-slate-400 text-xs text-center">
        {{ $t("layout.footer.disclaimer_2") }}
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

<script setup>
const easterEggColour = ref("var(--brand-logo)")
const easterEggNumber = Math.floor(Math.random() * 8)
//const easterEggLoaded = ref(false)

switch (easterEggNumber) {
  case 0: {
    easterEggColour.value = "var(--brand-red)"
    break
  }
  case 1: {
    easterEggColour.value = "var(--brand-orange)"
    break
  }
  case 2: {
    easterEggColour.value = "var(--brand-yellow)"
    break
  }
  case 3: {
    easterEggColour.value = "var(--brand-green)"
    break
  }
  case 4: {
    easterEggColour.value = "var(--brand-blue)"
    break
  }
  case 5: {
    easterEggColour.value = "var(--brand-purple)"
    break
  }
  case 6: {
    easterEggColour.value = "var(--brand-rose)"
    break
  }
  case 7: {
    easterEggColour.value = "var(--brand-logo)"
    break
  }
}
//easterEggLoaded.value = true
//console.log(easterEggColour.value, easterEggNumber)
</script>
