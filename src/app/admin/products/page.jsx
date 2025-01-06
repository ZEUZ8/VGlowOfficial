import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="m-4 bg-gray-400 w-fit rounded-md ">
      <Link href="/admin/products/add">
        <p className="p-2 border rounded-md border-gray-400 w-fit font-medium text-sm active:scale-90 bg-white" >Add Products</p>
      </Link>
    </div>
  );
};

export default page;
