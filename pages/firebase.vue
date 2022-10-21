<template>
  <div>
    <pre>{{ pages }}</pre>
  </div>
</template>

<script setup lang="ts">

  /* Firebaseの型 */
  type data = {
    result: object[];
  };

  /* グローバル変数 */
  const pages = ref();

  /* マウント時 */
  onMounted(async () => {
    const result: data = await $fetch("/api/query?col=users"); // Firebaseデータ取得

    console.log(result); // ログ出力
    pages.value = result; // ページを更新
  })
</script>
