import ListTable from "@/components/admin/category/ListTable";
import React from "react";
import Toggle from "./toggleButton/toggle";
import Button from "./submitButton/Button";

const page = () => {
  return (
    <div>
      <div className="px-1">
        <ListTable />
      </div>
      <div className="py-3 mb-4">
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
          <div className="w-full flex  justify-between">
            <div className=" pt-2">
              <p className="text-sm font-normal text-gray-800 p-1">
                Category Status
              </p>
              <div className=" w-fit px-1 py-2">
                <Toggle />
              </div>
            </div>
            <div className=" py-2 flex justify-center items-end">
              {/* <div className="flex justify-center items-center gap-2"> */}
                <div className="border rounded-lg px-4 py-2 bg-gray-200 border-gray-300 shadow-sm cursor-pointer ">
                  <p className=" font-medium text-gray-600 hover:scale-105 ">Add Category</p>
                </div>
                {/* <div className="">
                  <Button />
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
