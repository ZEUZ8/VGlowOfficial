import React, { useState } from "react";

export default function Navigator({ path }) {
  console.log(path,'the patgeh')
  return (
    <div className="flex justify-center items-center py-2">
      <div className="flex justify-around items-center gap-3">
        <div className="flex justify-center items-center gap-2">
          <p
            className={`text-gray-500 text-sm cursor-default ${
              path === "cart" && " underline underline-offset-4 text-green-500"
            }`}
          >
            BAG
          </p>
          <hr className="w-[3rem] border-dashed border-black" />
        </div>
        <div className="flex justify-center items-center gap-2">
          <p
            className={`text-gray-500  text-sm cursor-default ${
              path === "address" &&
              " underline underline-offset-4 text-green-500"
            }`}
          >
            ADDRESS
          </p>
          <hr className="w-[3rem] border-dashed border-black" />
        </div>
        <div className="flex justify-center items-center gap-2">
          <p
            className={`text-gray-500  text-sm cursor-default ${
              path === "payment" &&
              " underline underline-offset-4 text-green-500"
            }`}
          >
            PAYMENT
          </p>
        </div>
      </div>
    </div>
  );
}
