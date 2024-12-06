"use client";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { loginValidation } from "@/validation/user/login";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Login = () => {

  const router = useRouter();

  const onSubmit = async () => {
    try {
      const response = await axios.post("/api/auth/login", values);
      console.log(response,' the respons')
      if(response?.data?.msg === "login succesfull"){
        toast.success(response?.data?.msg,)
      }
    } catch (err) {
      console.log(err,' the response in the console',err.response.data.msg)
      toast.error(err?.response?.data?.msg)
    }
  };

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    resetForm,
  } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginValidation,
    onSubmit,
  });

  return (
    <div className="bg-transparent  h-[83vh] flex justify-center items-center max-lg:px-5">
      <Toaster position="top-center" reverseOrder={false} />
      <div className=" lg:w-[60%]  shadow-special  rounded-xl">
        <div className="grid  md:grid-cols-2  rounded-xl ">
          <div className="bg-white p-4 rounded-l-xl ">
            <div className=" p-4 ">
              <h1 className="text-2xl font-semibold tracking-wide text-center ">
                Login
              </h1>
            </div>
            <form action="">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="mt- p-2 block w-full border bg-gray-50  border-gray-200 rounded-md shadow-special2 styled-input"
                />
                {errors.email && (
                  <p className="p-1 text-xs font-light text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-1 p-2 block w-full border bg-gray-50 border-gray-200 rounded-md shadow-special2 styled-input"
                />
                {errors.password && (
                  <p className="p-1 text-xs font-light text-red-500">
                    {errors.password}
                  </p>
                )}
              </div>
            </form>

            <div className="flex justify-center items-center py-3">
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
              >
                Login
              </button>
            </div>
            <hr className="p-1" />
            <div>
              <p className="text-xs font-light text-center">or continue with</p>
            </div>
            <div className="flex justify-center items-center py-1 ">
              <div className="border border-black shadow-special2 rounded-lg w-full flex justify-center gap-2 items-center py-2">
                <img
                  src="/google.png"
                  className="w-[5%] h-[100%]"
                  alt="image"
                />
                {/* Google */}
                <p className="text-xs font-medium">Sign In with Google</p>
              </div>
            </div>
            <div>
              <div className=" flex justify-center items-center pt-2">
                <p className="text-xs font-light">
                  {`don't have a account`}
                  <a href="/signup" className="text-blue-500">
                    create?
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="max-md:hidden relative bg-white rounded-r-2xl">
            <div className="absolute inset-0 flex justify-center items-center bg-transparent rounded-xl ">
              <img
                src="/cream.png"
                className="w-[100%] h-[100%] rounded-r-xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
