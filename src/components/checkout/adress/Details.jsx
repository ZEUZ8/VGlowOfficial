import React from "react";
import Price from "./Price";


const Details = () => {
  return (
    <div className=" max-md:p-3 md:pt-4 md:pl-3 ">
      <div>
        <div className="py-2">
          <p className="text-sm font-semibold text-gray-600">
            DELIVERY ESTIMATES
          </p>
        </div>
        <div className=" flex justify-start items-center py-3 border-b border-dashed ">
          <img
            src="/cream2.png"
            className="object-contain w-[3rem] h-[3rem]"
            alt="productImg"
          />
          <p className="text-sm font-normal flex justify-start items-center gap-1 ">
            Estimated delivery by{" "}
            <p className="text-sm font-semibold">11 Sep 2024</p>
          </p>
        </div>
        <div className=" flex justify-start items-center py-2  ">
          <img
            src="/cream2.png"
            className="object-contain w-[3rem] h-[3rem]"
            alt="productImg"
          />
          <p className="text-sm font-normal flex justify-start items-center gap-1 ">
            Estimated delivery by{" "}
            <p className="text-sm font-semibold">11 Sep 2024</p>
          </p>
        </div>
        <div>
            <Price/>
        </div>
      </div>
    </div>
  );
};

export default Details;
