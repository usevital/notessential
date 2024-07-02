<template>
  <div class="flex justify-center flex-col p-6 gap-8">
    <navBar />

    <div class="m-[5%] gap-8 flex-col flex">
      <slot />
    </div>

    <pageFooter />
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
