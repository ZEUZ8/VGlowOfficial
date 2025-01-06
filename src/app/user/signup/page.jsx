"use client";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { signupValidation } from "@/validation/user/signup";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useHydratedUser from "@/hooks/user/useHydratedUser";

const Signup = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data } = useHydratedUser();

  // if the user have already registered or logined then redirecting to the products page
  useEffect(() => {
    if (data.user || data.token) {
      router.push("/user/products");
    }
  }, [data]);

  const {mutate} = useMutation({

    mutationFn: async (values) => {
      const response = await axios.post("/api/auth/register", values);
      console.log(response, 'the response inteh front end')
      return response.data;
    },

    onSuccess: (data) => {
      if (data?.msg === "register successful") {
        const { token, ...userWithoutToken } = data.user;
        localStorage.setItem("token", token);
        localStorage.setItem("user", userWithoutToken);

        queryClient.invalidateQueries(["user"]);

        toast.success(data.msg);

        setTimeout(() => {
          router.push("/user/products");
        }, 800);
      }
    },
    
    onError: (error) => {
      console.log(error)
      toast.error(error?.response?.data?.msg || "Signup Failed");
    },
  });

  // const onSubmit = async () => {
  //   try {
  //     const response = await axios.post("/api/auth/register", values);
  //     if (response && response?.data?.msg == "register successful") {
  //       const { token, ...userWithoutToken } = data.user;
  //       localStorage.setItem("token", token);
  //       localStorage.setItem("user", JSON.stringify(userWithoutToken));

  //       //invalidating the query for the updating the state with latest data;
  //       queryClient.invalidateQueries("user");

  //       toast.success(response.data.msg);

  //       // Redirecting the user to the products page
  //       setTimeout(() => {
  //         router.push("/products");
  //       }, 800);
  //     }
  //   } catch (err) {
  //     toast.error(err?.response?.data?.msg);
  //   }
  // };

  const onSubmit = ()=>{
    mutate(values)
  }

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    resetForm,
  } = useFormik({
    initialValues: { email: "", password: "", phone: "", username: "" },
    validationSchema: signupValidation,
    onSubmit,
  });

  useEffect(() => {
    console.log(errors, " the erros");
  }, [errors]);

  return (
    <div className="bg-transparent  h-[83vh] flex justify-center items-center max-lg:px-5">
      <Toaster />
      <div className=" lg:w-[60%]  shadow-special  rounded-xl">
        <div className="grid  md:grid-cols-2  rounded-xl ">
          <div className="bg-white p-4 rounded-l-xl ">
            <div className=" p-4 ">
              <h1 className="text-2xl font-semibold tracking-wide text-center ">
                Sign Up
              </h1>
            </div>
            <form action="">
              <div className="mb-3">
                {/* <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label> */}
                <input
                  type="string"
                  id="username"
                  name="username"
                  placeholder={errors.username ? errors.username : "User Name"}
                  value={values.username}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={` p-2 block w-full border bg-gray-50  border-gray-200 rounded-md shadow-special2 styled-input ${
                    errors.username &&
                    !values.username &&
                    "placeholder:text-red-500"
                  }`}
                />
                {errors.username && (
                  <p className="p-1 text-xs font-light text-red-500">
                    {errors.username && values.username && errors.username}
                  </p>
                )}
              </div>
              <div className="mb-3">
                {/* <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone 
                </label> */}
                <input
                  id="phone"
                  name="phone"
                  placeholder={errors.phone ? errors.phone : "Phone"}
                  value={values.phone}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={` p-2 block w-full border bg-gray-50  border-gray-200 rounded-md shadow-special2 styled-input ${
                    errors.phone && !values.phone && "placeholder:text-red-500"
                  }`}
                />
                {errors.phone && (
                  <p className="p-1 text-xs font-light text-red-500 italic">
                    {errors.phone && values.phone && errors.phone}
                  </p>
                )}
              </div>
              <div className="mb-3">
                {/* <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label> */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={` p-2 block w-full border bg-gray-50  border-gray-200 rounded-md shadow-special2 styled-input ${
                    errors.email && !values.email && "placeholder:text-red-500"
                  }`}
                />
                {errors.email && (
                  <p className="p-1 text-xs font-light text-red-500">
                    {errors.email && values.email && errors.email}
                  </p>
                )}
              </div>
              <div className="mb-3">
                {/* <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label> */}
                <input
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={` p-2 block w-full border bg-gray-50  border-gray-200 rounded-md shadow-special2 styled-input ${
                    errors.password &&
                    !values.password &&
                    "placeholder:text-red-500"
                  }`}
                />
                {errors.password && (
                  <p className="p-1 text-xs font-light text-red-500">
                    {errors.password && values.password && errors.password}
                  </p>
                )}
              </div>
            </form>

            <div className="flex justify-center items-center py-3">
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full py-1 px-4 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
              >
                Sign Up
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
                  have a account{" "}
                  <a href="/login" className="text-blue-500">
                    login?
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="max-md:hidden relative bg-white rounded-r-2xl">
            <div className="absolute inset-0 flex justify-center items-center bg-transparent rounded-xl ">
              <img
                src="/withGrape.png"
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

export default Signup;
