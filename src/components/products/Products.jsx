import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { LiaStarHalfAltSolid } from "react-icons/lia";

const Products = ({image,i}) => {
  const [hover,setHover] = useState(false);

  const handleHover = ()=>{
    setHover(prev => true)
  }
  return (
    <div onMouseEnter={handleHover} className={`border border-gray-300 rounded-md h-[20rem] grid grid-rows-10 cursor-pointer  `}>
      <div className="flex justify-center items-center row-span-6   overflow-hidden">
        <img
          src={image}
          className="rounded-lg max-h-[100%] pt-1 w-fit object-contain lg:hover:scale-110 transition-transform ease-out duration-200 "
          alt="proudct Image"
        />
      </div>
      <div className="p-1 row-span-4 ">
        <p className="font-semibold max-md:text-sm">VGlow</p>
        <p className="py-1 text-xs lg:text-sm max-w-[100px] sm:max-w-[150px] md:max-w-[200px] xl:max-w-[300px] overflow-hidden text-ellipsis whitespace-nowrap ">Vlgow face whitening cream</p>
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
