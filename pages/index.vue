<template>

    <!-- ローディング -->
    <Loading />

    <!-- メイン -->
    <v-main>

      <!-- メインビジュアル -->
      <MainVisual />
      
      <!-- WORKS -->
      <v-container>
        <h2 class="text-h2 py-4">WORKS</h2>
        <v-row v-for="(item) in workList" :key="item.title" justify="center">
          <v-col cols="12" lg="8">
            <v-card class="works-card" elevation="2" color="primary">
              <v-card-title class="ma-4">{{ item.title }}</v-card-title>
              <v-img height="100%" src="https://picsum.photos/1600/900?random=1"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- MEMBER -->
      <v-container>
        <h2 class="text-h2 py-4">MEMBER</h2>
        <v-row justify="center">
          <v-col v-for="(item) in memberList" :key="item.title" cols="6" lg="5" class="menber__name-text">
            <p class="menber__name-text-title">{{item.title}}</p>
            <p class="menber__name-text-name">{{item.name}}</p>
          </v-col>
        </v-row>
      </v-container>

      <!-- ACCESS -->
      <v-container class="access">
        <h2 class="text-h2 py-4">ACCESS</h2>

        <v-row justify="center">
          <h3 class="access-title pa-4">開催場所</h3>
          <v-divider class="access-title pa-4"></v-divider>
        </v-row>

        <v-row class="access-location" justify="center">
          <v-col cols="12" lg="5">
            <p class="access-name py-4">福島工業高等専門学校</p>
            <p>〒970-8034</p>
            <p>福島県いわき市平上荒川字長尾３０</p>
          </v-col>
          <v-col cols="12" lg="5" class="access-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1126.0782100199724!2d140.88897363261398!3d37.03292736996434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6021110a3467021f%3A0x1796df6d719fa484!2z56aP5bO25bel5qWt6auY562J5bCC6ZaA5a2m5qCh!5e0!3m2!1sja!2sjp!4v1666827121159!5m2!1sja!2sjp" width="100%" height="100%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
  const workList = [
    { title: 'VRアート' },
    { title: 'LEDアート' },
    { title: 'VRフィギュア' },
    { title: 'Unityゲーム' },
    { title: 'サイバーボランティア' }
  ];
  const memberList = [
    { title: 'VRアート', name: '佐藤 龍熙' },
    { title: 'LEDアート', name: '岸本 篤' },
    { title: 'VRフィギュア', name: '荒井 宥希' },
    { title: 'Unityゲーム', name: '田巻 斗睦' },
    { title: 'サイバーボランティア', name: '國谷 幸平' },
    { title: 'スタッフ', name: '中本 怜恩' },
    { title: 'スタッフ', name: '松本 蒼矢' },
    { title: 'スタッフ', name: '蛭田 匡祐' }
  ];

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap');

/* グローバル変数 */
$primary: rgba(0, 113, 243);

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

/* コンテナ設定 */
.v-container {
  max-width: 100%;

  @include pc {
    max-width: 80%;
  }

  // 章タイトル
  .text-h2 {
  padding-bottom: 100px !important;
  font-size: 2em !important;
  letter-spacing: 0.1em !important;
  font-family: 'Space Grotesk', sans-serif !important;
  text-align: center;

  @include pc {
   font-size: 5em !important;
  }

  &::first-letter {
    font-size: 1.5em;
    color: $primary;
  }
}
}

/* MEMBER */
.menber__name-text {
  font-size: 1.2em;
  font-weight: bold;
  font-family: 'Noto Serif JP', serif;
  text-align: center;

  @include pc {
   font-size: 2em;
  }

  &-title {
    color: $primary;
    font-size: .7em;
  }
}

/* WORKS */
.works-card {
  text-align: center;
  display: flex;
  max-height: 200px;

  .v-card-title {
    width: 80%;
  }
}

/* ACCESS */
.access {
  .access-title {
    font-size: 1.2em;

    @include pc {
     font-size: 2em;
    }
  }
  .access-location {

    .access-map {
      height: 300px;

      @include pc {
        height: 500px;
      }
    }

    .access-name {
      font-size: 1.2em;
      font-weight: 700;

      @include pc {
       font-size: 1.5em;
      }
    }
  }
}
</style>
