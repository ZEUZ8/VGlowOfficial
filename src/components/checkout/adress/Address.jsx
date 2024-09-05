import React from "react";

const Address = ({ options }) => {
  return (
    <div
      className="border border-gray-100 hover:border-gray-300 flex gap-4  rounded-md p-3 mb-4 shadow3 "
    >
      <div className="">
        <input
          type="radio"
          className="text-red-500 bg-pink-950-500 border-green-400 text-xs"
        />
      </div>
      <div>
        <div className="flex justify-start items-center gap-3">
          <p className="text-sm font-semibold ">sinan</p>
          <div className="border border-green-500  px-2  rounded-full">
            <p className="text-green-500 font-medium text-xs py-[3px]">Home</p>
          </div>
        </div>
        <div className="py-5 px-1">
          <p className="text-xs font-light max-w-[300px]">
            Focus, kinfra Building, kakkanchery, calicut, Kakkancheri
          </p>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-xs font-extralight max-w-[300px]">Mobile : </p>
          <p className="text-xs  font-semibold text-gray-700">8590183715</p>
        </div>
        {options && (
          <>
            <ul className="list-disc py-3 pl-3">
              <li className="text-sm font-extralight">
                Cash on delivery available
              </li>
            </ul>
            <div className=" w-full flex justify-start items-center gap-3 py-2">
              <div className="border p-1 px-3 rounded-md border-gray-500">
                <p className="text-sm font-medium">Remove</p>
              </div>
              <div className="border p-1 px-3 rounded-md border-gray-500">
                <p className="text-sm font-medium">Edit</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Address;
