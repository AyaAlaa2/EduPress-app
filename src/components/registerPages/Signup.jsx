import React from "react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../hooks/BreadCrumb";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signupSchema = z
    .object({
      username: z
        .string()
        .min(3, { message: "Username must contain 3 letter at least" }),
      email: z.email(),
      password: z.string().min(8, {
        message: "Password must contain 8 letters at least",
      }),
      confPassword: z.string().min(8, {
        message: "Password must contain 8 letters at least",
      }),
    })
    .refine((data) => data.password === data.confPassword, {
      message: "Confirm Password does not match Password",
      path: ["confPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema), mode: "onBlur" });

  const onSubmit = async () => {
    try {
      setLoading(true);
      toast.success("Account Created Successfully!");
    } catch {
      toast.error("Oops ! An Error Occured , Try Again !");
    } finally {
      navigate("/login");
      setLoading(false);
    }
  };

  const href = [{ title: "Homepage", href: "/" }, { title: "Register" }];

  return (
    <div className="min-h-[400px] mt-16">
      <BreadCrumb href={href} />

      <div className="max-w-2xl mx-auto px-4 lg:px-6 py-8">
        <div className="w-full flex flex-col items-start gap-3 rounded-lg border-1 shadow-lg p-[30px]">
          <h2 className="font-semibold text-[32px] font-[Exo]">Register</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-control w-full flex flex-col gap-[20px]"
          >
            <div className="flex flex-col gap-[8px]">
              <input
                id="username"
                type="text"
                {...register("username")}
                placeholder="username"
                required
                className="text-[#9D9D9D] input input-bordered border-[#9D9D9D] focus:outline-none border-1 px-[16px] py-[10px] rounded-[8px]"
              />
              {errors.username && (
                <p className="text-sm text-red-500">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-[8px]">
              <input
                id="email"
                type="email"
                {...register("email")}
                placeholder="Email"
                required
                className="text-[#9D9D9D] input input-bordered border-[#9D9D9D] focus:outline-none border-1 px-[16px] py-[10px] rounded-[8px]"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-[8px]">
              <input
                id="password"
                type="password"
                {...register("password")}
                placeholder="Password"
                required
                className="text-[#9D9D9D] input input-bordered border-[#9D9D9D] focus:outline-none border-1 px-[16px] py-[10px] rounded-[8px]"
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-[8px]">
              <input
                id="confPassword"
                {...register("confPassword")}
                placeholder="confirm password"
                type="password"
                required
                className="text-[#9D9D9D] input input-bordered border-[#9D9D9D] focus:outline-none border-1 px-[16px] py-[10px] rounded-[8px]"
              />
              {errors.confPassword && (
                <p className="text-sm text-red-500">
                  {errors.confPassword.message}
                </p>
              )}
            </div>
            <button
              className="btn bg-primary text-white text-[16px] mt-2 px-[24px] py-[10px] rounded-[24px] cursor-pointer"
              disabled={loading}
            >
              {loading ? (
                <p>
                  <span>Creating Account </span>
                  <span className="loading loading-dots loading-md"></span>
                </p>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          <div className="flex items-center justify-center gap-[8px] mt-[32px]">
            <p className="text-sm grow-0 text-gray-600 ">
              Already have an account?
            </p>
            <button
              type="button"
              className="link text-primary cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
