import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Vue Router 인스턴스 임포트

const app = createApp(App);
app.use(router); // 라우터 사용 설정
app.mount('#app');

