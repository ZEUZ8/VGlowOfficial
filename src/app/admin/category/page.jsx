"use client";
import ListTable from "@/components/admin/category/ListTable";
import React, { useEffect, useState } from "react";
import Toggle from "./toggleButton/toggle";
import Button from "./submitButton/Button";

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
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
                placeholder="Category Description"
              />
            </div>
            <div className="py-3">
              <p className="text-sm font-normal text-gray-800 p-1">
                Category Status
              </p>
              <Toggle />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-lg shadow-sm hover:scale-105"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:scale-105">
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
