// import 'bootstrap/dist/css/bootstrap.min.css';
import 'vue-toastification/dist/index.css';
import 'vue-awesome-paginate/dist/style.css';
import './styles/global.scss';

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia';
import { createApiService } from '@/services/api';

import App from './App.vue';
import router from './router';
import primeVuePreset from './libs/primeVuePreset';
import { msal } from './libs/msal';
import VueAwesomePaginate from 'vue-awesome-paginate';

import ToastService from 'primevue/toastservice';
import Toast from 'vue-toastification';

const app = createApp(App);

// Create an instance of the API service and inject it globally
const apiService = new createApiService();
app.provide('apiService', apiService);

//Toast styles
const options = {
  position: 'top-center',
  draggable: true,
  hideProgressBar: true,
  closeButton: false,
  maxToasts: 2,
  newestOnTop: true,
  icon: false,
  rtl: true
};

app.use(PrimeVue, {
  // unstyled: true
  theme: {
    preset: primeVuePreset,
    options: {
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities'
      },
      darkModeSelector: '.my-dark',
      darkMode: false
    }
  }
});
await msal.initialize();
app.use(createPinia());
app.use(ToastService);
app.use(router);
app.use(Toast, options);
app.use(VueAwesomePaginate);
app.mount('#app');
