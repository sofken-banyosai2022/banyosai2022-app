<template>
  <div v-show="show" :class="start">

    <div class="start_inner">
      <h1>ようこそ光と闇の展へ</h1>
      <v-btn color="primary" elevation="3" rounded x-large block @click="startBtnClick">Start</v-btn>
    </div>

    <div class="start_bg">
      <video class="start_video" poster="/img/app01_start.webp" webkit-playsinline playsinline muted autoplay loop>
        <source src="/video/app01_start.mp4" type="video/mp4">
      </video>
    </div>

  </div>
</template>

<script setup lang="ts">

  /* グローバル変数 */
  const time = 1000;
  const start = ref('start');
  const show = ref(true);

  /* ボタンが押されたとき */
  const startBtnClick = () => {
    start.value = 'start hidden'; // startを透過

    setTimeout(() => {
      show.value = false; // startを非表示
    }, time);
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
    position: absolute;
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
