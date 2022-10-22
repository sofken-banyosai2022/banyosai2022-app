<template>
  <div>
    <pre>{{ id }}</pre>
  </div>
</template>

<script setup lang="ts">
  import FingerprintJS from '@fingerprintjs/fingerprintjs'

  /* レイアウト設定 */
  definePageMeta({
    layout: "none"
  });

  /* グローバル変数 */
  const id = ref();

  /* マウント時 */
  onMounted(async () => {

    // FingerprintJS
    const fpPromise = FingerprintJS.load(); // 初期化

    (async () => {
      const fp = await fpPromise;
      const result = await fp.get();

      console.log(result.visitorId); // ログ出力
      id.value = result.visitorId; // ページを更新
    })()
  })
</script>
