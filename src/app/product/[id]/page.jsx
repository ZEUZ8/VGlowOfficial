"use client";
import React from "react";
import "./style.css";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";

const page = () => {
  return (
    <div className="">
      {/* <div className="col-span-1 flex flex-col gap-2  items-center p-2 ">
        <img
          src="/onRock.png"
          className="w-[5rem] h-[5rem] rounded-md border cursor-pointer object-contain"
          alt=""
        />
        <img
          src="/product.png"
          className="w-[5rem] h-[5rem] rounded-md border cursor-pointer object-contain"
          alt=""
        />
        <img
          src="/withGrape.png"
          className="w-[5rem] h-[5rem] rounded-md border cursor-pointer object-contain"
          alt=""
        />
        <img
          src="/rashi.png"
          className="w-[5rem] h-[5rem] rounded-md border cursor-pointer object-contain"
          alt=""
        />
      </div> */}
      <div className=" p-2">
        <div className=" rounded-lg grid lg:grid-cols-2  mb-4 ">
          <div className="grid grid-cols-2  gap-1 p-1">
            <div className="border border-gray-100 overflow-hidden img-container ">
              <img
                src="/rashi.png"
                className="product-img w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="border border-gray-100 overflow-hidden img-container ">
              <img
                src="/onRock.png"
                className="product-img w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="border border-gray-100 overflow-hidden img-container ">
              <img
                src="/withGrape.png"
                className="product-img w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="border border-gray-100 overflow-hidden img-container ">
              <img
                src="/product.png"
                className="product-img w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
          <div className=" p-2 px-4">
            <div className="py-4">
              <h2 className="text-2xl font-semibold">Vglow </h2>
            </div>
            <div>
              <p className="font-light text-xl">
                Absolute Perfect Radiance SPF 20 PA ++ Skin Lightening Light
                Creme 50 g
              </p>
            </div>
            <div className="border rounded-sm my-2 mb-4 p-1 px-2 flex justify-center items-center w-fit h-fit">
              <p className="text-base">4.4</p>
              <p className="pb-[6px] p-1">
                <IoIosStar className="text-green-600" />
              </p>
              <p className="px-2">|</p>
              <p className="text-sm">5.6k Rating</p>
            </div>

            <hr className="line" />
            <div className="flex items-center gap-2 py-5">
              <div className="flex justify-center items-center ">
                <p className="text-xl font-bold text-gray-800">$</p>
                <p className="text-xl font-bold text-gray-800">999</p>
              </div>
              <div className="flex justify-center items-center">
                <p className=" font-light px-1">MRP</p>
                <p className="font-light line-through">$1499</p>
              </div>
              <div>
                <p className="text-base font-semibold text-orange-400">{`(40% oFF)`}</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-green-500">
                inclusive of all taxes
              </p>
            </div>
            <div className="py-4">
              <p className="text-sm font-bold">Select Size</p>
              <div className="py-2">
                <div className="flex justify-center items-center rounded-xl border border-black w-fit p-1 px-3">
                  <p className="font-sans">100</p>
                  <p className="font-sans">g</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2  py-3 pb-5">
              <div className=" border  rounded-md p-2 flex justify-center items-center shadow-special2 bg-rose-500 cursor-pointer">
                <p className="text-white font-semibold">ADD TO BAG</p>
              </div>
              <div className=" border rounded-md p-2 flex justify-center items-center shadow-special2 cursor-pointer">
                <Link href="/checkout/cart">
                  {" "}
                  <p className=" font-semibold">BUY </p>
                </Link>
              </div>
            </div>

            <hr />

            <div className="py-2">
              <div className="py-2 flex justify-start items-center gap-2 ">
                <h1 className="text-lg font-bold">Delivery Options</h1>
                <img src="/truck.gif" className="h-[3rem] w-[3rem]" alt="" />
              </div>
              <div className="w-fit ">
                <div className="flex justify-start items-center">
                  <div className="border   p-2 rounded-md">
                    <input
                      type="number"
                      placeholder="pincode"
                      className="placeholder:text-gray-500 placeholder:font-mono placeholder:text-sm outline-none appearance-none w-fit"
                    />
                    <button className="font-semibold text-rose-500">
                      search
                    </button>
                  </div>
                </div>
                <div>
                  <p className="font-thin text-xs py-2">
                    Please enter PIN code to check delivery time & Pay on
                    Delivery Availability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="grid md:grid-cols-2 p-2 gap-2">
          <div className="">
            <div className="py-2 flex justify-start items-center gap-2 ">
              <h1 className="text-lg font-bold">Product Details</h1>
              <img src="/list.png" className="h-[1rem] w-[1rem]" alt="" />
            </div>
            <div className="">
              <div className="py-3">
                <p className="font-semibold py-1">what it is ?</p>
                <p className="text-sm font-light">
                  Perfect Radiance Skin Lightening Light creme
                </p>
              </div>

              <div className="py-3">
                <p className="font-semibold py-1">
                  Suitable for which Skin Type?
                </p>
                <p className="text-sm font-light">Combination</p>
              </div>

              <div className="py-3">
                <p className="font-semibold py-1">What it does?</p>
                <p className="text-sm font-light">
                  Polishes your skin and the skin lightening vitamins brightens
                  it Provides sun protection with SPF 20 PA ++ Ideal for
                  removing tan from your skin and giving it a lighter and
                  clearer tone
                </p>
              </div>

              <div className="py-3">
                <p className="font-semibold py-1">Size & Fit</p>
                <p className="text-sm font-light">50 g</p>
              </div>

              <div className="">
                <p className="font-semibold py-1">What it does?</p>
                <div className="grid grid-cols-2">
                  <div className="">
                    <div className="py-3">
                      <p className="text-xs font-extralight">Concern</p>
                      <p className="text-base font-light pb-2">Anti-Ageing</p>
                      <hr className="w-[70%] " />
                    </div>
                  </div>
                  <div className="">
                    <div className="py-3">
                      <p className="text-xs font-extralight">Concern</p>
                      <p className="text-base font-light pb-2">Anti-Ageing</p>
                      <hr className="w-[70%]  " />
                    </div>
                  </div>
                  <div className="">
                    <div className="py-3">
                      <p className="text-xs font-extralight">Concern</p>
                      <p className="text-base font-light pb-2">Anti-Ageing</p>
                      <hr className="w-[70%]  " />
                    </div>
                  </div>
                  <div className="">
                    <div className="py-3">
                      <p className="text-xs font-extralight">Concern</p>
                      <p className="text-base font-light pb-2">Anti-Ageing</p>
                      <hr className="w-[70%]  " />
                    </div>
                  </div>
                  <div className="">
                    <div className="py-3">
                      <p className="text-xs font-extralight">Concern</p>
                      <p className="text-base font-light pb-2">Anti-Ageing</p>
                      <hr className="w-[70%]  " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-2">
            <div className="flex justify-start items-center gap-2">
              <p className="text-lg font-semibold py-1 font-serif">Ratings </p>
              <IoIosStar />
            </div>
            <div className=" flex justify-start items-center">
              <div className="w-fit grid gap-2">
                <div className="flex justify-center items-center">
                  <p className="text-xl font-semibold">4.4 </p>
                  <IoIosStar />
                </div>
                <div>
                  <p className="text-xs font-light">5.4 verified Buyers</p>
                </div>
              </div>
              <hr className="rotate-90 border-black  w-[10%]" />
              <div>
                <div className="grid gap-1 py-3">
                  <div className="flex justify-start items-center">
                    <p className="text-xs font-thin">5</p>
                    <p className="text-xs font-thin">
                      <IoIosStar />
                    </p>
                    <div className=" w-[10rem] h-1 mx-2 rounded-md bg-gray-100">
                      <div className="w-[70%] bg-green-800 rounded-md h-full"></div>
                    </div>
                    <p className="text-xs">345</p>
                  </div>
                  <div className="flex justify-start items-center">
                    <p className="text-xs font-thin">5</p>
                    <p className="text-xs font-thin">
                      <IoIosStar />
                    </p>
                    <div className=" w-[10rem] h-1 mx-2 rounded-md bg-gray-100">
                      <div className="w-[60%] bg-green-700 rounded-md h-full"></div>
                    </div>
                    <p className="text-xs">345</p>
                  </div>
                  <div className="flex justify-start items-center">
                    <p className="text-xs font-thin">5</p>
                    <p className="text-xs font-thin">
                      <IoIosStar />
                    </p>
                    <div className=" w-[10rem] h-1 mx-2 rounded-md bg-gray-100">
                      <div className="w-[40%] bg-green-300 rounded-md h-full"></div>
                    </div>
                    <p className="text-xs">345</p>
                  </div>
                  <div className="flex justify-start items-center">
                    <p className="text-xs font-thin">5</p>
                    <p className="text-xs font-thin">
                      <IoIosStar />
                    </p>
                    <div className=" w-[10rem] h-1 mx-2 rounded-md bg-gray-100">
                      <div className="w-[20%] bg-orange-500 rounded-md h-full"></div>
                    </div>
                    <p className="text-xs">345</p>
                  </div>
                  <div className="flex justify-start items-center">
                    <p className="text-xs font-thin">5</p>
                    <p className="text-xs font-thin">
                      <IoIosStar />
                    </p>
                    <div className=" w-[10rem] h-1 mx-2 rounded-md bg-gray-100">
                      <div className="w-[10%] bg-rose-500 rounded-md h-full"></div>
                    </div>
                    <p className="text-xs">345</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" py-3">
                <p className="text-lg font-medium py-2">customer Images (36)</p>
                <div className="flex gap-2  items-center py-2">
                  <div>
                    <img
                      src="/product2.png"
                      className="w-[4rem] h-[4rem] object-contain "
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="/product3.png"
                      className="w-[4rem] h-[4rem] object-contain "
                      alt=""
                    />
                  </div>
                  <div className="relative">
                    <img
                      src="/product2.png"
                      className="w-[4rem] h-[4rem] object-contain opacity-25"
                      alt=""
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                      <p className="text-xs  "> 33+ more</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="py-2">
                  <p className="text-md font-semibold py-2">
                    Customer Reviews (467)
                  </p>
                </div>

                <div className="flex gap-3 py-2">
                  <div className="flex justify-center items-start">
                    <p className="text-xs font-medium font-mono">5</p>
                    <p>
                      <IoIosStar />
                    </p>
                  </div>
                  <div className="grid gap-3">
                    <p className="text-sm font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit consequuntur veritatis iste facere debitis
                      delectus eligendi ut nihil, magnam alias.
                    </p>
                    <div className="flex justify-between items-center  py-2">
                      <div>
                        <p className="text-sm font-light">Sarita Kumar</p>
                      </div>
                      <div className="flex justify-center items-center gap-3">
                        <p className="text-sm font-light">like </p>
                        <p className="text-sm font-light">dislike </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className=" my-2" />

                <div className="flex gap-3 py-2">
                  <div className="flex justify-center items-start">
                    <p className="text-xs font-medium font-mono">5</p>
                    <p>
                      <IoIosStar />
                    </p>
                  </div>
                  <div className="grid gap-3">
                    <p className="text-sm font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit consequuntur veritatis iste facere debitis
                      delectus eligendi ut nihil, magnam alias.
                    </p>
                    <div className="flex justify-between items-center  py-2">
                      <div>
                        <p className="text-sm font-light">Sarita Kumar</p>
                      </div>
                      <div className="flex justify-center items-center gap-3">
                        <p className="text-sm font-light">like </p>
                        <p className="text-sm font-light">dislike </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center ">
                  <p className="text-blue-500 font-semibold text-xs underline underline-offset-2">KNOW MORE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
