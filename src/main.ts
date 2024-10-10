import 'virtual:uno.css';
import 'element-plus/dist/index.css';
import '@/styles/theme.scss';
import '@/styles/index.scss';

import { createApp } from 'vue';
import App from './App.vue';
import { setupStore } from '@/store';
import { setupRouter } from '@/router';
import { conponentIconPlugins } from '@/plugins/icon';

async function bootstrap() {
  const app = createApp(App);

  // 配置 store
  setupStore(app);
  // 配置路由
  setupRouter(app);
  // 注册全局 icon 组件
  app.use(conponentIconPlugins);
  app.mount('#app');
}

bootstrap();
