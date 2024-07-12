<template>
  <div class="flex flex-col gap-8">
    <PageHero
      :title="'Experimental Features'"
      :sub-title="'For development purposes'"
    />

    <div class="flex flex-col gap-2">
      <span class="font-bold text-lg">
        Language switcher (for testing purposes)
      </span>

      Current Locale:

      {{ locale }}

      <br /><br />

      Available alternative langagues:

      <a
        class="indent-4"
        href="#"
        v-for="locale in availableLocales"
        :key="locale.code"
        @click.prevent.stop="setLocale(locale.code)"
      >
        <span>- {{ locale.name }}</span>
      </a>
    </div>
  </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})
</script>
