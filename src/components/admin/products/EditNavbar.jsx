"use client";
import React, { useEffect, useState } from "react";
import {
  Store,
  StickyNote,
  SquareCheckBig,
  CloudUpload,
  Pencil,
  Trash2,
} from "lucide-react";
import { usePathname } from "next/navigation";

const EditNavbar = ({ handleSubmit }) => {
  const pathName = usePathname();
  const [editStatus, setEditStatus] = useState(null);

  useEffect(() => {
    setEditStatus(pathName.includes("edit"));
  }, []);

  return (
    <div className="bg-white rounded-lg">
      <div className="flex justify-between py-3 px-2 pr-5">
        <div className="flex justify-center items-center">
          <div>
            <Pencil className="mx-2 h-5 w-5" />
          </div>
          <p className="md:text-center font-medium text-sm lg:text-base">
            Edit Product
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="flex justify-center items-center border border-gray-400 rounded-lg py-1 px-2 gap-1 cursor-pointer ">
            <div>
              <Trash2 className="w-3 md:w-4 h-3 md:h-4 " />
            </div>
            <div>
              <p className="text-xs sm:text-sm ">Delete</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="flex justify-center items-center border border-gray-400 rounded-lg py-1 px-2 gap-1 cursor-pointer "
          >
            <div>
              <CloudUpload className="w-4 h-4 " />
            </div>
            <div>
              <p className="text-xs sm:text-sm ">Update</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditNavbar;
