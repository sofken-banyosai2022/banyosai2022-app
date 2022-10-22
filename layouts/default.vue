<template>
  <v-app>
    <TheHeader />
    <slot />
    <TheFooter />
  </v-app>
</template>

<style lang="scss">
  body {
    animation: fadeIn 1s ease 0s 1 normal;
    -webkit-animation: fadeIn 1s ease 0s 1 normal;
  }
</style>
