// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Not Essential",
      titleTemplate: "%s | Not Essential",
      meta: [
        {
          name: "description",
          content:
            "There are better ways to play Minecraft. Don't be forced to use Essential.",
        },
        { name: "theme-color", content: "#0056ea" },
      ],
      link: [
        { rel: "shortcut icon", href: "favicon.ico", type: "image/x-icon" },
      ],
    },
  },
  modules: ["nuxt-lucide-icons"],
})
