import { ElButton } from 'element-plus';
import { createApp } from 'vue'
import App from './App'
const app = createApp(App);
app.use(ElButton);
app.mount('#app');
