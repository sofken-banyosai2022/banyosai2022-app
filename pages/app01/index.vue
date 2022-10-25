<template>

  <!-- スタート画面 -->
  <App01Start />

  <!-- メイン -->
  <v-main>

    <!-- メインビジュアル -->
    <section class="main_visual">
      <v-container class="main_visual__image" fluid></v-container>
      <v-container class="main_visual__content" fluid>
        <v-row>
          <v-col class="main_visual__content-text">
            <p>Welcome to Banyosai !</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="main_visual__content-text">
            <p>2022 11/5</p>
          </v-col>
        </v-row>
      </v-container>
    </section>

  </v-main>
</template>

<script setup lang="ts">

  /* レイアウト設定 */
  definePageMeta({
    layout: 'app01'
  });
</script>
