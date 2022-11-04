<template>

  <!-- スタート画面 -->
  <App01Start />

  <!-- メイン -->
  <v-main>

    <!-- メインビジュアル -->
    <section class="main_visual">
      <v-container class="main_visual__content" fluid>
        <h2 id="works" class="text-h4 py-4">入場完了</h2>
        <!-- <v-row justify="center">
          <v-col v-for="item in workList" :key="item.title" cols="12" sm="8" md="5">
            <v-card color="#0072f3" @click="onClickBtn">
              <v-img class="align-end text-white" height="200" :src="item.image" cover>
                <v-card-title style="font-weight: bold;">{{ item.title }}</v-card-title>
              </v-img>
              <v-card-subtitle class="pt-4">{{ item.subTitle }}</v-card-subtitle>
              <v-card-text>{{ item.des }}</v-card-text>
            </v-card>
          </v-col>
        </v-row> -->
      </v-container>
    </section>

  </v-main>
</template>

<script setup lang="ts">

  /* head設定 */
  useHead({
    title: 'アプリ | ソフトウェア研究会 | 磐陽祭2022',
  });


  /* レイアウト設定 */
  definePageMeta({
    layout: 'app01'
  });

  const workList = [
    {
      title: '花火',
      subTitle: '　',
      des: '花火を打ち上げる',
      image: '/img/app01_fireworks.jpg'
    }
  ];

  const onClickBtn = () => {
    sendData();
  };

  /* サーバにデータを送信 */
  const sendData = async () => {

    // Firebaseデータ更新
    await $fetch('/api/update?col=server&id=interactive', {
      method: "POST",
      body: {
        s1b1: true
      },
    });

    setTimeout(async () => {
      // Firebaseデータ更新
      await $fetch('/api/update?col=server&id=interactive', {
        method: "POST",
        body: {
          s1b1: false
        },
      });
    
    }, 3000);
  };

</script>
