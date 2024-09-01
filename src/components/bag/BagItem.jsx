import React from "react";
import { RxCross2 } from "react-icons/rx";

const BagItem = () => {
  return (
    <div className="border border-gray-300  rounded-md px-3 pt-3 flex justify-around mb-2">
      <div className="relative">
        <div className="absolute top-0 left-0">
          {" "}
          <input type="checkbox" />
        </div>
        <img
          src="/cream2.png"
          className="w-[15rem] h-[10rem] object-contain"
          alt=""
        />
      </div>
      <div className="w-full pt-1 px-1">
        <h2 className="font-bold text-sm py-1">VGlow</h2>
        <p className="max-w-[100px] sm:max-w-[200px] lg:max-w-[300px] truncate   text-xs font-light ">
          Everyday Glow+ Combo - Dewy Sunscreen 50g & Smoothie Face Wash 100ml
        </p>
        <div className="p-2 flex items-center gap-3">
          <div className=" bg-gray-50 border border-gray-100 rounded-md w-fit p-1 px-2">
            <p className="text-xs font-bold">size:50g</p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-md w-fit p-1 px-2">
            <p className="text-xs font-bold">Qty:1</p>
          </div>
        </div>
        <div className="py-3">
          <div className="flex justify-start items-center gap-2">
            <p className="text-sm font-bold">$999</p>
            <p className="text-sm font-light text-gray-500 line-through">
              $1500
            </p>
            <p className="text-xs font-light text-pink-400">23%OFF</p>
          </div>
        </div>
        <div className="py-2 ">
          <p className="font-bold text-xs ">Exchange Only</p>
        </div>
        {/* <div className="py-2">
        <p className="text-xs font-bold ">Delivery in 2-3 days</p>
      </div> */}
      </div>
      <div>
        <p className="p-2">
          <RxCross2 className="cursor-pointer"/>
        </p>
      </div>
    </div>
  );
};

export default BagItem;
