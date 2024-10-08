import Address from "@/components/checkout/adress/Address";
import Details from "@/components/checkout/adress/Details";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const page = () => {
  return (
    <div className=" grid justify-center mx-auto">
      <div className="md:flex ">
        <div className="col-span-5 col-start-3   p-2 pt-4">
          <div className="flex justify-between items-center">
            <div className="">
              <p className="font-semibold text-gray-800 text-md">
                Select Delivery Address
              </p>
            </div>
            <div className="border border-gray-900 rounded py-1 lg:py-2 px-2 lg:px-3 cursor-pointer">
              <p className="text-xs font-semibold  text-gray-700">
                ADD NEW ADDRESS
              </p>
            </div>
          </div>
          <div className="py-4">
            <p className="text-[.8rem] font-semibold text-gray-600">
              DEFAULT ADDRESS
            </p>
          </div>

          <Address options={true} />

          <div className="py-3 mb-2">
            <p className="text-[.8rem] font-semibold text-gray-600">
              OTHER ADDRESS
            </p>
          </div>
          <Address />
          <Address />
          <div className="p-4  rounded border border-dashed flex justify-start items-center gap-2 border-red-500">
            <p className="text-red-500 font-medium text-sm">
              <FaPlus />
            </p>
            <p className="text-red-500 font-medium text-sm">Add New Address</p>
          </div>
        </div>
        <hr className="md:hidden my-3 border-gray-300 mx-1"/>
        <div className="col-span-3   lg:border-s md:pl-4 md:ml-4">
          <Details />
        </div>
      </div>
    </div>
  );
};

export default page;
