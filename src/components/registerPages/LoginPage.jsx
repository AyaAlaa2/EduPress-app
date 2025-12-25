import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BreadCrumb from "../hooks/BreadCrumb";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(8, {
      message: "Password must contain 8 letter at least",
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema), mode: "onBlur" });

  const onSubmit = async () => {
    try {
      setLoading(true);
      toast.success("Login Successfully !");
    } catch {
      toast.error("Oops , An Error Occured , Tay Again !");
    } finally {
      navigate("/");
      setLoading(false);
    }
  };
  const href = [{ title: "Homepage", href: "/" }, { title: "Register" }];

  return (
    <div className="min-h-[400px] mt-16">
      <BreadCrumb href={href} />

      <div className="max-w-2xl mx-auto px-4 lg:px-6 py-8">
        <div className="w-full flex flex-col items-start gap-4 rounded-lg border-1 shadow-lg p-[30px]">
          <h2 className="font-semibold text-[32px] font-[Exo]">Login</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-control w-full flex flex-col gap-[20px]"
          >
            <div className="w-full flex flex-col gap-[8px]">
              <input
                id="email"
                type="email"
                placeholder="Email"
                {...register("email")}
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
                placeholder="Password"
                {...register("password")}
                required
                className="text-[#9D9D9D] input input-bordered border-[#9D9D9D] focus:outline-none border-1 px-[16px] py-[10px] rounded-[8px]"
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              className="btn bg-primary text-white text-[16px] mt-2 px-[24px] py-[10px] rounded-[24px]"
              disabled={loading}
            >
              {loading ? (
                <p>
                  <span>Login </span>
                  <span className="loading loading-dots loading-md"></span>
                </p>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <div className="flex items-center justify-center gap-[8px] mt-[32px]">
            <p className="text-sm grow-0 text-gray-600 ">Not registered yet?</p>
            <button
              type="button"
              className="link text-primary cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
