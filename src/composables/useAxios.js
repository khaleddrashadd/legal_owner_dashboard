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
        let token = localStorage.getItem('accessToken');
        token =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmMTgyNWRjZS02MGNhLTQ3MGMtYmZkZS0wNThiNzA1NzI3YzgiLCJVc2VySWQiOiI3ZWY0N2EwOC04OTJlLTRkOTgtYjU3Zi1jNzM0NTMzZThhM2IiLCJFbWFpbCI6ImFtcnVzZXI5N0BnbWFpbC5jb20iLCJleHAiOjIxNjc2MzQ1NDgsImlzcyI6IlNlY3VyZUFwaSIsImF1ZCI6IlNlY3VyZUFwaVVzZXIifQ.KSBgkNh0AXre4by8uodBSF4LEpjQU9dA6Qj9JJ9E8iI';
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
