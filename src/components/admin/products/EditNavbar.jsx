"use client";
import React, { useEffect, useState } from "react";
import {
  Store,
  StickyNote,
  SquareCheckBig,
  CloudUpload,
  Pencil,
} from "lucide-react";
import { usePathname } from "next/navigation";

const EditNavbar = ({ handleSubmit }) => {
  const pathName = usePathname();
  const [editStatus, setEditStatus] = useState(null);

  useEffect(() => {
    setEditStatus(pathName.includes("edit"));
  }, []);

  return (
    <div>
      <div className="flex justify-between py-3 ">
        <div className="flex justify-center items-center">
          <div>
            {editStatus ? (
              <Pencil className="mx-2 h-5 w-5" />
            ) : (
              <Store className="mx-2 h-5 w-5" />
            )}
          </div>
          <p className="md:text-center font-normal text-xs md:text-sm lg:text-base">
            {editStatus ? "Edit Product" : "Ad new Product"}
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="flex justify-center items-center border border-black rounded-xl p-2 px-2 sm:px-3 gap-1 cursor-pointer ">
            <div>
              <StickyNote className="w-3 md:w-4 h-3 md:h-4 " />
            </div>
            <div>
              <p className="text-xs sm:text-sm ">Save Draft</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="flex justify-center items-center border border-black rounded-xl p-2 px-2 sm:px-3 gap-1 cursor-pointer "
          >
            <div>
              <CloudUpload className="w-4 h-4 " />
            </div>
            <div>
              <p className="text-xs sm:text-sm ">Update Product</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditNavbar;
