"use client";
import ListTable from "@/components/admin/category/ListTable";
import React, { useEffect, useState } from "react";
import Toggle from "./toggleButton/toggle";
import Button from "./submitButton/Button";
import { useFormik } from "formik";
import { categoryValidation } from "@/validation/admin/category";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = async () => {
    try {
      //making the api for creating the category
      const response = await axios.post("/api/admin/category/add", values);
      if (response.status == 201) {
        toast.success("Category added successfully!");
        setIsModalOpen(false);
        formik.resetForm();
      } else {
        toast.error(response?.data.msg);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    handleReset,
    resetForm,
  } = useFormik({
    initialValues: {
      categoryName: "",
      description: "",
      isActive: true,
    },
    validationSchema: categoryValidation.omit(["parent"]),
    onSubmit,
  });

  useEffect(() => {
    console.log("consling the errors", errors);
  }, [errors]);

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <div className=" py-2 p-1">
        <div className="lg:px-2 flex justify-between lg:justify-end items-center gap-2 ">
          <div className="p-2 border border-gray-300 rounded-lg cursor-pointer focus:scale-95 bg-gray-100">
            <p
              className="text-sm text-gray-700  px-2"
              onClick={() => setIsModalOpen(true)}
            >
              Add Category
            </p>
          </div>
        </div>
      </div>
      <div className="px-1 flex-grow ">
        <ListTable />
      </div>

      {/* Category adding option */}
      {/* <div className="p-1 py-3 mb-5  bg-white">
        <div className="border rounded-lg p-4 grid grid-cols-1  gap-3">
          <div>
            <div className=" py-2">
              <p className="text-sm font-normal text-gray-800 p-1">
                Category Name
              </p>
              <input
                type="text"
                className="border rounded-lg bg-gray-100 p-2 text-sm w-full"
                placeholder="Category name"
              />
            </div>
            <div className=" py-2">
              <p className="text-sm font-normal text-gray-800 p-1">
                Description
              </p>
              <input
                type="text"
                className="border rounded-lg bg-gray-100 p-2 text-sm w-full"
                placeholder="Category Description"
              />
            </div>
          </div>
          <div className="w-full flex  justify-between ">
            <div className=" pt-2">
              <p className="text-sm font-normal text-gray-800 p-1">
                Category Status
              </p>
              <div className=" w-fit px-1 py-2">
                <Toggle />
              </div>
            </div>
            <div className=" py-2 flex justify-center items-end">
              <div className="border rounded-lg px-4 py-2 bg-gray-200 border-gray-300 shadow-sm cursor-pointer ">
                <p className="text-sm font-medium text-gray-600 hover:scale-105 ">
                  Add Category
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-4 py-6 w-96 shadow-lg m-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Add Category
            </h2>
            <div className="py-2">
              <p className="text-sm font-normal text-gray-800 p-1">
                Category Name
              </p>
              <input
                type="text"
                name="categoryName"
                value={values.categoryName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border rounded-lg bg-gray-100 p-2 text-sm w-full"
                placeholder="Category name"
              />
              {touched.categoryName && errors.categoryName && (
                <p className="text-xs text-red-500 pt-2">
                  {errors.categoryName}
                </p>
              )}
            </div>
            <div className="py-2">
              <p className="text-sm font-normal text-gray-800 p-1">
                Description{" "}
                <span className="text-sm font-light text-gray-800">{`(Optional)`}</span>
              </p>
              <input
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border rounded-lg bg-gray-100 p-2 text-sm w-full"
                placeholder="Category Description"
              />
              {touched.description && errors.description && (
                <p className="text-xs text-red-500 pt-2">
                  {errors.description}
                </p>
              )}
            </div>
            <div className="py-3">
              <p className="text-sm font-normal text-gray-800 p-1">
                Category Status
              </p>
              <div>
                <div className="toggler">
                  <input
                    id="toggler-1"
                    name="isActive"
                    type="checkbox"
                    checked={values.isActive}
                    onChange={() => {
                      handleChange({
                        target: {
                          name: "isActive",
                          values: !values.isActive,
                        },
                      });
                    }}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="toggler-1">
                    <svg
                      className="toggler-on"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 130.2 130.2"
                    >
                      <polyline
                        className="path check"
                        points="100.2,40.2 51.5,88.8 29.8,67.5"
                      ></polyline>
                    </svg>
                    <svg
                      className="toggler-off"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 130.2 130.2"
                    >
                      <line
                        className="path line"
                        x1="34.4"
                        y1="34.4"
                        x2="95.8"
                        y2="95.8"
                      ></line>
                      <line
                        className="path line"
                        x1="95.8"
                        y1="34.4"
                        x2="34.4"
                        y2="95.8"
                      ></line>
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-lg shadow-sm hover:scale-105"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:scale-105"
                type="submit"
                onClick={handleSubmit}
              >
                Add Category
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
