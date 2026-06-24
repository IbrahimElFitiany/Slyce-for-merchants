import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  withCredentials: true,
});


apiClient.interceptors.request.use((config) => {
  return config;
});


apiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default apiClient;