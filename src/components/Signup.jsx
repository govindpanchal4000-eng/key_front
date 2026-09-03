import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    console.log("Signup submitted");
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-slate-950 pt-28 px-4 pb-10 flex items-center justify-center">

      <div className="w-full max-w-md">

        <div className="
          bg-white dark:bg-slate-900
          rounded-2xl
          shadow-xl
          p-6 sm:p-8
          border border-gray-200 dark:border-slate-800
        ">

          <div className="text-center mb-7">

            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Create Account ✨
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Sign up to continue shopping
            </p>

          </div>

          <form onSubmit={handleSignup} className="space-y-4">

            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              required
              className="
                w-full px-4 py-3
                rounded-xl
                border border-gray-300 dark:border-slate-700
                bg-gray-50 dark:bg-slate-800
                text-gray-900 dark:text-white
                outline-none
                focus:ring-2 focus:ring-gray-500
              "
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              required
              className="
                w-full px-4 py-3
                rounded-xl
                border border-gray-300 dark:border-slate-700
                bg-gray-50 dark:bg-slate-800
                text-gray-900 dark:text-white
                outline-none
                focus:ring-2 focus:ring-gray-500
              "
            />

            {/* Password */}
            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="
                  w-full px-4 py-3 pr-20
                  rounded-xl
                  border border-gray-300 dark:border-slate-700
                  bg-gray-50 dark:bg-slate-800
                  text-gray-900 dark:text-white
                  outline-none
                  focus:ring-2 focus:ring-gray-500
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
                  absolute right-3 top-1/2
                  -translate-y-1/2
                  text-sm text-gray-500
                "
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="
                w-full
                bg-gray-800
                hover:bg-gray-600
                text-white
                py-3
                rounded-xl
                font-semibold
                transition
              "
            >
              Create Account
            </button>

          </form>

          <p className="text-center mt-6 text-gray-500 dark:text-gray-400">

            Already have an account?{" "}

            <NavLink
              to="/login"
              className="font-semibold text-gray-900 dark:text-white hover:underline"
            >
              Login
            </NavLink>

          </p>

        </div>

      </div>

    </section>
  );
}