"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoBagOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const routing = useRouter();
  return (
    <div className="flex justify-between items-center px-5 pt-5  ">
      <div
        className="bebas-neue-regular cursor-pointer text-black"
        onClick={() => routing.push("/")}
      >
        V Glow
      </div>
      <div className="flex items-center justify-start gap-4 text-gray-600 font-normal text-sm cursor-pointer">
        {/* <div>Usage</div> */}
        <div className="text-black active:scale-90 Line">
          <Link href="/user/products">
          <p className="text-lg pb-1">
            <IoMdHeartEmpty/>
          </p>
          </Link>
        </div>
      

        <div className="text-black active:scale-90 Line">
          <Link href="/user/login">
          <p className="text-lg pb-1"><IoPersonOutline/></p>
          </Link>
        </div>

        <div className="text-black active:scale-90 Line">
          <Link href="/user/about">
          <p className="text-xl pb-1 border-white text-gray-600">
            <IoIosSearch/>
          </p>
          </Link>
        </div>

        <div className="text-gray-700 active:scale-90 Line cursor-pointer">
          <Link href="/user/checkout/cart">
            <p className="text-lg pb-1">
              <IoBagOutline />
            </p>
          </Link>
        </div>
        {/* <div className="text-black active:scale-90 Line">
          <Link href="/user/login">Login</Link>{" "}
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
