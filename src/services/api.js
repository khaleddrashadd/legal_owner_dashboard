// import axios from 'axios';
// import CheckTokenExp from '@/helper/checkTokenExp.js';

import useAxios from '@/composables/useAxios';

// import { useToast } from 'vue-toastification';
// const toast = useToast();

// const api = axios.create({
//   baseURL: `${import.meta.env.VITE_API_ENDPOINT}`
// });

// api.interceptors.request.use((config) => {
//   const token = CheckTokenExp();

//   token ? (config.headers.Authorization = `Bearer ${token}`) : null;

//   return config;
// });

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (!error.response) {
//       toast.error('فشل الوصول للسيرفر');
//     }

//     return Promise.reject(error);
//   }
// );

export function createApiService() {
  const httpClient = useAxios();

  return {
    async getData(endpoint, data) {
      const response = await httpClient.get(endpoint, data);
      return response.data;
    },

    async postData(endpoint, data) {
      const response = await httpClient.post(endpoint, data);
      return response.data;
    }
  };
}

// export default api;
