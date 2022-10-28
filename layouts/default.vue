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

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 5em;
  }
  body {
    font-family: 'Space Grotesk', sans-serif;
    animation: fadeIn 1s ease 0s 1 normal;
    -webkit-animation: fadeIn 1s ease 0s 1 normal;
    transition : all 0.5s ease 0s;
  }
</style>
