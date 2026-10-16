import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../services/authServices";
import type { LoginForm } from "../schemas/loginPayloadSchema";

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (credentials: LoginForm) => login(credentials),
    onSuccess: (user) => {
      queryClient.setQueryData(["me"], user);
    },
  });
}