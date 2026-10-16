import axios from "axios";
import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    const isAuthCall = /\/auth\/(login|me|logout)\/?$/.test(error.config?.url ?? "");

    if (error.response?.status === 401 && !isAuthCall) {
      queryClient.setQueryData(["me"], null);
    }
    return Promise.reject(error);
  }
);

export default apiClient;