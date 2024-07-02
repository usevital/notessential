<template>
  <div class="layout">
    <nav>
      <div class="inner">
        <div class="brand">
          <NuxtLink to="/">
            <img
              src="~/assets/brand/logotype.svg"
              alt="Not Essential Logo"
              height="14"
            />
          </NuxtLink>
        </div>
        <div class="links">
          <NuxtLink to="/alternatives"
            ><LucideArrowUpRight />Alternatives</NuxtLink
          >
        </div>
      </div>
    </nav>
    <main>
      <slot />
    </main>
    <footer>
      <div class="inner">
        <span>
          THANKS FOR READING - WRITTEN BY BLURRYFACE - DESIGNED BY
          WORLDWIDEPIXEL - REDESIGNED BY NITRRINE -
          <a href="https://github.com/blryface/notessential" target="_blank"
            >PAGE SOURCE</a
          >
        </span>
        <span class="not-affilated-warning">
          THIS SITE IS NOT AFFILIATED WITH ESSENTIAL OR SPARK UNIVERSE
        </span>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
:root {
  --primary: #0056ea;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #000;
  color: #fff;
  font-family: "Inter", sans-serif;
}

.layout {
  display: flex;
  flex-direction: column;
  height: 100dvh;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;

  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;

    .links a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      text-decoration: none;
      transition: 200ms color;

      &:hover {
        color: var(--primary);
      }
    }
  }
}

main {
  flex: 1 1 auto;
  padding: 0 2em;
}

footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3em 2em;
  font-size: 0.9em;

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    width: 100%;

    a {
      color: inherit;
    }

    .not-affilated-warning {
      font-style: italic;
      color: #ccc;
    }
  }
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: auto;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  background: transparent;
  padding: 1em 2em;
  background: var(--primary);
  font-family: "Goldman";
  transition: 200ms;

  &:hover {
    filter: brightness(1.2);
  }

  svg {
    width: 1em;
    height: 1em;
  }
}
</style>
