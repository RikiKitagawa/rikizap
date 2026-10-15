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
              結果にコミットする。
            </span>
            <h1 class="text-h2 text-md-h1 font-weight-black text-white my-4">
              人生を変える、<br>最後のボディメイク。
            </h1>
            <p class="text-grey-lighten-1 text-body-1 mb-8">
              RIZAPは、あなたの専属トレーナーが科学的なアプローチで理想の肉体へと導くパーソナルジムです。
            </p>
            <v-btn
              color="amber-darken-2"
              size="x-large"
              class="text-black font-weight-bold px-8"
              to="/contact"
            >
              無料カウンセリングを予約する
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
            <v-card-title class="font-weight-bold">専属トレーナー制</v-card-title>
            <v-card-text class="text-grey-darken-1">
              プロのトレーナーがあなた専用のプログラムを組み、二人三脚で目標達成まで伴走します。
            </v-card-text>
          </v-card>
        </v-col>

        <!-- 特徴2 -->
        <v-col cols="12" md="4">
          <v-card class="mx-auto h-100 pa-4 text-center" elevation="2">
            <v-icon icon="mdi-food-apple" size="64" class="text-amber-darken-2 mb-4"></v-icon>
            <v-card-title class="font-weight-bold">正しい食事管理</v-card-title>
            <v-card-text class="text-grey-darken-1">
              「食べないダイエット」ではなく、一生モノの正しい食習慣が身につく食事指導を行います。
            </v-card-text>
          </v-card>
        </v-col>

        <!-- 特徴3 -->
        <v-col cols="12" md="4">
          <v-card class="mx-auto h-100 pa-4 text-center" elevation="2">
            <v-icon icon="mdi-shield-check" size="64" class="text-amber-darken-2 mb-4"></v-icon>
            <v-card-title class="font-weight-bold">完全個室の環境</v-card-title>
            <v-card-text class="text-grey-darken-1">
              周囲の目を気にせずトレーニングに集中できる、完全プライベートな空間をご用意しています。
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