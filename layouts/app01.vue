<template>
  <v-app>
    <!-- <App01BottomNav /> -->
    <slot />
  </v-app>
</template>

<script setup lang="ts">
  import { useTheme } from 'vuetify';

  /* テーマ設定 */
  const theme = useTheme();
  theme.global.name.value = 'dark';
</script>
