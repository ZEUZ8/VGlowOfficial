import Link from "next/link";
import React from "react";
import Navbar from "./add/Navbar";
import { CloudUpload, ShoppingCart,Trash2 } from "lucide-react";

const page = () => {
  return (
    <div className="">
      <div>
        <div className="flex justify-between py-3 ">
          <div className="flex justify-center items-center">
            <div>
              <ShoppingCart className="mx-2 h-5 w-5" />
            </div>
            <input type="search" />
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="flex justify-center items-center border border-gray-700 text-gray-700 rounded-xl p-2 px-3 gap-1 cursor-pointer ">
              <div>
                <Trash2 className="w-4 h-4 " />
              </div>
              <div>
                <p className="text-sm ">Delete</p>
              </div>
            </div>
            <Link href='/admin/products/add'
              type="button"
              className="flex justify-center items-center border border-gray-700 text-gray-700 rounded-xl p-2 px-3 gap-2 cursor-pointer "
            >
              <div>
                <CloudUpload className="w-4 h-4 " />
              </div>
              <div>
                <p className="text-sm 00">Add New</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
