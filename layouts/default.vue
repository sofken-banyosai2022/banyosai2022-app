<template>
  <v-app>
    <TheHeader />
    <slot />
    <TheFooter />
  </v-app>
</template>

<style lang="scss">
  /* Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap');

  /* グローバル変数 */
  $main-font: 'Space Grotesk', sans-serif;

  body {
    font-family: $main-font;
    animation: fadeIn 1s ease 0s 1 normal;
    -webkit-animation: fadeIn 1s ease 0s 1 normal;
  }
</style>
