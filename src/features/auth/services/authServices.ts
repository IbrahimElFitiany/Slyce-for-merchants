import apiClient from "@/services/apiClient";
import type { LoginPayload } from "./authServices.dto";
import { isAxiosError } from "axios";
import type { User } from "../types.domain";


export async function login(payload: LoginPayload): Promise<User> {
  const res = await apiClient.post<User>("auth/login", payload);
  return res.data;
}

export async function logout(): Promise<void> {
  await apiClient.post("/auth/logout");
}

export async function refresh():Promise <void> {
  await apiClient.post("auth/refresh");
}

export async function getMe(): Promise<User | null> {
  try {
    const { data } = await apiClient.get<User>("auth/me");
    return data;
  }
  catch (err) {
    if (isAxiosError(err) && err.response?.status === 401) return null;
    throw err;
  }
}

export async function resetPassword(email:string): Promise<void> {
  await apiClient.post("auth/reset-password", email )
}