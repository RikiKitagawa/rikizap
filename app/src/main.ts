import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // ★追加：ルーターをインポート

// Vuetifyのインポート（すでに設定されているもの）
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(router)   // ★追加：ルーターをVueに組み込む
app.use(vuetify)

app.mount('#app')