<template>
  <v-container class="py-12" style="max-width: 800px;">
    <!-- 戻るボタン -->
    <v-btn variant="text" prepend-icon="mdi-arrow-left" to="/" class="mb-6 custom-green-text">
      ホームに戻る
    </v-btn>

    <h1 class="text-h3 font-weight-black mb-4">RIKIZAPの特徴について</h1>
    <div class="custom-green-bg mb-8" style="width: 80px; height: 4px;"></div>

    <p class="text-body-1 text-grey-darken-2 mb-8">
      ここでは、私たちが提供するwebサービス構築における徹底的なサポート体制や、技術力向上の仕組みについて詳しく解説します。
    </p>

    <v-card class="pa-6 mb-6" elevation="2">
      <h2 class="text-h5 font-weight-bold mb-3 custom-green-text">専属チームによる徹底伴走</h2>
      <p class="text-body-1 text-grey-darken-1">
        お客様一人ひとりの目標やスキルセットに合わせ、専用のエンジニアチームが完全バックアップ。日々の進捗管理からコードレビューまで、妥協のないサポートを提供します。
      </p>
    </v-card>

    <v-card class="pa-6 mb-6" elevation="2">
      <h2 class="text-h5 font-weight-bold mb-3 custom-green-text">向上心を貫く技術力</h2>
      <p class="text-body-1 text-grey-darken-1">
        常に最新の技術トレンドを取り入れ、モダンで高速なWebアプリケーション開発を実現。お客様のビジネスやアイデアを最高のかたちで具現化します。
      </p>
    </v-card>

    <v-card class="pa-6" elevation="2">
      <h2 class="text-h5 font-weight-bold mb-3 custom-green-text">完全秘密厳守のセキュア環境</h2>
      <p class="text-body-1 text-grey-darken-1">
        機密性の高いプロジェクトでも安心してご依頼いただけるよう、セキュリティとプライバシー遵守を徹底したクローズドな開発環境を構築しています。
      </p>
    </v-card>
  </v-container>
</template>

<script setup>
// 詳細ページのロジック
</script>

<style scoped>
.custom-green-text {
  color: #6acc99 !important;
}

.custom-green-bg {
  background-color: #6acc99 !important;
}
</style>