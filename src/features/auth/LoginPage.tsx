function LoginPage() {
  return (
    <div className="flex h-screen w-screen">

      <div className="w-1/2 bg-whitebg flex flex-col items-center gap-y-25 px-8 font-[InterVariable] text-brand-black">


        <form className="w-full max-w-md space-y-6">

          <div className="flex items-center justify-between w-full py-12">
            <div className="flex items-center">
              <img src="/images/greenLogo.png" alt="" className="size-12"/>
              <span>for Merchant</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold">Welcome Back</h2>
          <h3>Login to your Slyce account </h3>

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />

          <div className="text-right">
            <a href="#" className="text-accent text-sm hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:scale-101 hover:brightness-105 transition-all duration-300"
          >
            Log In
          </button>

          <div className="flex gap-x-1 items-center">
            <div className="border-b-1 border-brand-grey w-full"></div>
            <h5 className="mx-2">or</h5>
            <div className="border-b-1 border-brand-grey w-full"></div>
          </div>


          <button
            type="button"
            className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            Log in with phone number
          </button>
          <button
            type="button"
            className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            Sign in with Google
          </button>
          <p className="text-center text-sm text-gray-600">
            No account? <a href="#" className="text-accent hover:underline">Partner with Slyce</a>
          </p>
        </form>
      </div>

      <div className="w-1/2 text-brand-black flex flex-col justify-center items-center p-4 font-[Intervariable]">

        <div className="m-4 w-full h-full flex justify-center border-1 border-brand-grey bg-[#DBF0DC] rounded-2xl">

          <div className="w-82 flex flex-col justify-center">

            <h2 className="text-2xl font-bold mb-4">
              Grow your kitchen with <span className="text-accent font-extrabold">Slyce</span>
            </h2>

            <ul className="text-[#7B7B7B] w-full flex flex-col space-y-4 text-sm">

              <li className="w-full flex items-start space-x-3">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-white border border-brand-grey">
                  <svg
                    className="w-7 h-7 text-accent"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <title>Stats</title>
                    <path d="M6,4 L18,4 C19.1,4 20,4.9 20,6 L20,18 C20,19.1 19.1,20 18,20 L6,20 C4.9,20 4,19.1 4,18 L4,6 C4,4.9 4.9,4 6,4 Z" />
                    <line x1="8" y1="17" x2="8" y2="11" />
                    <line x1="12" y1="17" x2="12" y2="8" />
                    <line x1="16" y1="17" x2="16" y2="14" />
                  </svg>
                </div>
                <span className="flex">Analyze performance to strengthen customer loyalty and grow revenue.</span>
              </li>

              <li className="w-full flex items-start space-x-3">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-white border border-brand-grey">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  width={20}
                  height={20}
                  fill="#4cb050"
                  viewBox="0 0 512 512"
                >
                  <path d="M461.913 55.652c-23.108 0-42.599 15.733-48.354 37.045L95.587 185.012c-7.936-17.208-25.341-29.186-45.5-29.186C22.469 155.826 0 178.295 0 205.913v100.174c0 27.618 22.469 50.087 50.087 50.087 20.159 0 37.564-11.979 45.5-29.186l37.978 11.026v30.047c0 22.289 14.344 41.569 35.694 47.976l100.174 30.052a50.518 50.518 0 0 0 14.539 2.153c10.585 0 20.95-3.394 29.753-9.943 12.83-9.548 20.188-24.194 20.188-40.185v-1.933l79.646 23.123c5.754 21.313 25.246 37.045 48.354 37.045 27.618 0 50.087-22.469 50.087-50.087V105.739c0-27.618-22.469-50.087-50.087-50.087zM66.783 306.087c0 9.206-7.49 16.696-16.696 16.696s-16.696-7.49-16.696-16.696V205.913c0-9.206 7.49-16.696 16.696-16.696s16.696 7.49 16.696 16.696v100.174zm233.739 92.025c0 5.33-2.453 10.213-6.729 13.394-4.277 3.182-9.659 4.128-14.765 2.598l-100.173-30.052c-7.117-2.136-11.898-8.562-11.898-15.992v-20.352l133.565 38.777v11.627zm111.304-14.083-89.631-26.022-.043-.012-221.978-64.446v-75.097l311.652-90.479v256.056zm66.783 22.232c0 9.206-7.49 16.696-16.696 16.696s-16.696-7.49-16.696-16.696V105.739c0-9.206 7.49-16.696 16.696-16.696s16.696 7.49 16.696 16.696v300.522z" />
                </svg>
                </div>
                <span className="flex">Attract new diners with special offers and advertising.</span>
              </li>

              <li className="w-full flex items-start space-x-3">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-white border border-brand-grey">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="none"
                    stroke="#4cb050"
                    viewBox="0 0 24 24"
                  >
                    <g stroke="4cb050" strokeWidth={1.5}>
                      <circle cx={12} cy={12} r={3} />
                      <path
                        strokeLinecap="round"
                        d="M3.661 10.64c.473.296.777.802.777 1.36s-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.617 1.617 0 0 1 1.567.008c.483.28.77.795.79 1.353.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863.02-.558.307-1.074.79-1.353a1.617 1.617 0 0 1 1.567-.008c.336.178.58.276.82.308a2 2 0 0 0 1.478-.396c.315-.242.548-.646 1.014-1.453.208-.36.369-.639.489-.873m-.81-2.766a1.617 1.617 0 0 1-.777-1.36c0-.559.304-1.065.777-1.362.321-.202.528-.363.676-.555a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.617 1.617 0 0 1-1.566-.008 1.617 1.617 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083C13.398 2 12.932 2 12 2c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.483-.143.863a1.617 1.617 0 0 1-.79 1.353 1.617 1.617 0 0 1-1.567.008c-.336-.178-.58-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7c-.208.36-.369.639-.489.873"
                      />
                    </g>
                  </svg>
                </div>
                <span className="flex">Easily manage your menu and opening times without hassle.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}

export default LoginPage;
