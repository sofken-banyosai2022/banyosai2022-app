<template>

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
      <v-img :width="logoWidth" height="48" src="../assets/img/logo.webp"></v-img>
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
</template>

<script setup lang="ts">
  import { useDisplay } from 'vuetify';
  import { computed } from "vue";

  const selectedItem = ref(1);
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
    return display.smAndDown.value ? 180 : 240; // モバイル:180px, ディスクトップ:240px
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
</style>
