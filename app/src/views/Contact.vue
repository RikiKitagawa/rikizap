<template>
  <v-container class="py-12" style="max-width: 600px;">
    <h1 class="text-h4 font-weight-bold mb-2">ご依頼・ご質問</h1>
    <div class="custom-green-bg mb-6" style="width: 50px; height: 3px;"></div>
    <p class="text-body-1 text-grey-darken-1 mb-8">
      ご依頼やご質問はこちらからお気軽にお問い合わせください。
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

      <!-- お問い合わせ種別（カスタムラジオボタン） -->
      <div class="mb-6">
        <div class="text-subtitle-2 font-weight-bold text-grey-darken-3 mb-2">
          お問い合わせ種別
        </div>
        
        <div class="d-flex">
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

      <!-- お問い合わせ内容 -->
      <v-textarea
        v-model="message"
        :label="category === 'request' ? 'ご依頼内容' : 'ご質問内容'"
        :rules="messageRules"
        required
        variant="outlined"
        rows="5"
        class="mb-6"
      ></v-textarea>

      <!-- 送信ボタン -->
      <v-btn
        :disabled="!valid"
        size="large"
        block
        type="submit"
        class="font-weight-bold text-black custom-green-btn"
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

const valid = ref(false)
const category = ref('request')
const name = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)

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

const submitForm = () => {
  if (valid.value) {
    console.log('【お問合せデータ】', {
      種別: category.value === 'request' ? 'ご依頼' : 'ご質問',
      お名前: name.value,
      メールアドレス: email.value,
      内容: message.value,
      日時: new Date().toLocaleString()
    })

    submitted.value = true
    
    name.value = ''
    email.value = ''
    message.value = ''
    category.value = 'request'
  }
}
</script>

<style scoped>
.custom-green-bg {
  background-color: #6acc99 !important;
}

.custom-green-btn {
  background-color: #6acc99 !important;
}

/* ラジオボタンのカスタムスタイル */
.custom-radio-label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  user-select: none;
}

.custom-radio-input {
  display: none;
}

.radio-circle {
  width: 20px;
  height: 20px;
  border: 2px solid #757575;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  background-color: #fff;
}

.custom-radio-input:checked + .radio-circle {
  border-color: #6acc99;
}

.custom-radio-input:checked + .radio-circle::after {
  content: '';
  width: 10px;
  height: 10px;
  background-color: #6acc99;
  border-radius: 50%;
}
</style>