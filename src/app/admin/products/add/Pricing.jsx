import { Plus } from "lucide-react";
import React from "react";

const Pricing = ({ formik }) => {
  const { values, errors, touched, handleBlur, handleChange, resetForm } =
    formik;
  return (
    <div className="">
      <div className="border border-gray-50 rounded-lg py-2 px-4 bg-gray-100">
        <h1 className="py-2 text-lg font-medium ">Pricing and Stock</h1>
        <div className="grid grid-cols-2 gap-5 py-3 ">
          <div>
            <p className="text-sm font-normal py-1 px-1">Base Pricing</p>
            <input
              placeholder="Base Pricing"
              name="basePricing"
              value={values.basePricing}
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              className="rounded-lg bg-gray-200 w-full p-2 px-3 placeholder:text-sm placeholder:text-gray-600"
            />
            {errors.basePricing && touched.basePricing && (
              <p className="p-1 text-xs font-light text-red-500">
                {errors.basePricing}
              </p>
            )}
          </div>

          <div>
            <p className="text-sm font-normal py-1 px-1">Stock</p>
            <input
              name="stock"
              value={values.stock}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Stock"
              type="text"
              className="rounded-lg bg-gray-200 w-full p-2 px-3 placeholder:text-sm placeholder:text-gray-600"
            />
            {errors.stock && touched.stock && (
              <p className="p-1 text-xs font-light text-red-500">
                {errors.stock}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 py-3 ">
          <div>
            <p className="text-sm font-normal py-1 px-1">Discount</p>
            <input
              name="discount"
              value={values.discount}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="10%"
              type="text"
              className="rounded-lg bg-gray-200 w-full p-2 px-3 placeholder:text-sm placeholder:text-gray-600"
            />
            {errors.discount && touched.discount && (
              <p className="p-1 text-xs font-light text-red-500">
                {errors.discount}
              </p>
            )}
          </div>
          <div>
            <p className="text-sm font-normal py-1 px-1">Discount Type</p>
            {/* <input
              placeholder=""
              type="text"
              className="rounded-lg bg-gray-200 w-full p-2 px-3 placeholder:text-sm placeholder:text-gray-600"
            /> */}
            <div className="flex justify-center items-center  gap-2">
              <select
                name="discountType"
                value={values.discountType}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full border border-gray-200  p-2 px-3 bg-gray-200 rounded-lg text-gray-500 text-sm"
              >
                <option value="" disabled="disabled" selected="true">
                  Discount Type
                </option>
                <option value="diwali">Diwali</option>
                <option value="christmas">Chirstmas</option>
                <option value="newyear">New Year</option>
                <option value="onam">onam</option>
              </select>
              <div className="cursor-pointer ">
                <div className="p-2  px-3 flex justify-center items-center border rounded-lg bg-gray-200">
                  <p className="text-sm text-gray-700">Add</p>
                  <Plus className="h-4 w-4" />
                </div>
              </div>
            </div>
            {errors.discountType && touched.discountType && (
              <p className="p-1 text-xs font-light text-red-500">
                {errors.discountType}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
