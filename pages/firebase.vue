<template>
  <div>
    <pre>{{ pages }}</pre>
  </div>
</template>

<script setup lang="ts">

  /* レイアウト設定 */
  definePageMeta({
    layout: "none"
  });

  /* Firebaseの型 */
  type data = {
    result: object[];
  };

  /* グローバル変数 */
  const pages = ref();

  /* マウント時 */
  onMounted(async () => {

    // Firebaseデータ取得
    const result: data = await $fetch("/api/query?col=users");

    // Firebaseデータ追加
    // await $fetch("/api/add?col=users", {
    //   method: "POST",
    //   body: {
    //     first: "Alan",
    //     middle: "Mathison",
    //     last: "Turing",
    //     born: 1912
    //   },
    // });

    // Firebaseデータ削除
    // const result: data = await $fetch("/api/delete?col=users&id=user");

    console.log(result); // ログ出力
    pages.value = result; // ページを更新
  })
</script>
