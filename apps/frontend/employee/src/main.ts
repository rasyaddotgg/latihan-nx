import './styles.css';
import router from './router';
import { createApp } from 'vue';
import App from './app/App.vue';
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia';

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(createPinia());
app.mount('#root');
