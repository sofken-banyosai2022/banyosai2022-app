<template>

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

/* メインビジュアル */
.main_visual {
  height: 50vh;
  position: relative;
  overflow: hidden;

  @include pc {
    height: 100vh;
  }

  .main_visual__image {
    height: 50vh;
    background: url("../assets/img/main_visual_01.jpg");
    background-size: cover;
    background-position: center center;

    @include pc {
      height: 100vh;
      transform: scale(1.1);
      transition: 2s ease-in-out;
    }

    &:hover {
      transform: scale(1.0);
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
</style>
