<template>

    <!-- ローディング -->
    <Loading />

    <!-- メイン -->
    <v-main>

      <!-- メインビジュアル -->
      <MainVisual />

      <!-- カウントダウン -->
      <Countdown />

      <!-- ABOUT -->
      <v-container>
        <h2 id="about" class="text-h2 py-4">ABOUT</h2>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="10">
            <v-card color="primary" class="about">
              <v-card-title class="pt-6" style="font-weight: bold;">アイデアを「カタチ」にする</v-card-title>
              <v-card-text class="pt-6">
                <p>ソフトウェア研究会は、自ら考え、チームで協力して様々な活動を行う研究会です。</p>
                <p>プログラミングコンテストへの参加、ゲーム制作、電子工作、イラストなど、幅広い活動を行っています。</p>
                <p>モノづくりがスキな高専生が集まっているからこそ、無限大の可能性と多様性に富んだプロジェクトを実現しています！</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      
      <!-- WORKS -->
      <v-container>
        <h2 id="works" class="text-h2 py-4">WORKS</h2>
        <v-row justify="center">
          <v-col v-for="item in workList" :key="item.title" cols="12" sm="8" md="5">
            <v-card color="primary">
              <v-img class="align-end text-white" height="200" :src="item.image" cover>
                <v-card-title style="font-weight: bold;">{{ item.title }}</v-card-title>
              </v-img>
              <v-card-subtitle class="pt-4">{{ item.subTitle }}</v-card-subtitle>
              <v-card-text>{{ item.des }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- MEMBER -->
      <v-container>
        <h2 id="member" class="text-h2 py-4">MEMBER</h2>
        <v-row justify="center">
          <v-col v-for="(item) in memberList" :key="item.title" cols="6" lg="4" class="menber__name-text">
            <p class="menber__name-text-title">{{item.title}}</p>
            <p class="menber__name-text-name">{{item.name}}</p>
          </v-col>
        </v-row>
      </v-container>

      <!-- ACCESS -->
      <v-container class="access">
        <h2 id="access" class="text-h2 py-4">ACCESS</h2>

        <v-row justify="center">
          <h3 class="access-title pa-4">開催場所</h3>
          <v-divider class="access-title pa-4"></v-divider>
        </v-row>

        <v-row class="access-location" justify="center">
          <v-col cols="12" lg="5">
            <p class="access-name py-4">福島工業高等専門学校</p>
            <p>〒970-8034</p>
            <p>福島県いわき市平上荒川字長尾３０</p>
            <v-btn class="my-8" elevation="3" color="primary" width="200px" href="https://www.fukushima-nct.ac.jp/fk_access/access.html">アクセスマップ</v-btn>
          </v-col>
          <v-col cols="12" lg="5" class="access-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1126.0782100199724!2d140.88897363261398!3d37.03292736996434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6021110a3467021f%3A0x1796df6d719fa484!2z56aP5bO25bel5qWt6auY562J5bCC6ZaA5a2m5qCh!5e0!3m2!1sja!2sjp!4v1666827121159!5m2!1sja!2sjp" width="100%" height="100%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </v-col>
        </v-row>


        <v-row justify="center" class="pt-16">
          <h3 class="access-title pa-4">開催教室</h3>
          <v-divider class="access-title pa-4"></v-divider>
        </v-row>

        <v-row class="access-location" justify="center">
          <v-col cols="12" lg="5">
            <p class="access-name py-4">低学年棟 3階</p>  
          </v-col>
          <v-col cols="12" lg="5" class="access-map">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/YUWfX6HnNBs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </v-col>
        </v-row>
      </v-container>

    </v-main>
</template>

<script setup lang="ts">

  /* head設定 */
  useHead({
    title: 'ソフトウェア研究会 | 磐陽祭2022',
  })

  const workList = [
    {
      title: 'VRアート',
      subTitle: '　',
      des: '現実世界と仮想世界がつながる新体験',
      image: '/img/works_vr.webp'
    },
    {
      title: 'LEDアート',
      subTitle: 'Life Born from Digital',
      des: 'デジタルの世界で反応する生命',
      image: '/img/works_led_2.webp'
    },
    {
      title: 'VR展覧会',
      subTitle: '画廊VR',
      des: '過去に制作したデジタルイラストをVR空間に展示',
      image: '/img/works_figure_2.webp'
    },
    {
      title: 'Unityゲーム',
      subTitle: 'ハコピタ',
      des: 'unityを用いたPCゲーム',
      image: '/img/works_game_2.webp'
    },
    {
      title: 'サイバーボランティア',
      subTitle: '　',
      des: '次世代の情報セキュリティ技術',
      image: '/img/works_cyber.webp'
    },
    {
      title: 'PCあるある',
      subTitle: 'あなたもあるかも？PCあるある',
      des: '一度は経験したトラブルと役立つ知識を紹介',
      image: '/img/works_pc.webp'
    }
  ];
  const memberList = [
    { title: 'VRアート', name: '佐藤 龍熙' },
    { title: 'LEDアート', name: '岸本 篤' },
    { title: 'VR展覧会', name: '荒井 宥希' },
    { title: 'Unityゲーム', name: '田巻 斗睦' },
    { title: 'サイバーボランティア', name: '國谷 幸平' },
    { title: 'PCあるある', name: '井上 優汰' },
    { title: 'スタッフ', name: '中本 怜恩' },
    { title: 'スタッフ', name: '松本 蒼矢' },
    { title: 'スタッフ', name: '蛭田 匡祐' },
    { title: 'スタッフ', name: '吉野 優太' },
    { title: 'スタッフ', name: '髙萩 諒' }
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
  margin-top: 10%;
  margin-bottom: 10%;

  @include pc {
    max-width: 80%;
  }

  // 章タイトル
  .text-h2 {
    padding-bottom: 10% !important;
    font-size: 2em !important;
    letter-spacing: 0.1em !important;
    font-family: 'Space Grotesk', sans-serif !important;
    text-align: center;

    @include pc {
     font-size: 3em !important;
    }

    &::first-letter {
      font-size: 1.5em;
      color: $primary;
    }
  }
}

/* ABOUT */
.about {
  padding: 0;


  @include pc {
    padding: 50px 30px;
  }

  .v-card-title {
    text-align: center;
    font-size: 1.3em;

    @include pc {
      font-size: 1.5em;
    }
  }
  .v-card-text {
    line-height: 30px;
    font-size: 1em;

    @include pc {
      line-height: 50px;
      font-size: 1.3em;
    }

    p {
      padding: 10px 0;

      @include pc {
        padding: 0;
      }
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
    font-size: 1.5em;
  }

  &-title {
    color: $primary;
    font-size: .7em;
  }
}

/* ACCESS */
.access {
  .access-title {
    font-size: 1.2em;

    @include pc {
     font-size: 1.5em;
    }
  }
  .access-location {

    .access-map {
      height: 300px;

      @include pc {
        height: 400px;
      }
    }

    .access-name {
      font-size: 1.2em;
      font-weight: 700;

      @include pc {
       font-size: 1.3em;
      }
    }
  }
}
</style>
