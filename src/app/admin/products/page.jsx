import Link from "next/link";
import React from "react";
import Navbar from "./add/Navbar";

const page = () => {
  return (
    <div className="">
      <Navbar/>
      <Link href="/admin/products/add">
        <p className="p-2 border rounded-md border-gray-400 w-fit font-medium text-sm active:scale-90 bg-white" >Add Products</p>
      </Link>
    </div>
  );
};

export default page;
