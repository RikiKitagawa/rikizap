<template>
  <v-app>
    <!-- ヘッダー（上部バー） -->
    <v-app-bar color="black" flat>
      <v-app-bar-title>RIKIZAP.COM</v-app-bar-title>
      <template v-slot:append>
        <!-- ページを切り替えるリンク（vue-routerの機能：to="..."でパスを指定） -->
        <v-btn to="/" text>ホーム</v-btn>
        <v-btn to="/contact" text>お問い合わせ</v-btn>
      </template>
    </v-app-bar>

    <!-- メインコンテンツ領域 -->
    <v-main>
      <!-- ★ここにURLに合わせたビュー（HomeやContact）が切り替わって表示されます -->
      <router-view />
    </v-main>

    <!-- フッター -->
    <v-footer app class="text-center d-flex flex-column" color="grey-darken-4">
      <div>&copy; 2026 RIKIZAP. All rights reserved.</div>
    </v-footer>
  </v-app>
</template>

<script setup>
// Composition API の場合は特に書かなくても動きます
</script>