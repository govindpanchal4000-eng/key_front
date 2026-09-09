import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Login successful
    setIsLoggedIn(true);

    // Go to checkout
    navigate("/checkout");
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-slate-950 pt-28 px-4 pb-10 flex items-center justify-center">

      <div className="w-full max-w-md">

        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-slate-800">

          {/* Heading */}
          <div className="text-center mb-7">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Welcome Back 👋
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Login to your account
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                required
                className="
                  w-full px-4 py-3 rounded-xl
                  border border-gray-300 dark:border-slate-700
                  bg-gray-50 dark:bg-slate-800
                  text-gray-900 dark:text-white
                  outline-none
                  focus:ring-2 focus:ring-gray-500
                "
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  className="
                    w-full px-4 py-3 pr-20 rounded-xl
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
                    hover:text-gray-900
                    dark:hover:text-white
                  "
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>
            </div>

            {/* Login */}
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
              Login
            </button>

          </form>

          {/* Signup */}
          <p className="text-center mt-6 text-gray-500 dark:text-gray-400">
            Don't have an account?{" "}

            <NavLink
              to="/signup"
              className="font-semibold text-gray-900 dark:text-white hover:underline"
            >
              Sign Up
            </NavLink>

          </p>

        </div>

      </div>

    </section>
  );
}