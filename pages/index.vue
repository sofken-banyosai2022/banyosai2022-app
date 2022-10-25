<template>

    <!-- ローディング -->
    <Loading />

    <!-- メイン -->
    <v-main>

      <!-- メインビジュアル -->
      <MainVisual />

      <!-- グリッド -->
      <v-container class="py-16">
        <h2 class="text-h2 text-center py-4">TITLE</h2>
        <v-row justify="center">
          <v-col v-for="(item, i) in items" :key="i" cols="12" lg="8">
            <v-card elevation="2" color="primary">
              <v-card-title>{{item.text}}</v-card-title>
              <v-card-text>テキスト</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      
      <v-container class="py-16">
        <h2 class="text-h2 text-center py-4">TITLE</h2>
        <v-row>
          <v-col cols="12" lg="3" offset-lg="2">
            <v-img width="100%" height="100%" src="https://picsum.photos/1600/900?random=1"></v-img>
          </v-col>
          <v-col cols="12" lg="5">
            <v-card elevation="0" height="300">
              <v-card-title>Point 1</v-card-title>
              <v-card-text>見る</v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" lg="5" offset-lg="2">
            <v-card elevation="0" height="300">
              <v-card-title>Point 2</v-card-title>
              <v-card-subtitle>体験する</v-card-subtitle>
              <v-card-text>テキスト</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" lg="3">
            <v-img width="100%" height="100%" src="https://picsum.photos/1600/900?random=1"></v-img>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" lg="3" offset-lg="2">
            <v-img width="100%" height="100%" src="https://picsum.photos/1600/900?random=1"></v-img>
          </v-col>
          <v-col cols="12" lg="5">
            <v-card elevation="0" height="300">
              <v-card-title>Point 3</v-card-title>
              <v-card-text>共有する</v-card-text>
            </v-card>
          </v-col>
        </v-row>

      </v-container>

    </v-main>
</template>

<script setup lang="ts">
  const items = [
    { text: 'HOME', url: '#' },
    { text: 'ABOUT', url: '#' },
    { text: 'WORK', url: '#' },
    { text: 'SERVICE', url: '#' },
    { text: 'BLOG', url: '#' },
    { text: 'ACCESS', url: '#' },
  ];
</script>

<style  lang="scss" scoped>
/* PC */
@mixin pc {
  @media (min-width: 1264px) {
    @content;
  }
}

/* Medium */
@mixin md {
  @media (min-width: 960px) {
    @content;
  }
}
</style>
