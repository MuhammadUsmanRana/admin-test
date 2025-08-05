"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = (data: any) => {
    const { name, email, password } = data;
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.find((u: { email: any }) => u.email === email);

    if (userExists) {
      alert("User already exists!");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Account created successfully!");
    router.push("/sign-in");
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center justify-center">
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
          Create your account
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name" className="block mb-1 text-sm text-gray-600">
              Name
            </label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {typeof errors.name?.message === "string" && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm text-gray-600">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="name@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {typeof errors.email?.message === "string" && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
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
              {...register("password", {
                required: "Password is required",
                minLength: 6,
              })}
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {typeof errors.password?.message === "string" && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-start">
            <input
              id="terms"
              type="checkbox"
              {...register("terms", { required: "You must accept the terms" })}
              className="w-4 h-4 rounded border-gray-300 focus:ring-2 focus:ring-blue-400"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I accept the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>
          {typeof errors.terms?.message === "string" && (
            <p className="text-red-500 text-sm -mt-3">{errors.terms.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create an account
          </button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/sign-in" className="text-blue-600 hover:underline">
              Login here
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUpPage;
