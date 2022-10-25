<template>
  <section class="main_visual">

    <div class="main_visual__images">
      <v-container class="main_visual__image" fluid></v-container>
      <v-container class="main_visual__image" fluid></v-container>
      <v-container class="main_visual__image" fluid></v-container>
    </div>

    <v-container class="main_visual__content" fluid>
      <v-row>
        <v-col class="main_visual__content-text">
          <p>Welcome to Banyosai !</p>
        </v-col>
      </v-row>
    </v-container>

  </section>
</template>

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

/* メインビジュアル */
.main_visual {
  height: 50vh;
  position: relative;
  overflow: hidden;

  @include pc {
    height: 100vh;
  }

  .main_visual__images {
    width: 100%;
    height: 100%;
    position: relative;

    .main_visual__image {
      height: 50vh;
      position: absolute;
      opacity: 0;
      animation: imageChanger 24s linear infinite;

      @include pc {
        height: 100vh;
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
    position: absolute;
    top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
  
    &-text {
      font-size: 48px;
      color: #fff;
      text-align: center;
      font-weight: bold;
      text-shadow: 2px 2px 5px rgb(0 0 0 / 30%);
    
      @include pc {
        font-size: 96px;
      }
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
