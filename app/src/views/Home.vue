<template>
  <div>
    <!-- ① ファーストビュー -->
    <v-sheet
      color="black"
      class="d-flex align-center justify-center text-center py-16"
      style="min-height: 70vh;"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <span class="custom-green-text text-subtitle-1 font-weight-bold tracking-widest">
              「結果」と「ギット」にコミットする。
            </span>
            <h1 class="text-h2 text-md-h1 font-weight-black text-white my-4">
              あなたを変える、<br>最高のwebサービス。
            </h1>
            <p class="text-grey-lighten-1 text-body-1 mb-8">
              RIKIZAPはあなたの希望に合わせたwebサービスの実現に協力します。
            </p>
            <v-btn
              color="#6acc99"
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
    <div class="feature-section py-16">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="text-h4 font-weight-bold mb-2 text-white">RIKIZAPが選ばれる3つの理由</h2>
          <div class="mx-auto custom-green-bg" style="width: 60px; height: 3px;"></div>
        </div>

        <v-row>
          <!-- 特徴1：専属チーム -->
          <v-col cols="12" md="4">
            <v-card class="mx-auto h-100 pa-6 text-center feature-card feature-card-1 position-relative" elevation="6">
              <div class="card-overlay pa-4 d-flex flex-column justify-space-between h-100">
                <div>
                  <v-icon icon="mdi-account-supervisor" size="52" class="custom-green-text mb-2"></v-icon>
                  <v-card-title class="font-weight-bold justify-center text-white text-h5">専属チーム</v-card-title>
                  <v-card-text class="text-grey-lighten-2 text-body-2 mb-6">
                    あなた専用のwebサービス専用チームがあなたのwebサービス構築へ徹底サポート
                  </v-card-text>
                </div>
                
                <!-- 右下の丸囲み矢印ボタン -->
                <div class="card-arrow-btn text-right">
                  <v-btn
                    icon="mdi-arrow-right"
                    color="black"
                    size="small"
                    to="/feature"
                    elevation="4"
                    class="arrow-btn-custom"
                  ></v-btn>
                </div>
              </div>
            </v-card>
          </v-col>

          <!-- 特徴2：向上心 -->
          <v-col cols="12" md="4">
            <v-card class="mx-auto h-100 pa-6 text-center feature-card feature-card-2 position-relative" elevation="6">
              <div class="card-overlay pa-4 d-flex flex-column justify-space-between h-100">
                <div>
                  <v-icon icon="mdi-rocket-launch" size="52" class="custom-green-text mb-2"></v-icon>
                  <v-card-title class="font-weight-bold justify-center text-white text-h5">向上心</v-card-title>
                  <v-card-text class="text-grey-lighten-2 text-body-2 mb-6">
                    お客様の声を真摯に受け止め、日々、サービス、技術力の向上をします。
                  </v-card-text>
                </div>
                
                <!-- 右下の丸囲み矢印ボタン -->
                <div class="card-arrow-btn text-right">
                  <v-btn
                    icon="mdi-arrow-right"
                    color="black"
                    size="small"
                    to="/feature"
                    elevation="4"
                    class="arrow-btn-custom"
                  ></v-btn>
                </div>
              </div>
            </v-card>
          </v-col>

          <!-- 特徴3：完全秘密厳守の環境 -->
          <v-col cols="12" md="4">
            <v-card class="mx-auto h-100 pa-6 text-center feature-card feature-card-3 position-relative" elevation="6">
              <div class="card-overlay pa-4 d-flex flex-column justify-space-between h-100">
                <div>
                  <v-icon icon="mdi-shield-check" size="52" class="custom-green-text mb-2"></v-icon>
                  <v-card-title class="font-weight-bold justify-center text-white text-h5">完全秘密厳守の環境</v-card-title>
                  <v-card-text class="text-grey-lighten-2 text-body-2 mb-6">
                    お客様のプライバシーを遵守し集中できる、完全秘密厳守のサポートをご用意します。
                  </v-card-text>
                </div>
                
                <!-- 右下の丸囲み矢印ボタン -->
                <div class="card-arrow-btn text-right">
                  <v-btn
                    icon="mdi-arrow-right"
                    color="black"
                    size="small"
                    to="/feature"
                    elevation="4"
                    class="arrow-btn-custom"
                  ></v-btn>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup>
// ホーム画面のロジック
</script>

<style scoped>
/* 全体の背景 */
.feature-section {
  background-color: #121212;
}

/* カード共通スタイル：高さを持たせる */
.feature-card {
  border-radius: 16px;
  overflow: hidden;
  min-height: 280px;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-6px);
}

/* カード1：専属チーム */
.feature-card-1 {
  background: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80') center/cover no-repeat;
}

/* カード2：向上心 */
.feature-card-2 {
  background: url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80') center/cover no-repeat;
}

/* カード3：完全秘密厳守 */
.feature-card-3 {
  background: url('https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80') center/cover no-repeat;
}

/* 写真の上に黒い半透明を重ねるオーバーレイ */
.card-overlay {
  background: rgba(0, 0, 0, 0.75);
  width: 100%;
}

/* 右下の丸囲み矢印ボタンを固定配置 */
.card-arrow-btn {
  position: absolute;
  bottom: 16px;
  right: 16px;
}

/* 矢印ボタン自体の色調整（#6acc99 を適用） */
.arrow-btn-custom {
  background-color: #000000 !important;
  color: #6acc99 !important;
  border: 2px solid #6acc99 !important;
}

/* カスタムカラー用クラス */
.custom-green-text {
  color: #6acc99 !important;
}

.custom-green-bg {
  background-color: #6acc99 !important;
}
</style>