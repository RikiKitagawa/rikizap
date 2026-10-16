<template>
  <v-app>
    <!-- ヘッダー（上部バー） -->
    <v-app-bar color="black" flat>
      <v-app-bar-title class="font-weight-bold">
        <span class="custom-green-text">RIKI</span>ZAP
      </v-app-bar-title>
      <template v-slot:append>
        <!-- ページを切り替えるリンク -->
        <v-btn to="/" class="text-white">ホーム</v-btn>
        <v-btn to="/contact" class="text-white">ご依頼・ご質問</v-btn>
      </template>
    </v-app-bar>

    <!-- メインコンテンツ領域 -->
    <v-main>
      <router-view />
    </v-main>

    <!-- フッター -->
    <v-footer app class="text-center d-flex flex-column text-grey-lighten-1" color="grey-darken-4">
      <div>&copy; 2026 RIKIZAP. All rights reserved.</div>
    </v-footer>
  </v-app>
</template>

<script setup>
// Composition API
</script>

<style scoped>
.custom-green-text {
  color: #6acc99 !important;
}
</style>