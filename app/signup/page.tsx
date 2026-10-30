
import Link from "next/link";
import { Button } from "../components/button";

export default function Signup() {
  return (
    <main className="w-full min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-5xl min-h-[600px] bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        
        <div className="hidden md:flex flex-col justify-center items-center bg-blue-950 text-white p-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-5">
            Cytech
          </h1>

          <p className="text-gray-300 text-center text-lg leading-8 max-w-sm">
            Welcome to a world of innovative technology and smarter solutions.
            Create an account and get started with us.
          </p>
        </div>

        
        <div className="flex flex-col justify-center p-6 sm:p-10">

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Create Account
            </h2>

            <p className="text-gray-500 mt-2">
              Please fill in your details to sign up.
            </p>
          </div>

          <form className="flex flex-col gap-5">

            {/* full name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                required
                className="w-full h-12 px-4 border border-gray-300 rounded-lg text-black outline-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950"
              />
            </div>

            {/* Email Address */}
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
                placeholder="Create a password"
                required
                minLength={8}
                className="w-full h-12 px-4 border border-gray-300 rounded-lg text-black outline-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950"
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm your password"
                required
                minLength={8}
                className="w-full h-12 px-4 border border-gray-300 rounded-lg text-black outline-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950"
              />
            </div>

            {/* Sign Up */}
            <Button type="submit" variant="darkblue" className="w-full h-12">
              Create Account
            </Button>

          </form>

          <p className="text-sm text-gray-500 text-center mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-950 font-semibold hover:underline">
              Log in
            </Link>
          </p>

          <Link href="/" className="text-sm text-gray-500 text-center mt-5 hover:text-blue-950">
            ← Back to Home
          </Link>

        </div>
      </div>
    </main>
  );
}
