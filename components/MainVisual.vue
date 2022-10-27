<template>
  <section class="main_visual">

    <div class="main_visual__images">
      <v-container class="main_visual__image" fluid></v-container>
      <v-container class="main_visual__image" fluid></v-container>
      <v-container class="main_visual__image" fluid></v-container>
    </div>

    <v-container class="main_visual__content" fluid>
      <v-row class="main_visual__content-image px-2 py-4">
        <v-col cols="6" lg="4" offset-lg="2">
          <v-img src="/img/gakuensai.webp"></v-img>
          <v-img src="/img/banyosai.webp"></v-img>
        </v-col>
        <v-col cols="6" lg="4">
          <v-img src="/img/date.webp"></v-img>
        </v-col>
      </v-row>
    </v-container>

  </section>
</template>

<style  lang="scss" scoped>

/* グローバル変数 */
$primary: rgba(0, 113, 243, 0.5);

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

/* メインビジュアル */
.main_visual {
  height: 50vh;
  min-height: 500px;
  position: relative;
  overflow: hidden;

  @include pc {
    height: 95vh;
  }

  .main_visual__images {
    width: 100%;
    height: 100%;
    position: relative;

    .main_visual__image {
      height: 50vh;
      min-height: 500px;
      position: absolute;
      opacity: 0;
      animation: imageChanger 24s linear infinite;

      @include pc {
        height: 95vh;
      }

      // メイン画像
      &:nth-of-type(1) {
        background: url("/img/main_visual_01.webp");
        background-size: cover;
        background-position: center center;
        animation-delay: -2s;
      }
      &:nth-of-type(2) {
        background: url("/img/main_visual_01.webp");
        background-size: cover;
        background-position: center center;
        animation-delay: 6s;
      }
      &:nth-of-type(3) {
        background: url("/img/main_visual_01.webp");
        background-size: cover;
        background-position: center center;
        animation-delay: 14s;
      }
    }
  }

  .main_visual__content {
    bottom: 0;
    padding: 0;
    position: absolute;
    overflow: hidden;

    &-image {
      background: linear-gradient(to right, $primary 0%, rgba(0, 0, 0, 0.1) 50%);
    }
  }
}

// 画像切替アニメーション
@keyframes imageChanger {
  0% {
    opacity: 0;
    transform: scale(1.2);
  }
  4.16% {
    opacity: 1;
  }
  33.33% {
    opacity: 1;
  }
  41.66% {
    opacity: 0;
    transform: scale(1.0);
  }
  100% {
    opacity: 0;
  }
}
</style>
