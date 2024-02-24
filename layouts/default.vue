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

:root {
  font-family: Inter, Helvetica, sans-serif;
  --brand-colour: #2b2544;
  --brand-background: #13111e;
  --text-colour: rgb(214, 214, 214);
  --big-text-colour: white;
}

.brand-gradient {
    background: linear-gradient(90deg, rgb(166, 87, 250) 0%, rgb(116, 71, 228) 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
}

body {
  background-color: var(--brand-background);
  color: var(--text-colour);
}

</style>