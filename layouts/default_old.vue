<template>
  <div
    class="flex flex-col gap-8 sm:gap-16 bg-[color:var(--brand-colour)] h-dvh"
  >
    <!-- NAVBAR -->

    <nav
      class="sm:px-[calc(5%+2rem)] text-[color:var(--big-text-colour)] flex flex-col items-center select-none font-bold p-8 border-b border-b-slate-800"
    >
      <div
        class="flex flex-col sm:flex-row items-center text-base justify-between gap-6 max-w-[80rem] w-full"
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
      </div>
    </nav>

    <!-- MAIN CONTENT -->

    <main
      class="flex flex-col flex-auto items-center mx-[5%] sm:mx-[calc(5%+2rem)] max-w-full"
    >
      <div class="flex justify-center flex-col max-w-[80rem]">
        <slot />
      </div>
    </main>

    <!-- FOOTER -->

    <LogoScroll />

    <div class="flex justify-center flex-col gap-8">
      <footer
        class="flex flex-col gap-0 items-center pb-8 border-t border-t-slate-800 bg-[#0f0f0f]"
      >
        <div
          class="flex flex-col md:flex-row items-center max-w-[80rem] md:items-start md:justify-center py-6 gap-8 mx-[calc(5%+2rem)] sm:mx-0"
        >
          <div class="flex flex-col items-center sm:items-start gap-4 pt-2">
            <ColourableLogo color="var(--brand-blue)" class="h-4 w-full" />
            <div
              class="flex flex-col gap-1 font-[500] text-[var(--text-colour)] text-sm"
            >
              <NELink
                class="font-medium text-white hover:underline"
                to="https://github.com/notessentialsite/website"
                external
                >{{ $t("layout.footer.open_source") }}</NELink
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
              <NELink to="/attributions"
                ><LucideHeart class="h-5" />{{
                  $t("layout.footer.attributions")
                }}
              </NELink>
              <NELink to="https://usevital.github.io/uptime" external
                ><LucideActivity class="h-5" />{{ $t("layout.footer.status") }}
              </NELink>
            </div>
            <div
              class="flex flex-col gap-2 font-[500] text-[var(--text-colour)] text-sm"
            >
              <span class="font-bold text-base">{{
                $t("layout.footer.resources")
              }}</span>
              <NELink to="/contributing"
                ><LucidePenBox class="h-5" />{{
                  $t("layout.footer.contributing")
                }}
              </NELink>
              <NELink to="/experiments"
                ><LucideWrench class="h-5" />{{
                  $t("layout.footer.experiments")
                }}
              </NELink>
            </div>
            <div
              class="flex flex-col gap-2 font-[500] text-[var(--text-colour)] text-sm"
            >
              <span class="font-bold text-base">{{
                $t("layout.footer.interact")
              }}</span>
              <NELink to="https://crowdin.com/project/notessential" external
                ><LucideGlobe class="h-5" />Crowdin
              </NELink>
              <NELink to="https://discord.gg/wncdz7e8jy" external
                ><LucideMessageCircle class="h-5" />Discord
              </NELink>
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
if (process.client) {
  const whyNot = useCookie("whyNotEssential", { default: () => false })
  const route = useRoute()
  const selectedExperiment = route.query.experiment || ""
  switch (selectedExperiment) {
    case "why":
      whyNot.value = true
      console.log("'Why not Essential?' experiment enabled")
  }
}
</script>
