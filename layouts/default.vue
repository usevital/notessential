<template>
  <div class="flex flex-col gap-8 sm:gap-16 bg-[color:var(--brand-colour)]">
    <nav
      class="sm:px-[calc(5%+2rem)] text-[color:var(--big-text-colour)] select-none font-bold p-8 flex flex-col sm:flex-row items-center text-base justify-between gap-6 max-w-full border-b border-b-slate-800"
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
        {{ $t("layout.nav.alternatives") }}
      </NuxtLink>
    </nav>
    <main
      class="flex justify-center flex-col mx-[5%] sm:mx-[calc(5%+2rem)] max-w-full"
    >
      <slot />
    </main>

    <LogoScroll />

    <div class="flex justify-center flex-col gap-8">
      <footer
        class="flex flex-col gap-0 items-center pb-8 border-t border-t-slate-800 bg-[#0f0f0f]"
      >
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start sm:justify-center py-6 gap-8 mx-[calc(5%+2rem)] sm:mx-0"
        >
          <div class="flex flex-col items-center sm:items-start gap-4 pt-2">
            <ColourableLogo color="var(--brand-blue)" />
            <div
              class="flex flex-col gap-1 font-[500] text-[var(--text-colour)] text-sm"
            >
              <ExternalLink
                class="font-medium text-white hover:underline"
                to="https://github.com/blryface/notessential"
                >{{ $t("layout.footer.open_source") }}</ExternalLink
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
                ><LucideGlobe class="h-5" />Crowdin
              </ExternalLink>
              <ExternalLink to="https://discord.gg/wncdz7e8jy"
                ><LucideMessageCircle class="h-5" />Discord
              </ExternalLink>
            </div>
          </div>
        </div>
        <span class="flex flex-col gap-2 items-center">
          <span
            class="font-[500] text-slate-400 text-xs text-center mx-[calc(5%+2rem)] sm:mx-0"
          >
            {{ $t("layout.footer.disclaimer") }}
          </span>
        </span>
      </footer>
    </div>
  </div>
</template>

<style>
@import url(https://fonts.bunny.net/css?family=inter:100,200,300,400,500,600,700,800,900);
@import url("https://cdn.jsdelivr.net/npm/@intergrav/fonts@1/serve/geist.min.css");
@import url("https://cdn.jsdelivr.net/npm/@intergrav/fonts@1/serve/geist-mono.min.css");

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
  font-family: Geist, Inter, Helvetica, sans-serif;
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
