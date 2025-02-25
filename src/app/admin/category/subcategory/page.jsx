"use client";
import ListTable from "@/components/admin/category/ListTable";
import React, { useEffect, useState } from "react";
import { ChevronDown, CircleX, CloudLightning } from "lucide-react";
import { useFormik } from "formik";
import { categoryValidation } from "@/validation/admin/category";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import "../toggler.css";

const fetchCategories = async () => {
  const response = await axios.get("/api/admin/category");
  return response?.data;
};
const page = () => {
  const [isSubCategoryOpen, setIsSubCategoryOpen] = useState(false);
  const [parent, setParent] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["subCategories"],
    queryFn: fetchCategories,
    onSuccess: (data) => {
      if (data?.category) {
        console.log("conslig the data only if data exists");
      }
    },
  });

  useEffect(() => {
    if (data?.category) {
      setCategoryList([...data.category]); // Ensures immutability
    }
  }, [data]);

  useEffect(() => {
    async function getting(params) {
      try {
        const parentData = categoryList.find(
          (item) => item.categoryName === parent
        );
        if (parentData) {
          const id = parentData?._id;
          const response = await axios.get(`/api/admin/subCategory/get/${id}`);
          console.log(response, "the repsonse consling int frontend");
          if (response?.data?.msg === "getting successfull") {
            setSubCategoryList(response?.data?.subCategory);
          }
        }
      } catch (err) {
        console.log(err, "consoling the erro");
      }
    }
    getting();
  }, [parent]);

  const { mutate } = useMutation({
    mutationFn: async (values) => {
      const response = await axios.post("/api/admin/subCategory/add", values);
      return response?.data;
    },

    onSuccess: (data) => {
      console.log(data, "data in the consle");
      if (data.msg === "SubCategory created successfully") {
        toast.success(data?.msg, { duration: 1000 });
      } else {
        toast.error(data?.msg ?? "Somehting went wrong");
      }
    },
    onError: (error) => {
      toast.error(error?.response?.data?.msg || "product adding failed");
    },

    onSettled: (data) => {
      setIsSubCategoryOpen(false);
      if (data?.subCategory) {
        console.log("consling if the subCategory exist");
        setSubCategoryList((prev) => [...prev, data?.subCategory]);
      }
    },
  });

  const onSubmit = () => {
    mutate(values);
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
    setFieldValue,
  } = useFormik({
    initialValues: {
      categoryName: "",
      description: "",
      parentId: "",
      isActive: true,
    },
    validationSchema: categoryValidation,
    onSubmit,
  });

  useEffect(() => {
    console.log(values, " consoling values for checking ");
  }, [values]);

  if (isLoading) {
    return (
      <div className="grid justify-center items-center ">
        <p className="text-gray-700">Loading categories...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="p-2 grid lg:grid-cols-6">
        <div className=" lg:hidden flex justify-end items-center py-4">
          <div className="lg:px-2  ">
            <div className="p-1 py-2 border border-gray-300 rounded-lg cursor-pointer focus:scale-95 bg-gray-100">
              <p
                className="text-sm text-gray-700 px-2"
                onClick={() => parent && setIsSubCategoryOpen(true)}
              >
                Add SubCategory
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          {/* <form className="">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Search Parent Category"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form> */}

          <div className="">
            <div className="relative">
              <select
                className="py-3 px-4 border border-gray-300 rounded-lg cursor-pointer bg-gray-100 w-full text-gray-700 appearance-none"
                value={parent}
                onChange={(e) => {
                  setParent(e.target.value);
                  const parent = categoryList.find((item) => {
                    return item?.categoryName === e.target.value;
                  });
                  setFieldValue("parentId", parent?._id);
                }}
              >
                <option
                  value=""
                  disabled={true}
                  className="peer-disabled:text-gray-700 peer-disabled:opacity-100"
                >
                  Select Parent Category
                </option>
                {categoryList.map((item, i) => (
                  <option key={i} value={item.categoryName}>
                    {item.categoryName}
                  </option>
                ))}
              </select>
              {parent ? (
                <div
                  className="absolute inset-y-0 right-2  flex items-center pointer-events-none"
                  onClick={() => setParent("")}
                >
                  <CircleX className="text-gray-600 w-5 h-5 " />
                </div>
              ) : (
                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                  <ChevronDown className="text-gray-600 w-5 h-5" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className=" max-lg:hidden lg:col-span-1  flex justify-start lg:justify-center items-center max-lg:mt-3">
          <div className="lg:px-2  ">
            <div className="p-2 py-3 border border-gray-300 rounded-lg cursor-pointer focus:scale-95 bg-gray-100">
              <p
                className="text-sm text-gray-700 px-2"
                onClick={() => {
                  if (!parent) {
                    toast.error("Please Select a Category");
                  } else {
                    setIsSubCategoryOpen(true);
                  }
                }}
              >
                Add SubCategory
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-1 flex-grow ">
        {!parent ? (
          <>
            <div className="py-2 px-2">
              <div className="border p-4 border-dashed border-red-500 rounded-lg flex justify-start items-center">
                <p className="text-red-400 text-sm">Select a Category</p>
              </div>
            </div>
          </>
        ) : subCategoryList?.length > 0 ? (
          <ListTable categoryList={subCategoryList} />
        ) : (
          <div className="py-2 px-3">
            <div className="border p-4 border-dashed border-red-500 rounded-lg flex justify-start items-center">
              <div>
                <p className="text-red-400 text-sm">Empty Sub Category </p>
              </div>
              <div className="px-3">
                <div className="p-2 py-3 border border-gray-300 rounded-lg cursor-pointer focus:scale-95 bg-gray-100">
                  <p
                    className="text-sm text-gray-700 px-2"
                    onClick={() => {
                      if (!parent) {
                        toast.error("Please select Parent Category");
                      } else {
                        parent && setIsSubCategoryOpen(true);
                      }
                    }}
                  >
                    Add SubCategory
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {isSubCategoryOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-4 py-6 w-96 shadow-lg m-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Add Sub Category
            </h2>
            <div className="py-2">
              <p className="text-sm font-normal text-gray-800 p-1">
                Sub Category Name
              </p>
              <input
                type="text"
                className="border rounded-lg bg-gray-100 p-2 text-sm w-full"
                placeholder="Sub Category name"
                name="categoryName"
                value={values.categoryName}
                onBlur={handleBlur}
                onChange={handleChange}
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
                className="border rounded-lg bg-gray-100 p-2 text-sm w-full"
                name="description"
                placeholder="Sub Category Description"
                value={values.description}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {touched.description && errors.description && (
                <p className="text-xs text-red-500 pt-2">
                  {errors.description}
                </p>
              )}
            </div>

            {/* <div className="py-2">
              <p className="text-sm font-normal text-gray-800 p-1">
                Parent Category
              </p>
              <div className="grid grid-cols-10 gap-2 justify-center items-center">
              <div className="col-span-8">
                <input
                  type="text"
                  className="border rounded-lg bg-gray-100 p-2 text-sm w-full"
                  name="parentId"
                  placeholder="Parent Category Name "
                  value={values.parentId}
                  onChange={handleChange}
                  onBlur={(e) => {
                    const parent = categoryList.find((item) => {
                      return item?.categoryName === e.target.value;
                    });
                    setFieldValue("parentId", parent?._id ?? "");
                  }}
                />
              </div>
              <div className="col-span-2 ">
                  <button className="border p-2 h-full bg-blue-50 rounded-lg text-sm font-medium ">
                    Search
                  </button>
                </div>
              </div>
              {touched.parentId && errors.parentId && (
                <p className="text-xs text-red-500 pt-2">{errors.parentId}</p>
              )}
            </div> */}

            <div className="py-3">
              <p className="text-sm font-normal text-gray-800 p-1">
                Category Status
              </p>
              <div>
                <div class="toggler">
                  <input
                    id="toggler-1"
                    name="isActive"
                    type="checkbox"
                    checked={values.isActive}
                    onChange={() => {
                      handleChange({
                        target: {
                          name: "isActive",
                          value: !values.isActive,
                        },
                      });
                    }}
                    onBlur={handleBlur}
                  />
                  <label for="toggler-1">
                    <svg
                      class="toggler-on"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 130.2 130.2"
                    >
                      <polyline
                        class="path check"
                        points="100.2,40.2 51.5,88.8 29.8,67.5"
                      ></polyline>
                    </svg>
                    <svg
                      class="toggler-off"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 130.2 130.2"
                    >
                      <line
                        class="path line"
                        x1="34.4"
                        y1="34.4"
                        x2="95.8"
                        y2="95.8"
                      ></line>
                      <line
                        class="path line"
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
                onClick={() => setIsSubCategoryOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:scale-105"
                type="submit"
                onClick={handleSubmit}
              >
                Add Sub Category
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
