"use client";
import ListTable from "@/components/admin/category/ListTable";
import React, { useEffect, useState } from "react";
import Toggle from "../toggleButton/Toggle";

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubCategoryOpen, setIsSubCategoryOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-2 grid lg:grid-cols-6">
        <div className=" lg:hidden flex justify-end items-center py-4">
          <div className="lg:px-2  ">
            <div className="p-2 py-3 border border-gray-300 rounded-lg cursor-pointer focus:scale-95 bg-gray-100">
              <p
                className="text-sm text-gray-700 px-2"
                onClick={() => setIsSubCategoryOpen(true)}
              >
                Add SubCategory
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <form className="">
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
          </form>
        </div>
        <div className=" max-lg:hidden lg:col-span-1  flex justify-start lg:justify-center items-center max-lg:mt-3">
          <div className="lg:px-2  ">
            <div className="p-2 py-3 border border-gray-300 rounded-lg cursor-pointer focus:scale-95 bg-gray-100">
              <p
                className="text-sm text-gray-700 px-2"
                onClick={() => setIsSubCategoryOpen(true)}
              >
                Add SubCategory
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-1 flex-grow ">
        <ListTable />
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
                placeholder="Category name"
              />
            </div>
            <div className="py-2">
              <p className="text-sm font-normal text-gray-800 p-1">
                Description{" "}
                <span className="text-sm font-light text-gray-800">{`(Optional)`}</span>
              </p>
              <input
                type="text"
                className="border rounded-lg bg-gray-100 p-2 text-sm w-full"
                placeholder="Sub Category Description"
              />
            </div>
            <div className="py-2">
              <p className="text-sm font-normal text-gray-800 p-1">
                Parent Category
              </p>
              <input
                type="text"
                className="border rounded-lg bg-gray-100 p-2 text-sm w-full"
                placeholder="Parent Category Name "
              />
            </div>
            <div className="py-3">
              <p className="text-sm font-normal text-gray-800 p-1">
                Sub Category Status
              </p>
              <Toggle />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-lg shadow-sm hover:scale-105"
                onClick={() => setIsSubCategoryOpen(false)}
              >
                Cancel
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:scale-105">
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
