<template>
  <div>
    <!-- ① ファーストビュー（一番上のメインビジュアル） -->
    <v-sheet
      color="black"
      class="d-flex align-center justify-center text-center py-16"
      style="min-height: 70vh;"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <span class="text-amber text-subtitle-1 font-weight-bold tracking-widest">
              「結果」と「ギット」にコミットする。
            </span>
            <h1 class="text-h2 text-md-h1 font-weight-black text-white my-4">
              あなたを変える、<br>最高のwebサービス。
            </h1>
            <p class="text-grey-lighten-1 text-body-1 mb-8">
              RIKIZAPはあなたの希望に合わせたwebサービスの実現に協力します。
            </p>
            <v-btn
              color="amber-darken-2"
              size="x-large"
              class="text-black font-weight-bold px-8"
              to="/contact"
            >
              お仕事の依頼はこちら
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- ② 特徴セクション -->
    <v-container class="py-16">
      <div class="text-center mb-12">
        <h2 class="text-h4 font-weight-bold mb-2">RIKIZAPが選ばれる3つの理由</h2>
        <div class="mx-auto bg-amber" style="width: 60px; height: 3px;"></div>
      </div>

      <v-row>
        <!-- 特徴1 -->
        <v-col cols="12" md="4">
          <v-card class="mx-auto h-100 pa-4 text-center" elevation="2">
            <v-icon icon="mdi-account-supervisor" size="64" class="text-amber-darken-2 mb-4"></v-icon>
            <v-card-title class="font-weight-bold">専属チーム</v-card-title>
            <v-card-text class="text-grey-darken-1">
              あなた専用のwebサービス専用チームがあなたのwebサービス構築へ徹底サポート。
            </v-card-text>
          </v-card>
        </v-col>

        <!-- 特徴2 -->
        <v-col cols="12" md="4">
          <v-card class="mx-auto h-100 pa-4 text-center" elevation="2">
            <v-icon icon="mdi-food-apple" size="64" class="text-amber-darken-2 mb-4"></v-icon>
            <v-card-title class="font-weight-bold">向上心</v-card-title>
            <v-card-text class="text-grey-darken-1">
              お客様の声を真摯に受け止め、日々、サービス、技術力の向上をします。
            </v-card-text>
          </v-card>
        </v-col>

        <!-- 特徴3 -->
        <v-col cols="12" md="4">
          <v-card class="mx-auto h-100 pa-4 text-center" elevation="2">
            <v-icon icon="mdi-shield-check" size="64" class="text-amber-darken-2 mb-4"></v-icon>
            <v-card-title class="font-weight-bold">完全秘密厳守</v-card-title>
            <v-card-text class="text-grey-darken-1">
              お客様のプライバシーを遵守し集中できる、完全秘密厳守のサポートをご用意します。
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
// 現時点では動き（ロジック）はないので空っぽでOKです
</script>