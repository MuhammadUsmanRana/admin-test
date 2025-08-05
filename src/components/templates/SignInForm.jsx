"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <section className="bg-blue-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <div className="flex justify-center mb-6">
          <Link
            href="#"
            className="flex items-center text-2xl font-bold text-blue-700"
          >
            Bank App
          </Link>
        </div>
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login to your account
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="block mb-1 text-sm text-gray-600">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              {...register("email", { required: "Email is required" })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {typeof errors.email?.message === "string"
                  ? errors.email.message
                  : ""}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm text-gray-600"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password", { required: "Password is required" })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {typeof errors.password.message === "string"
                  ? errors.password.message
                  : ""}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign In
          </button>

          <p className="text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <a href="/sign-up" className="text-blue-600 hover:underline">
              Register here
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
