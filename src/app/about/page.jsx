"use client";
import React from "react";
import { TiArrowForwardOutline } from "react-icons/ti";

const About = () => {
  return (
    <div className="">
      <div>
        <div className="grid grid-cols-2">
          <div className=" col-span-1">
            {" "}
            <div className=" flex justify-center items-center">
              <h1 className="text-3xl font-bold text-gray-700 underline underline-offset-4">
                V Glow
              </h1>
            </div>
            <div className="p-3 px-5">
              <p>
                asdjflaksjdflkajsdf Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptates labore illum eligendi sit cumque
                ipsum ab maxime laboriosam tempore magnam!
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2  ">
          <div className="w-full col-span-1"></div>
          <div className=" col-span-1 flex justify-center items-center">
            <img src="/topcurved.png" className="h-[15rem] rounded-lg" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-red-500">
        <div className="grid grid-cols-2  ">
          <div className=" col-span-1 flex justify-center items-center">
            <img src="/topcurved.png" className="h-[15rem] rounded-lg" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="col-span-1"></div>
          <div className=" col-span-1">
            {" "}
            <div className=" flex justify-center items-center">
              <h1 className="text-3xl font-bold text-gray-700 underline underline-offset-4">
                V Glow
              </h1>
            </div>
            <div className="p-3 px-5">
              <p>
                asdjflaksjdflkajsdf Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptates labore illum eligendi sit cumque
                ipsum ab maxime laboriosam tempore magnam!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center">
          <p
            onClick={() => console.log("asldjfal")}
            className="text-2xl font-bold text-gray-700 py-2 flex justify-center items-center gap-2 cursor-pointer "
          >
            How To Use <TiArrowForwardOutline />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
