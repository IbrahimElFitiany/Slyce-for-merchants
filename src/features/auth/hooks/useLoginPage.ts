import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginForm } from "../schemas/loginPayloadSchema";
import { useLogin } from "./useLogin";


function useLoginPage() {

  const { mutate, isPending, isError, error } = useLogin();

  const {register, formState, handleSubmit} = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
    defaultValues: { email: "", password: "" },
  });


  const onGoogleSignIn = () => {
    console.log("not implemented yet");
  };

  return {
    register,
    errors: formState.errors,
    handleSubmit: handleSubmit((values) => mutate(values)),
    onGoogleSignIn,
    loginMutation: {
      isPending,
      isError,
      mutationError: error },
  };
}

export default useLoginPage;