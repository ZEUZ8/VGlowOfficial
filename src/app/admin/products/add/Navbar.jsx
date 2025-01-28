"use client";
import React, { useEffect } from "react";
import { Store, StickyNote, SquareCheckBig } from "lucide-react";

const Navbar = ({ handleSubmit }) => {
  return (
    <div>
      <div className="flex justify-between py-3 ">
        <div className="flex justify-center items-center">
          <div>
            <Store className="mx-2 h-5 w-5" />
          </div>
          <p className="text-center font-normal">Add New Product</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="flex justify-center items-center border border-black rounded-xl p-2 px-3 gap-1 cursor-pointer ">
            <div>
              <StickyNote className="w-4 h-4 " />
            </div>
            <div>
              <p className="text-sm ">Save Draft</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="flex justify-center items-center border border-black rounded-xl p-2 px-3 gap-1 cursor-pointer "
          >
            <div>
              <SquareCheckBig className="w-4 h-4 " />
            </div>
            <div>
              <p className="text-sm ">Add Product</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
