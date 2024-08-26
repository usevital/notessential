<template>
  <div class="flex flex-col gap-8">
    <PageHero
      :title="$t('experiments.hero')"
      :sub-title="$t('experiments.subtitle')"
    />

    <div class="flex flex-col gap-3">
      <div
        class="flex flex-col gap-2 border-2 rounded-xl p-5 border-[var(--text-colour)]"
      >
        <span class="flex items-center gap-2 font-bold text-lg">
          <LucideLanguages /> Language Switcher
        </span>

        <p>
          Selected locale: <span class="font-bold">{{ locale }}</span>
        </p>

        <p>Available langagues:</p>

        <NESelect v-on:change="handleLanguageChange">
          <option
            v-for="locale in allLocales"
            :value="locale.code"
            @click="setLocale(locale.code)"
          >
            {{ locale.name }}
          </option>
        </NESelect>
      </div>
      <div
        class="flex flex-col gap-2 border-2 rounded-xl p-5 border-[var(--text-colour)]"
      >
        <span class="flex items-center gap-2 font-bold text-lg">
          <LucideShieldQuestion /> Why not Essential?
        </span>
        <p>
          Current Selection: <span class="font-bold">{{ whyNot }}</span>
        </p>
        <NEButton
          class="w-fit cursor-pointer"
          @click="whyNot = !whyNot"
          secondary
          >Set to {{ !whyNot }}</NEButton
        >
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Experiments",
})

const whyNot = useCookie("whyNotEssential", { default: () => false })

const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})

const allLocales = locales.value

function handleLanguageChange(event) {
  setLocale(event.target.value)
}
</script>
