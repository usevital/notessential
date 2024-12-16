<template>
  <div class="flex flex-col gap-4 sm:gap-8 h-dvh">
    <!-- NAVBAR -->

    <nav
      class="text-brand-text flex flex-col items-center select-none font-bold p-8 border-b border-b-slate-800"
    >
      <div
        class="flex flex-row items-center text-base justify-between gap-6 max-w-[75rem] w-full"
      >
        <NuxtLink
          class="font-[500] italic text-lg flex items-center flex-row gap-4 tracking-wider"
          to="/"
        >
          <LogoType />
        </NuxtLink>

        <NuxtLink
          class="flex flex-row gap-2 items-center text-md font-semibold sm:text-lg tracking-tight hover:underline"
          to="/alternatives"
        >
          <span class="hidden sm:block">{{
            $t("layout.nav.alternatives")
          }}</span>
          <LucideSplit class="block sm:hidden p-0.5" />
        </NuxtLink>
      </div>
    </nav>

    <!-- MAIN CONTENT -->

    <main class="flex flex-col flex-auto items-center p-8 max-w-full">
      <div class="flex justify-center flex-col max-w-[75rem]">
        <slot />
      </div>
    </main>

    <!-- FOOTER -->

    <LogoScroll />

    <div class="flex justify-center flex-col gap-8">
      <footer
        class="flex flex-col gap-0 items-center pb-8 border-t border-t-slate-800 bg-brand-background-2"
      >
        <div
          class="flex flex-col md:flex-row items-center max-w-[75rem] md:items-start md:justify-center py-6 gap-8"
        >
          <div class="flex flex-col items-center sm:items-start gap-4 pt-2">
            <ColourableLogo color="var(--brand-blue)" class="h-4 w-full" />
            <div class="flex flex-col gap-1 font-[500] text-brand-text text-sm">
              <NELink
                class="font-medium text-white hover:underline"
                to="https://github.com/notessentialsite/website"
                external
                >{{ $t("layout.footer.open_source") }}</NELink
              >
            </div>
          </div>
          <div class="flex flex-row gap-6 sm:gap-8">
            <div class="flex flex-col gap-2 font-[500] text-brand-text text-sm">
              <span class="font-bold text-base">{{
                $t("layout.footer.about")
              }}</span>
              <NELink to="/attributions"
                ><LucideHeart class="h-5" />{{
                  $t("layout.footer.attributions")
                }}
              </NELink>
              <NELink to="https://usevital.github.io/uptime" external
                ><LucideActivity class="h-5" />Status
              </NELink>
            </div>
            <div class="flex flex-col gap-2 font-[500] text-brand-text text-sm">
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
            <div class="flex flex-col gap-2 font-[500] text-brand-text text-sm">
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

<style></style>

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
