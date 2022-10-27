<template>
  <v-footer class="pa-0" padless>
    <v-card width="100%" class="text-center" color="primary">

      <v-card-text>
        <v-btn v-for="item in icons" :key="item.icon" :href="item.url" class="mx-4" color="transparent" elevation="0" icon>
          <v-icon size="24px">{{ item.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="footer-text white--text">
        &copy; {{ new Date().getFullYear() }} ソフトウェア研究会
      </v-card-text>

    </v-card>
  </v-footer>
</template>


<script setup lang="ts">
  const icons = [
    { icon: 'mdi-web', url: 'https://www.fukushima-nct.ac.jp/' },
    { icon: 'mdi-github', url: 'https://github.com/sofken-banyosai2022' }
  ];
</script>

<style lang="scss" scoped>
.v-card {
  border-radius: 0;

  .footer-text {
    font-size: .7em;
  }
}
</style>
