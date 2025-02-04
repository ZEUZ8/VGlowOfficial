import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";

const Category = ({ formik, filters }) => {
  const { values, errors, touched, handleBlur, handleChange, setFieldValue } =
    formik;

  const [mainCategory, setMainCategory] = useState([
    "Skin Care",
    "Hair Care",
    "Body Care",
    "Nails",
    "Medical",
  ]);
  const [subCategory, setSubCategory] = useState([
    "Face Wash",
    "Moisturizer",
    "Sun Screen",
    "Lip Bam",
    "Brithining Cream",
    "Serum",
    "Toner",
  ]);

  return (
    <div>
      <div className="">
        <div className="justify-between ">
          <h1 className="text-lg font-medium py-2 text-gray-600">Category</h1>
        </div>
        <div>
          <div className="py-2">
            <p className="p-1 text-sm">Main Category</p>
            <div className="grid grid-cols-10 ">
              <div className="col-span-8">
                <select
                  name="mainCategory"
                  value={values.mainCategory}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="border border-gray-200  bg-gray-200 rounded-lg p-2 py-3 pr-3 text-sm w-full"
                  id="input"
                >
                  <option value="" selected={true} disabled="disabled">
                    Main Category
                  </option>
                  {mainCategory.map((item, i) => (
                    <option key={i} value={item} className=" font-medium">
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-2 flex justify-center items-end md:items-center ">
                <div className="border border-gray-600 bg-gray-600 rounded-lg p-2 w-fit cursor-pointer">
                  <p className="text-white text-xs max-md:hidden">Add Category</p>
                  <p className="text-white text-xs md:hidden"><Plus/></p>
                </div>
              </div>
            </div>
            {errors.mainCategory && touched.mainCategory && (
              <p className="p-1 text-xs font-light text-red-500">
                {errors.mainCategory}
              </p>
            )}
          </div>

          {/* <--! */}
          <div className="py-2">
            <p className="p-1 text-sm">Sub Category</p>
            <div className="grid grid-cols-10">
              <div className="col-span-8">
                <select
                  name="subCategory"
                  value={values.subCategory}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={`border border-gray-200  bg-gray-200 rounded-lg p-2 py-3 pr-3 text-sm w-full  ${
                    !values.mainCategory && "text-gray-600"
                  }`}
                  id="input"
                  disabled={!values.mainCategory}
                >
                  {values.mainCategory ? (
                    <option value="" selected={true} disabled="disabled">
                      Sub Category
                    </option>
                  ) : (
                    <option value="" selected={true} disabled="disabled">
                      Select Main Category
                    </option>
                  )}
                  {subCategory.map((item, i) => (
                    <option key={i} value={item} className="font-medium">
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-2 flex justify-center items-center">
                <div className="border border-gray-600 bg-gray-600 rounded-lg p-2 w-fit cursor-pointer">
                  <p className="text-white text-xs max-md:hidden">Add Category</p>
                  <p className="text-white text-xs md:hidden"><Plus/></p>
                </div>
              </div>
            </div>
            {errors.subCategory && touched.subCategory && (
              <p className="p-1 text-xs font-light text-red-500">
                {errors.subCategory}
              </p>
            )}
          </div>

          {/* Filter Section, need for precisely getting each product by exact filtering  */}
          <div className="py-2">
            <p className="p-1 text-sm ">Filters</p>
            <div className="flex gap-3 flex-wrap py-2">
              {/* select for skin type */}
              {filters.map((filter, i) => {
                const filterName = Object.keys(filter)[0];
                const filterOption = filter[filterName];
                // console.log(values.filters[0][filterName],' the filter value')
                return (
                  <select
                    key={i}
                    name={filterName}
                    onChange={(e) => {
                      setFieldValue(`filters.${filterName}`, e.target.value);
                    }}
                    onBlur={handleBlur}
                    value={values.filters?.[filterName] || ""}
                    className="rounded-full shadow-sm  bg-white border border-gray-400 text-sm text-gray-700 appearance-none p-2 px-3 text-center"
                    id="skin Type"
                  >
                    <option value="" selected={true} disabled="disabled">
                      {filterName}
                    </option>
                    {filterOption.map((item, i) => (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                );
              })}

              {/* filter select for brands  */}
              {/* <select
                name="skin type"
                className="rounded-full shadow-sm  bg-white border border-gray-400 text-sm text-gray-700 appearance-none p-2 px-3 text-center"
                id="skin Type"
              >
                <option value="" selected={true} disabled="disabled">
                  Brand
                </option>
                {brands.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select> */}

              {/* usage time explictly for each prodct  */}
              {/* <select
                name="skin type"
                className="rounded-full shadow-sm  bg-white border border-gray-400 text-sm text-gray-700 appearance-none p-2 px-3 text-center"
                id="skin Type"
              >
                <option value="" selected={true} disabled="disabled">
                  Time
                </option>
                {time.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select> */}

              <div className="border border-dashed rounded-full border-gray-400 bg-white px-4 py-2 flex justify-center items-center gap-1 cursor-pointer">
                <p className="text-xs text-gray-600">Add Filter</p>
                <p>
                  <Plus className="w-4 h-4 text-gray-600" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
