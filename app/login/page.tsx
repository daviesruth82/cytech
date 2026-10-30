
"use client";

import Link from "next/link";
import { Button } from "../components/button";

export default function Login() {
  return (
    <main className="w-full min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-5xl min-h-[550px] bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center bg-rose-300 text-white p-10">

          <h1 className="text-4xl text-rose-700 lg:text-5xl font-bold mb-5">
            Cytech
          </h1>

          <p className="text-gray-600 text-center text-lg leading-8 max-w-sm">
            Welcome back! Log in to continue exploring innovative technology
            and smarter solutions.
          </p>

        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center p-6 sm:p-10">

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Welcome Back
            </h2>

            <p className="text-gray-500 mt-2">
              Enter your details to access your account.
            </p>
          </div>

          <form className="flex flex-col gap-5">

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full h-12 px-4 border border-gray-300 rounded-lg text-black outline-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                required
                className="w-full h-12 px-4 border border-gray-300 rounded-lg text-black outline-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950"
              />
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between gap-2 text-sm">

              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-blue-950" />
                Remember me
              </label>

              <Link
                href="/forgot-password"
                className="text-blue-950 font-medium hover:underline"
              >
                Forgot password?
              </Link>

            </div>

            {/* Login Button */}
            <Button
              type="submit"
              variant="dark"
              className="w-full h-12"
            >
              Login
            </Button>

          </form>

          {/* Signup Link */}
          <p className="text-sm text-gray-500 text-center mt-6">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-blue-950 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>

          <Link
            href="/"
            className="text-sm text-gray-500 text-center mt-5 hover:text-blue-950"
          >
            ← Back to Home
          </Link>

        </div>
      </div>
    </main>
  );
}
