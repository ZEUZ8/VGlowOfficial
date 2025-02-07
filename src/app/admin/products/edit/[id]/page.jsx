"use client";
import React, { useEffect, useState } from "react";
import { Plus, X } from "lucide-react";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { productValidation } from "@/validation/admin/product";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import Navbar from "../../add/Navbar";
import Category from "../../add/Category";
import Pricing from "../../add/Pricing";
import ImageUpload from "../../add/imageUpload";

//when page loading getting the product for updation with the id from the path
const fetchProduct = async (id) => {
  const response = await axios.get(`/api/admin/products/get/${id}`);
  return response;
};

const page = () => {
  const productId = "679dc79f448265ffc7b98caa";
  const [sizes, setSizes] = useState([50, 60, 70, 45, 30, 15]);

  const filters = [
    { time: ["Day", "Night", "Both"] },
    {
      Brands: [
        "Cetaphil",
        "VGlow",
        "Deconstruct",
        "Lipa",
        "Plix",
        "UVDox",
        "Minimalist",
      ],
    },
    {
      skinType: ["Oily", "Dry", "Combination", "All Skin"],
    },
  ];


  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["product", productId], // Unique query key for caching
    queryFn: () => fetchProduct(productId), // Fetch function
    enabled: !!productId, // Only fetch if productId is available
    onSuccess: (response) => {
      console.log("consoling",response);
    },
  });

  // console.log(product,'the data')

  const initialFilters = filters.reduce((acc, filter) => {
    Object.keys(filter).forEach((key) => {
      // If filter has multiple options, create an array for those options
      acc[key] = ""; // Set default as empty string or array
    });
    return acc;
  }, {});


  const onSubmit = ()=>{
    console.log('ghost the shooter')
  }

  const formik = useFormik({
    initialValues: {
      productName: "",
      productDescription: "",
      mainCategory: "",
      subCategory: "",
      basePricing: "",
      stock: "",
      discount: null,
      discountType: "",
      sizes: productValidation.fields.sizes.default() ?? [],
      filters: initialFilters ?? "",
    },
    validationSchema: productValidation,
    onSubmit,
  });

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    resetForm,
    setFieldTouched,
    setFieldValue,
  } = formik;

  useEffect(() => {
    console.log(errors, " consoling the errors");
  }, [errors]);

  return (
    <div className="">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar handleSubmit={handleSubmit} />
      <div className="p-2 max-h-[90vh] overflow-y-auto ">
        <div className="grid grid-cols-10 gap-3">
          <div className="col-span-10 lg:col-span-6">
            <div className="grid gap-5">
              <div className=" border border-gray-50 rounded-lg py-2 px-4 bg-gray-100">
                <h1 className="py-2 text-lg font-medium">
                  General Infromation
                </h1>
                <div className="pt-4">
                  <p className="text-sm font-normal py-1 px-1">Name Product</p>
                  <input
                    placeholder="Enter Name"
                    type="text"
                    name="productName"
                    value={values?.productName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="rounded-lg bg-gray-200 w-full p-2 px-3 placeholder:text-sm placeholder:text-gray-600"
                  />
                  {errors.productName && touched.productName && (
                    <p className="p-1 text-xs font-light text-red-500">
                      {errors.productName}
                    </p>
                  )}
                </div>
                <div className="pt-4">
                  <p className="text-sm font-normal py-1 px-1">
                    Product Description
                  </p>
                  <textarea
                    placeholder="Enter Description"
                    type="text"
                    name="productDescription"
                    value={values.productDescription}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="rounded-lg bg-gray-200 w-full p-2 px-3 placeholder:text-sm placeholder:text-gray-600 text-sm"
                  />
                  {errors.productDescription && touched.productDescription && (
                    <p className="p-1 text-xs font-light text-red-500">
                      {errors.productDescription}
                    </p>
                  )}
                </div>
                <div>
                  <Category formik={formik} filters={filters} />
                </div>
              </div>
              <div>
                <Pricing formik={formik} />
              </div>
            </div>
          </div>

          <div className="col-span-10 lg:col-span-4">
            <ImageUpload />
            <div>
              <div className="bg-gray-100 border border-gray-100 rounded-lg my-3 px-4 py-2">
                <div className="">
                  <h1 className="font-medium text-lg">Size</h1>
                </div>
                <div className="py-2">
                  <div className="rounded-lg flex flex-wrap gap-2  p-2 ">
                    {sizes.map((item, i) => {
                      const selectedSize = values.sizes.includes(item);
                      return (
                        <div key={i}>
                          <div
                            onClick={() => {
                              !selectedSize &&
                                setFieldValue("sizes", [...values.sizes, item]);
                            }}
                            className={`flex justify-between items-center w-fit border rounded-full px-2 lg:px-3  py-2 lg:py-2 border-black gap-1 cursor-pointer ${
                              selectedSize && "border-green-300 bg-green-300"
                            }`}
                          >
                            <p className={`text-xs`}>{item}gm</p>
                            <input
                              className="hidden"
                              type="number"
                              id=""
                              name="sizes"
                              value={selectedSize ? item : ""}
                              readOnly
                            />
                            <p className="cursor-pointer">
                              <X
                                onClick={() => {
                                  setFieldValue(
                                    "sizes",
                                    values.sizes.filter(
                                      (selectedItem) => selectedItem !== item
                                    ) // Remove size from array
                                  );
                                }}
                                className="h-4 w-4 text-gray-700"
                              />
                            </p>
                          </div>
                        </div>
                      );
                    })}

                    <div>
                      <div
                        onClick={() => console.log("clicked the add button")}
                        className="flex justify-between items-center w-fit border border-dashed rounded-full p-2 px-3 border-black gap-1 cursor-pointer"
                      >
                        <p className="text-xs text-gray-700">Add Size</p>
                        <p className="">
                          <Plus className="h-4 w-4 text-gray-700" />
                        </p>
                      </div>
                    </div>
                  </div>
                  {errors.sizes && touched.sizes && (
                    <p className="p-1 text-xs font-light text-red-500 mx-3">
                      {errors.sizes}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
