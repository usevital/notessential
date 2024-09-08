<template>
  <div class="flex flex-col flex-wrap gap-6 pb-8">
    <span
      class="text-[var(--big-text-color)] italic font-['Geist Mono'] text-[4rem]"
    >
      <span class="font-[250] tracking wider">{{ title }}</span>
    </span>
    <span class="text-2xl">{{ subtitle }} </span>

    <div v-for="(info, title) in data" class="text-xl indent-4">
      <span v-if="numbered"> {{ title + 1 }}. </span>
      <span v-else class="font-bold select-none"> &bull;&nbsp; </span>
      <span v-if="!URLRegex.test(info)">
        {{ info }}
      </span>
      <span v-else v-html="info.replace(URLRegex, getLinksFromText)" />
    </div>
  </div>
</template>

<script setup>
const URLRegex = new RegExp(
  /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/,
)

const getLinksFromText = function (text) {
  const newText = `<a class="text-[var(--brand-blue)]" href="${text}">${text}</a>`
  return newText
}

const props = defineProps({
  data: Object,
  title: String,
  subtitle: String,
  numbered: Boolean,
})
</script>
