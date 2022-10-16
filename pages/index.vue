<template>
  <v-app>
    
    <!-- サイドナビ -->
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :href="item.url">
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- トップナビ -->
    <v-app-bar elevation="3" :height="AppBarHeight" app>

      <!-- ロゴ -->
      <v-toolbar-title>
        <v-btn height="100%" :ripple="false" color="#ffffff" class="pa-0" href="#">
        <v-img :width="logoWidth" height="48" src="../assets/img/logo.png"></v-img>
      </v-btn>
      </v-toolbar-title>

      <!-- タブ -->
      <v-tabs color="primary">
        <v-tab height="100%" v-for="(item, i) in items" :key="i" :href="item.url">
          {{item.text}}
        </v-tab>
      </v-tabs>

      <!-- ハンバーガーメニュー -->
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>

    </v-app-bar>

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

    <!-- フッター -->
    <v-footer color="primary" padless>
      <v-row justify="center" no-gutters>
        <v-col class="primary py-4 text-center white--text" cols="12">
          &copy; {{ new Date().getFullYear() }} ソフトウェア研究会
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
  import { useDisplay } from 'vuetify';
  import { computed } from "vue";

  const selectedItem = 1;
  const drawer = useState('drawer', () => false); // サイドナビの表示・非表示制御
  const items = [
    { text: 'HOME', url: '#' },
    { text: 'ABOUT', url: '#' },
    { text: 'WORK', url: '#' },
    { text: 'SERVICE', url: '#' },
    { text: 'BLOG', url: '#' },
    { text: 'ACCESS', url: '#' },
  ];

  /* レスポンシブ */
  const display = useDisplay();

  const AppBarHeight = computed(() => {
    return display.smAndDown.value ? 50 : 80; // モバイル:50px, ディスクトップ:80px
  });
  const AppBarPx = computed(() => {
    return display.smAndDown.value ? "px-0" : "px-4"; // モバイル:"px-0", ディスクトップ:"px-4"
  });
  const logoWidth = computed(() => {
    return display.smAndDown.value ? 180 : 240; // モバイル:150px, ディスクトップ:240px
  });
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

/* トップナビ */
.v-toolbar {

  @include md {
    padding: 0 16px 0; // Medium以上はpaddingを追加
  }

  .v-app-bar-nav-icon {

    @include md {
      display: none; // Medium以上はハンバーガーメニューを非表示
    }
  }

  .v-tabs {
    display: none;
  
    @include md {
      display: flex; // Medium以上はタブを表示
    }

    .v-tab {
      font-size: 100%; // タブの文字サイズを設定
    }
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
