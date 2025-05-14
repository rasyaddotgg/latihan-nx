import './styles.css';
import router from './router';
import { createApp } from 'vue';
import App from './app/App.vue';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { createPinia } from 'pinia';

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.use(createPinia());
app.use(VueQueryPlugin);
app.mount('#root');
