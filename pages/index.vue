<template>
  <div class="container">
    <section>
      <h1>
        THERE ARE BETTER WAYS TO PLAY
        <span class="brand-gradient">MINECRAFT</span>.
      </h1>
      <p>
        Don't be forced to use Essential. There are countless open-source
        alternatives to help you.
      </p>
    </section>
    <NuxtLink to="/alternatives" class="btn">
      <LucideArrowUpRight /> Alternatives
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Home",
  description:
    "Essential has many issues. This website tells why, and provides alternatives.",
  ogImage: "/img/icon512.png",
})
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

h1 {
  font-family: "Press Start 2P";
  font-size: 3em;
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

.btn {
  margin-top: 1em;
}
</style>
