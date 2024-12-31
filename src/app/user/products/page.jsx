"use client";
import Card from "@/components/products/Card";
import Products from "@/components/products/Products";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {

  const list = [
    "/product.png",
    "/product.png",
    "/cream2.png",
    "/cream2.png",
    "/product.png",
    "/product.png",
    "/product3.png",
    "/rashi.png",
    "/onRock.png",
  ];
  return (
    <div className="relative">
      <div className="grid grid-cols-12 ">
        {/* <div className="col-span-2 grid justify-center items-center  rounded-lg">
          filtering section
        </div> */}
        <div className="col-span-12 p-1 ">
          <div className="grid max-sm:hidden grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 items-center justify-start gap-5 flex-wrap py-1 px-5 ">
            <Card title={"New"} icon="new" />
            <Card title={"New"} icon="new" />
            <Card title={"New"} icon="new" />
            <Card title={"Best Seller"} icon="bestseller" />
            <Card title={"Face"} icon="woman" />
            <Card title={"Lip"} icon="sexy" />
          </div>
          <div className="flex justify-between items-center w-full  px-5 pt-3">
            <div>
              <p className="text-xs font-light">1200 Results</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-xs font-light">sorted by : </p>
              <p className="text-xs  font-extrabold ps-1">face cream</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4  xl:grid-cols-5 gap-5 p-2 lg:px-5   h-[calc(100vh-20vh)] overflow-y-auto">
            {list.map((item, i) => (
              <div key={i}>
                <Link href="/user/product/0">
                  <Products image={item}  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
