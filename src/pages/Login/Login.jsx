import React, { useState } from "react";
import Images from "../../components/constant/Image";

function Login() {
  const [signIn, setSignIn] = useState(true); // true = Sign In, false = Sign Up

  return (
    <div>
      <div className="relative">
        {/* Background Banner */}
        <img
          src={Images.background_banner}
          alt="Login"
          className="absolute z-[-1] w-full h-screen object-cover bg-black brightness-[0.6]"
        />

        {/* Logo */}
        <div className="w-full h-[80px] flex justify-start items-center px-4 md:px-20">
          <img
            src={Images.logo}
            alt="logo"
            className="w-[150px] h-[80px] object-contain m-4 cursor-pointer"
          />
        </div>

        {/* Form */}
        <div>
          <form className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] bg-black/80 text-white mx-auto mt-20 px-6 md:px-12 py-20 rounded-md">
            <h1 className="text-3xl text-red-600 font-bold mb-6 text-center">
              {signIn ? "Sign In" : "Sign Up"}
            </h1>

            {/* Username only for sign up */}
            {!signIn && (
              <input
                type="text"
                placeholder="Username"
                className="w-full p-3 mb-4 bg-gray-700 rounded outline-none"
              />
            )}

            <input
              type="email"
              placeholder="Email or phone number"
              className="w-full p-3 mb-4 bg-gray-700 rounded outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 bg-gray-700 rounded outline-none"
            />

            <button className="w-full bg-red-600 py-3 rounded font-bold my-4 hover:bg-red-700 transition">
              {signIn ? "Sign In" : "Sign Up"}
            </button>

            {/* Remember Me + Help */}
            <div className="flex justify-between items-center text-gray-400 text-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <p className="hover:underline cursor-pointer">Need Help?</p>
            </div>

            {/* Toggle Sign In / Sign Up */}
            <div className="mt-6 text-center text-gray-400 text-sm">
              {signIn ? (
                <p>
                  New to Netflix?{" "}
                  <button
                    type="button"
                    onClick={() => setSignIn(false)}
                    className="ml-1 text-white font-bold hover:underline"
                  >
                    Sign Up
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setSignIn(true)}
                    className="ml-1 text-white font-bold hover:underline"
                  >
                    Sign In
                  </button>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
