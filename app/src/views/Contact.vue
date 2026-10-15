<template>
  <v-container class="py-8" style="max-width: 600px;">
    <h1 class="text-h4 font-weight-bold mb-4">ご依頼・ご質問</h1>
    <p class="text-body-1 text-grey-darken-1 mb-6">
      ご依頼やご質問はこちらからお気軽にお問い合わせください。<br>現在、新規のwebサービス作成依頼は受けておりませんのでご注意ください。
    </p>

    <!-- フォーム部分 -->
    <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
      
      <!-- お名前 -->
      <v-text-field
        v-model="name"
        label="お名前"
        :rules="nameRules"
        required
        variant="outlined"
        class="mb-2"
      ></v-text-field>

      <!-- メールアドレス -->
      <v-text-field
        v-model="email"
        label="メールアドレス"
        :rules="emailRules"
        required
        variant="outlined"
        type="email"
        class="mb-4"
      ></v-text-field>

      <!-- ▼ お問い合わせ種別（見やすくしたカスタムラジオボタンエリア） ▼ -->
      <div class="mb-6">
        <!-- 文字色をしっかり見やすい濃いグレー（または調整した色）に変更 -->
        <div class="text-subtitle-2 font-weight-bold text-grey-darken-3 mb-2">
          お問い合わせ種別
        </div>
        
        <div class="d-flex gap-6">
          <label class="custom-radio-label mr-6">
            <input type="radio" v-model="category" value="request" class="custom-radio-input" />
            <span class="radio-circle"></span>
            <span class="font-weight-medium">ご依頼</span>
          </label>
          
          <label class="custom-radio-label">
            <input type="radio" v-model="category" value="question" class="custom-radio-input" />
            <span class="radio-circle"></span>
            <span class="font-weight-medium">ご質問</span>
          </label>
        </div>
      </div>

      <!-- お問い合わせ内容（選択によってラベルが切り替わります） -->
      <v-textarea
        v-model="message"
        :label="category === 'request' ? 'ご依頼内容' : 'ご質問内容'"
        :rules="messageRules"
        required
        variant="outlined"
        rows="5"
        class="mb-4"
      ></v-textarea>

      <!-- 送信ボタン -->
      <v-btn
        :disabled="!valid"
        color="amber-darken-2"
        size="large"
        block
        type="submit"
        class="font-weight-bold text-black"
      >
        送信する
      </v-btn>
    </v-form>

    <!-- 送信完了メッセージ -->
    <v-snackbar v-model="submitted" color="success" timeout="3000">
      お問い合わせを受け付けました。ありがとうございます！
    </v-snackbar>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

// 入力データ
const valid = ref(false)
const category = ref('request') // 初期値は 'request'（ご依頼）
const name = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)

// 入力チェック（バリデーションルール）
const nameRules = [
  v => !!v || 'お名前を入力してください'
]
const emailRules = [
  v => !!v || 'メールアドレスを入力してください',
  v => /.+@.+\..+/.test(v) || '有効なメールアドレスを入力してください'
]
const messageRules = [
  v => !!v || '内容を入力してください'
]

// 送信処理
const submitForm = () => {
  if (valid.value) {
    submitted.value = true
    
    // フォームのリセット
    name.value = ''
    email.value = ''
    message.value = ''
    category.value = 'request'
  }
}
</script>

<style scoped>
/* ── ラジオボタンのカスタムスタイル ── */
.custom-radio-label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  user-select: none;
}

/* 元の標準ラジオボタンを隠す */
.custom-radio-input {
  display: none;
}

/* 外側の丸（円） */
.radio-circle {
  width: 20px;
  height: 20px;
  border: 2px solid #757575; /* 枠線の色 */
  border-radius: 50%;
  margin-right: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  background-color: #fff;
}

/* 選択された（checked）ときの外側と内側の塗りつぶし表現 */
.custom-radio-input:checked + .radio-circle {
  border-color: #ffa000; /* RIZAP風のアンバー・オレンジ系カラー */
}

/* 選択されたときに中身をポチッと塗りつぶす円 */
.custom-radio-input:checked + .radio-circle::after {
  content: '';
  width: 10px;
  height: 10px;
  background-color: #ffa000;
  border-radius: 50%;
}
</style>