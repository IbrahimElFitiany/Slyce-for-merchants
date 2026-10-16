import { Link } from "react-router-dom";
import useLoginPage from "../hooks/useLoginPage";
import { EmailField } from "../components/EmailField";
import { PasswordField } from "../components/PasswordField";


function LoginPage() {

  const {
    register,
    errors,
    handleSubmit,
    onGoogleSignIn,
    loginMutation:{
      isPending,
      isError,
    },
  } = useLoginPage()

  return (
    <div className="flex flex-col h-screen w-screen px-4 lg:flex-row lg:px-0"
    >
      {/* visuals */}
      <section className="hidden lg:flex flex-col justify-center items-center lg:w-1/2 text-brand-black  p-4">


        <div className=" flex justify-center m-4 w-full h-full overflow-hidden border-1 border-brand-grey rounded-2xl">
          <img src="/images/loginPage.jpg"
            className="object-cover"
          />
        </div>

      </section>

      {/* login section */}
      <section className="flex flex-col items-center lg:w-1/2 bg-whitebg  text-brand-black">

        <div className="flex flex-col w-full max-w-lg my-10 gap-y-10">

          <header className="flex items-center">

            <img
              src="/images/greenLogo.png"
              className="size-13 -ml-3"
            />

            <span className="text-lg font-bold text-accent">For merchant</span>

          </header>

          {/* form & forgot password */}
          <form
            noValidate={true}
            onSubmit={handleSubmit}
            className="w-full space-y-6"
          >
            <header className="flex flex-col gap-y-0.5">
              <h2 className="text-4xl font-bold">Welcome Back!</h2>
              <span className="text-text-grey text-lg font-medium">Login to you
                <span className="text-brand-black font-semibold"> Slyce </span>
                account
              </span>
            </header>

            {/* inputs */}
            <div className="flex flex-col gap-y-3">

              {/* TODO: will do proper error handling */}
              {isError && (
                <div className="text-base font-medium text-center text-red-400">
                  Incorrect email or password.
                </div>
              )}

              <EmailField
                registration={register("email")}
                error={errors.email?.message}
                disabled={isPending}
              />

              <PasswordField
                registration={register("password")}
                error={errors.password?.message}
                disabled={isPending}
              />

            </div>



            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:scale-101 hover:brightness-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? "Logging in..." : "Log In"}
            </button>

            <div className="text-right">
              <Link
                to="/reset-password"
                onClick={(e) => {
                  if (isPending) e.preventDefault();
                }}
                className={`text-accent text-sm font-semibold ${isPending && "cursor-not-allowed opacity-50"}`}
              >
                Forgot password?
              </Link>
            </div>

          </form>

          {/* separator */}
          <div className="flex gap-x-1 items-center">
            <div className="border-b-1 border-brand-grey w-full"></div>
            <h5 className="mx-2 select-none">or</h5>
            <div className="border-b-1 border-brand-grey w-full"></div>
          </div>

          {/* other ways to login */}
          <div>

            <button
              className="w-full py-3 rounded-full font-semibold border-1 border-brand-grey cursor-pointer
              disabled:cursor-not-allowed
              "
              disabled={isPending}
              onClick={onGoogleSignIn}
            >
              Sign in with Google
            </button>

          </div>

          {/* no account ?  */}
          <div className="flex gap-x-1.5 justify-center text-sm font-semibold">
            <span>No account?</span>
            <Link
              to={"/"}
              className={`text-accent font-bold ${isPending && "cursor-not-allowed"}`}
              onClick={(e) => {
                if (isPending) e.preventDefault();
              }}
            >
              Partner with Slyce
            </Link>
          </div>

        </div>

      </section>
    </div>
  );
}

export default LoginPage;