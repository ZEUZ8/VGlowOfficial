import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { LiaStarHalfAltSolid } from "react-icons/lia";

const Products = ({image,i}) => {
  const [hover,setHover] = useState(false);
  const handleHover = ()=>{
    console.log(hover,' thel state in the consle')
    setHover(prev => true)
  }
  return (
    <div onMouseEnter={handleHover} className={`border border-gray-300 rounded-md h-[20rem] grid grid-rows-10 cursor-pointer  hover:scale-95 `}>
      <div className="flex justify-center items-center row-span-6   overflow-hidden">
        <img
          src={image}
          className="rounded-lg max-h-[100%] pt-1 w-fit "
          alt="proudct Image"
        />
      </div>
      <div className="p-1 row-span-4 max-h-[100%]">
        <p className="font-semibold ">VGlow</p>
        <p className="py-1 text-sm">Vlgow face whitening cream</p>
        <p className="text-xs font-thin">combo</p>
        <div className="flex justify-start items-center pt-1 ">
          <p className=" font-extralight text-xs"><IoIosStar/></p>
          <p className=" font-extralight text-xs"><IoIosStar/></p>
          <p className=" font-extralight text-xs"><IoIosStar/></p>
          <p className=" font-extralight text-xs"><IoIosStar/></p>
          <p className=" font-extralight text-xs"><LiaStarHalfAltSolid/></p>
        </div>
        <div className="flex justify-start items-center py-1">
          <p className="font-bold text-lg">$</p>
          <p className="text-lg font-bold ">999.00</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
