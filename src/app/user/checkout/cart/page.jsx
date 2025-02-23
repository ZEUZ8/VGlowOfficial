"use client";
import BagItem from "@/components/bag/BagItem";
import Navigator from "@/components/bag/Navigator";
import React, { useState } from "react";
import { RiCoupon2Line } from "react-icons/ri";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Link from "next/link";

const page = () => {
  return (
    <div className=" grid justify-center  py-2 my-1  mx-auto">
      <div className="grid lg:grid-cols-10 bg-white mx-auto">
        <div className="lg:col-span-6 p-2">
          <div className="p-4 flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <input type="checkbox" className="cursor-pointer" />
              <p className="text-sm font-light">2/2</p>
              <p className="text-sm font-light">items</p>
            </div>
            <div>
              <p className="text-xs font-light cursor-pointer ">REMOVE</p>
            </div>
          </div>
          <BagItem />
          <BagItem />
          <BagItem />
          <BagItem />
        </div>

        <div className="lg:col-span-4 lg:border-s pt-5 p-4  ">
          <div className="mb-3">
            <div>
              <p className="text-gray-500 font-medium text-sm">Coupons</p>
            </div>
            <div className="py-1 flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <p>
                  <RiCoupon2Line />
                </p>
                <p className="text-black text-sm font-medium">Apply Coupon</p>
              </div>
              <div className="px-3 py-1 border border-red-500 rounded-sm cursor-pointer w-fit">
                <p className="text-sm font-medium text-red-400">APPLY </p>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="my-4">
            <p className="font-medium text-gray-500 text-sm">PRICE DETAILS</p>
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
              <div className="text-gray-800 font-normal">Discount on MRP</div>
              <div className="font-normal flex justify-center items-center font-mono text-green-500">
                <p>-</p>
                <p className="">
                  <MdOutlineCurrencyRupee />
                </p>
                <p className="font-mono">499</p>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center text-sm mb-2">
              <div className="text-gray-800 font-normal">Coupon Discount</div>
              <div className="text-gray-800 font-normal  font-mono">
                <p className="text-rose-500">Apply Coupon</p>
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
                <div className="text-gray-800 font-normal">Shipping Fee</div>
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
          <div className="bg-red-50 my-4">
            <Link href="/user/checkout/address">
              <div className="p-2 bg-rose-500  rounded-sm flex justify-center items-center cursor-pointer ">
                <p className="text-white font-medium  ">Place Order</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
