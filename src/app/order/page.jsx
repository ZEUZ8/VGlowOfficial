"use client";
import React, { useState } from "react";

const Order = () => {
  const [select, setSelect] = useState(null);
  const [paymentMethods, setPaymentMethods] = useState([
    "paytm",
    "Google Pay",
    "Phone Pay",
    "Credit Card",
    "Debit Card",
  ]);
  const handleSelect = (i) => {
    setSelect(i);
  };
  return (
    <div className="h-[80vh] grid items-center p-[2rem] ">
      <div className="grid grid-cols-3 gap-5">
        <div className=" p-2 rounded-md ">
          <div className="flex flex-col gap-2 ">
            {paymentMethods.map((item, i) => (
              <div
                onClick={() => handleSelect(i)}
                className={`px-5 py-2 flex justify-center items-center border  shadow-sm rounded-md active:scale-90 cursor-pointer ${
                  select === i
                    ? `border-gray-700 bg-gray-800 text-white mx-2`
                    : `border-gray-300 hover:bg-gray-100`
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className=" col-span-2 rounded-md ">
          <div className="p-5">
            <div className="border">sinan in the cente</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
