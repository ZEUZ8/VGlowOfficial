"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineCurrencyRupee } from "react-icons/md";

export default function Payment(){
  const methods = ["gpay", "phonepe", "paytm", "other"];
  const [select, setSelect] = useState("");
  return (
    <div>
      <div className=" grid justify-center  py-2 my-1  mx-auto">
        <div className="grid lg:grid-cols-10 bg-white mx-auto">
          <div className="lg:col-span-3 lg:col-start-3   max-lg:px-4 p-2 pt-4 ">
            <div className="">
              <p className="font-semibold text-gray-800 text-md py-2">
                Choose Payment Method
              </p>
            </div>
            <div>
              <div className="border">
                <div className=" mb-2 py-2 px-3 grid md:grid-cols-2 justify-around items-center gap-3 ">
                  <div className="border  rounded w-full flex justify-center items-center py-1 overflow-hidden h-[3rem] cursor-pointer">
                    <img
                      src="/paytm.png"
                      className="w-full h-full object-contain"
                      alt=""
                    />
                  </div>
                  <div className="border  rounded w-full flex justify-center items-center  overflow-hidden h-[3rem] cursor-pointer ">
                    <img src="/gpay.png" className=" object-contain " alt="" />
                  </div>
                  <div className="border h-[3rem] cursor-pointer p-7  rounded w-full flex justify-center items-center py-1 overflow-hidden">
                    <img
                      src="/phonepe.png"
                      className="  object-cover "
                      alt=""
                    />
                  </div>
                  <div className="border h-[3rem] cursor-pointer   rounded w-full flex justify-center items-center py-1 overflow-hidden">
                    <p className="text-xs xl:text-sm font-bold text-blue-400 ">OTHER UPI</p>
                  </div>
                </div>
                <div className=" ">
                  <p className="text-sm font-semibold text-gray-500 py-3 px-2">
                    Pay using Phonepe
                  </p>
                  <div className="p-2">
                    <div className="p-2 w-full bg-rose-500 text-center rounded cursor-pointer">
                      <p className="text-white font-bold ">pay now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3  lg:border-s max-lg:px-5 lg:pl-4 lg:ml-4">
            <div className="">
              <div className="my-4">
                <p className="font-medium text-gray-500 text-sm">
                  {`PRICE DETAILS (2 items)`}
                </p>
              </div>
              <div className="mb-4">
                <div className="flex justify-between items-center text-sm mb-2">
                  <div className="text-gray-800 font-normal">Total MRP</div>
                  <div className="text-gray-800 font-normal flex justify-center items-center font-mono">
                    <p className="">
                      <MdOutlineCurrencyRupee />
                    </p>
                    <p>1499</p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center text-sm mb-2">
                  <div className="text-gray-800 font-normal">Plantform Fee</div>
                  <div className="text-gray-800 font-normal font-mono">20</div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between items-center text-sm ">
                  <div>
                    <div className="text-gray-800 font-normal">
                      Shipping Fee
                    </div>
                  </div>
                  <div className="text-green-500 font-normal">FREE</div>
                </div>
                <p className="text-gray-600 font-light text-[10px] mb-2">
                  free shipping for you
                </p>
              </div>
              <hr className="my-4" />
              <div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600 font-medium font-sans">
                    Total Amount
                  </p>
                  <div className="flex justify-center items-center">
                    <p className="pl-1">
                      <MdOutlineCurrencyRupee />
                    </p>
                    <p className="text-gray-600 font-medium font-mono">1020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
