<template>
  <v-bottom-navigation :elevation="3" grow>
    <v-btn value="recent">
      <v-icon>mdi-history</v-icon>
      Recent
    </v-btn>
    <v-btn value="favorites">
      <v-icon>mdi-heart</v-icon>
      Favorites
    </v-btn>
    <v-btn value="nearby">
      <v-icon>mdi-map-marker</v-icon>
      Nearby
    </v-btn>
  </v-bottom-navigation>
</template>
