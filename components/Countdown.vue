<template>
  <div class="countdown pa-16">
    <p class="countdown-text">開幕まであと</p>
    <p class="countdown-time">{{ day }}日</p>
    <p class="countdown-time">{{ hour }}:{{ min }}:{{ sec }}</p>
  </div>
</template>

<script setup lang="ts">
  const day = ref('0');
  const hour = ref('0');
  const min = ref('0');
  const sec = ref('0');

  onMounted(() => {

    /* カウントダウン */
    const countdown = setInterval(() => {
      const now = new Date();  // 今の日時
      const target = new Date(2022, (11 - 1), 5, 10); // ターゲット日時
      const diff = target.getTime() - now.getTime(); // 差分を計算

      const calcDay = Math.floor(diff / (1000 * 60 * 60 * 24));
      const calcHour = Math.floor(diff / (1000 * 60 * 60 )) % 24;
      const calcMin = Math.floor(diff / (1000 * 60)) % 60;
      const calcSec = Math.floor(diff / 1000) % 60;

      day.value = String(calcDay);
      hour.value = calcHour < 10 ? '0' + calcHour : String(calcHour);
      min.value = calcMin < 10 ? '0' + calcMin : String(calcMin);
      sec.value = calcSec < 10 ? '0' + calcSec : String(calcSec);

      // 指定日時以降にカウント停止
      if (diff < 0) {
        clearInterval(countdown);
        day.value = '0';
        hour.value = '0';
        min.value = '0';
        sec.value = '0';
      }

    }, 1000);
  })
</script>

<style lang="scss" scoped>

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

.countdown {
  text-align: center;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  color: #fff;
  background: url("/img/countdown_bg.webp");
  background-size: cover;
  background-position: center center;

  @include pc {
    background-attachment: fixed;
  }

  &-text {
    font-size: 1em;

    @include pc {
      font-size: 2em;
    }
  }
  &-time {
    font-size: 2em;

    @include pc {
      font-size: 5em;
    }
  }
}
</style>
