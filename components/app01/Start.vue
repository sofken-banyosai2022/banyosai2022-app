<template>
  <div v-show="show" :class="start">

    <v-container class="start_inner" fluid>
      <h1 class="my-16">ようこそ光と闇の展へ</h1>
      <v-btn class="pa-4" color="#0072f3" elevation="3" rounded x-large block @click="startBtnClick">Start</v-btn>
    </v-container>

    <div class="start_bg">
      <video class="start_video" poster="/img/app01_start.webp" webkit-playsinline playsinline muted autoplay loop>
        <source src="/video/app01_start.mp4" type="video/mp4">
      </video>
    </div>

  </div>
</template>

<script setup lang="ts">
  import FingerprintJS from '@fingerprintjs/fingerprintjs';

  /* グローバル変数 */
  const time = 1000;
  const start = ref('start');
  const show = ref(true);

  /* Firebaseの型 */
  type data = {
    result: object[];
  };

  /* ボタンが押されたとき */
  const startBtnClick = () => {
    start.value = 'start hidden'; // startを透過
    sendData(); // サーバにデータを送信

    setTimeout(() => {
      show.value = false; // startを非表示
    }, time);
  };

  /* サーバにデータを送信 */
  const sendData = async () => {
    const visitorId = await getVisitorId(); // Fingerprint
    const result: data = await $fetch(`/api/query?col=users&id=${visitorId}`); // Firebaseデータ取得

    // 登録済みか判定
    if (result.result.length) {

      // Firebaseデータ更新
      await $fetch(`/api/update?col=users&id=${result.result[0]['id']}`, {
        method: "POST",
        body: {},
      });

      console.log('logged in!');
    } else {
      const nameData: data = await $fetch('/api/query?col=users'); // Firebase名前取得
      let number = Number(nameData.result[0]['name'].substring(2)); // id番号

      number++; // 次の番号にする

      const name = `id${('000' + number).slice(-3)}`; // 'id000'の型にする

      // Firebaseデータ追加
      await $fetch("/api/add?col=users", {
        method: "POST",
        body: {
          name: name,
          visitorId: visitorId
        },
      });

      console.log('Welcome!');
    }
  };

  /* Fingerprint */
  const getVisitorId = async () => {
    const fpPromise = FingerprintJS.load(); // 初期化
    const fp = await fpPromise;
    const result = await fp.get();

    return result.visitorId;
  };
</script>

<style lang="scss" scoped>
.start {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  transition: opacity 1s;
  z-index: 10000;

  .start_inner {
    top: 50%;
    left: 50%;
    text-align: center;
    position: absolute;
    max-width: 500px;
    transform: translateY(-50%) translateX(-50%);
    z-index: 1;
  }
  .start_bg {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #000;

    .start_video {
      top: 50%;
      left: 50%;
      position: absolute;
      transform: translateX(-50%) translateY(-50%);
      min-width: 100%;
      min-height: 100%;
      opacity: .5;
    }
  }
}

.start.hidden {
  opacity: 0;
}
</style>
