import { Auth } from '@/libs/msal';
import axios from 'axios';
import { watchEffect } from 'vue';
const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_ENDPOINT}`
});
const useAxios = () => {
  watchEffect((onCleanup) => {
    const requestIntercept = api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('accessToken');

        config.headers['Authorization'] = `Bearer ${token}`;
        return config;
      },
      (err) => Promise.reject(err)
    );

    const responseIntercept = api.interceptors.response.use(
      (response) => response,
      async (err) => {
        const prevReq = err?.config;
        if (err?.response?.status === 401 && !prevReq?.sent) {
          prevReq.sent = true;
          await Auth.getToken();
          return api(prevReq);
        }
        // if (err?.response?.status === 401 && prevReq?.sent) {
        //   await Auth.logout();
        // }
        return Promise.reject(err);
      }
    );
    onCleanup(() => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    });
  });
  return api;
};

export default useAxios;
