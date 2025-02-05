"use client";
import Link from "next/link";
import React, { useState } from "react";
import Navbar from "./add/Navbar";
import {
  ChevronDown,
  CloudUpload,
  IndianRupee,
  LayoutPanelTop,
  Pencil,
  Search,
  Settings2,
  ShoppingCart,
  Star,
  Trash2,
} from "lucide-react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const { data } = await axios.get("/api/products");
  return data;
};

const page = () => {
  const handleDelete = () => {
    console.log("clicked the handel dlete button");
    toast.success("Item Deleted");
  };

  // const {
  //   data: products,
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: fetchProducts,
  // });

  // if (isError) {
  //   console.log(isError, "the error");
  // }

  const list = [34, 3453, 53, 35, 23, 5, 2353];
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        
        <div className="max-lg:hidden flex justify-between py-3  px-2 pr-3">
          <div className="flex justify-center items-center">
            <div>
              <ShoppingCart className="mx-2 h-5 w-5" />
            </div>
            <div className="relative">
              <input
                placeholder="Search"
                type="text"
                className=" px-3 py-2 bg-gray-100 rounded-lg placeholder:text-sm text-sm"
              />
              <p className="absolute right-2 bottom-0 m-1 top-0  flex justify-end items-center">
                <Search className="w-4 h-4 text-gray-700" />
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <div className="flex justify-center items-center border border-gray-700 text-gray-700 rounded-xl py-2 px-3 cursor-pointer text-sm">
              <select
                name="sort"
                id=""
                className="ring-0 focus:ring-0 focus:outline-none"
              >
                <option value="" disabled="disabled" selected={true}>
                  sort by
                </option>
                <option value="chumma">chumma</option>
                <option value="chumma">chumma</option>
                <option value="chumma">chumma</option>
                <option value="chumma">chumma</option>
                <option value="chumma">chumma</option>
              </select>
            </div>

            <div className="flex justify-center items-center border border-gray-700 text-gray-700 rounded-xl p-2 gap-1 cursor-pointer text-sm">
              <p>Price Range</p>
              <p>
                <Settings2 className="w-4 h-4" />
              </p>
            </div>

            <div className="flex justify-center items-center border border-gray-700 text-gray-700 rounded-xl p-2 gap-2 cursor-pointer text-sm">
              <p className="text-sm">Category</p>
              <p>
                <LayoutPanelTop className="w-4 h-4" />
              </p>
            </div>

            <div className="flex justify-center items-center border border-gray-700 text-gray-700 rounded-xl p-2  gap-1 cursor-pointer ">
              <div>
                <Trash2 className="w-4 h-4 " />
              </div>
              <div>
                <p className="text-sm ">Delete</p>
              </div>
            </div>

            {/* <Link
              href="/admin/products/add"
              type="button"
              className="flex justify-center items-center border border-gray-700 text-gray-700 rounded-xl p-2 px-3 gap-2 cursor-pointer "
            >
              <div>
                <CloudUpload className="w-4 h-4 " />
              </div>
              <div>
                <p className="text-sm 00">Add New</p>
              </div>
            </Link> */}
          </div>
        </div>
      </div>

      <div className="p-2 ">
        <div className="">
          {/* <div>
            <div className="flex items-center">
              <div>
                <input type="checkbox" />
              </div>
              <div></div>
            </div>
          </div> */}
          <div class="relative overflow-x-auto h-[100vh]">
            <div>
              {list.map((item, i) => (
                <div
                  key={i}
                  class="max-lg:hidden relative overflow-x-auto  rounded-lg border  mb-2 "
                >
                  <div className="flex items-center justify-between gap-3  p-3 ">
                    <div className="flex items-center gap-3">
                      <div>
                        <input type="checkbox" />
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        <div className="w-[4rem] h-[4rem]  rounded-lg overflow-hidden">
                          <img
                            src="/rashi.png"
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium ">Face Wash</p>
                          <p className="text-xs font-light">
                            Minimalist Vitamince c Foaming Face Wash
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-center items-center gap-2">
                        <div className="p-1 px-2 bg-gray-200 border border-gray-200 rounded-md">
                          <p className="text-[.65rem]  text-gray-600">
                            Skin Care
                          </p>
                        </div>
                        <div className="p-1 px-2 bg-gray-200 border border-gray-200 rounded-md">
                          <p className="text-[.65rem]  text-gray-600">
                            Face Wash
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-center items-center gap-2">
                        <div className="p-1 px-2 bg-green-400 border border-green-400 rounded-full">
                          <p className="text-[.65rem]  text-black">30gm</p>
                        </div>
                        <div className="p-1 px-2 bg-green-400 border border-green-400 rounded-full">
                          <p className="text-[.65rem]  text-black">50gm</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center items-center">
                      <p>
                        <IndianRupee className="w-4 h-4 text-gray-700 " />
                      </p>
                      <p className="font-sans text-gray-700">599</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">304</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">{item}</p>
                    </div>

                    <div className="flex justify-center items-center gap-1 ">
                      <p>
                        <Star
                          className="w-3 h-3 "
                          fill="#FFD700"
                          stroke="#FFD700"
                        />
                      </p>
                      <p>
                        <Star
                          className="w-3 h-3 "
                          fill="#FFD700"
                          stroke="#FFD700"
                        />
                      </p>
                      <p>
                        <Star
                          className="w-3 h-3 "
                          fill="#FFD700"
                          stroke="#FFD700"
                        />
                      </p>
                      <p>
                        <Star className="w-3 h-3 " stroke="#708090" />
                      </p>
                    </div>

                    <div className="flex justify-center items-center gap-2 cursor-pointer mr-4 ">
                      <Link href='/admin/products/edit/45'>
                      <div className=" border rounded-md bg-gray-200  p-2">
                        <p>
                          <Pencil className="w-4 h-4 text-black" />
                        </p>
                      </div></Link>
                      <div className="border rounded-md bg-gray-200 p-2">
                        <p>
                          <Trash2 className="w-4 h-4 text-black" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:hidden ">
              {list.map((item, i) => (
                <div
                  key={i}
                  class="relative overflow-x-auto shadow-md rounded-lg border  mb-2 max-[100vw]"
                >
                  <div className="grid gap-2 p-3 ">
                    <div>
                      <input type="checkbox" />
                    </div>
                    <div className="flex justify-start items-center gap-2">
                      <div className="w-[4rem] h-[4rem]  rounded-lg overflow-hidden">
                        <img
                          src="/rashi.png"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium ">Face Wash</p>
                        <p className="text-xs font-light">
                          Minimalist Vitamince c Foaming Face Wash
                        </p>
                      </div>
                    </div>
                    <div className="col-span-1 flex justify-between items-center ">
                      <div>
                        <div className="flex justify-center items-center gap-2">
                          <div className="p-1 px-2 bg-gray-200 border border-gray-200 rounded-md">
                            <p className="text-[.65rem]  text-gray-600">
                              Skin Care
                            </p>
                          </div>
                          <div className="p-1 px-2 bg-gray-200 border border-gray-200 rounded-md">
                            <p className="text-[.65rem]  text-gray-600">
                              Face Wash
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-center items-center gap-2">
                          <div className="p-1 px-2 bg-green-400 border border-green-400 rounded-full">
                            <p className="text-[.65rem]  text-black">30gm</p>
                          </div>
                          <div className="p-1 px-2 bg-green-400 border border-green-400 rounded-full">
                            <p className="text-[.65rem]  text-black">50gm</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 py-3 ">
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600">Price</p>
                        <div className="flex items-center">
                          <p>
                            <IndianRupee className="w-4 h-4 text-gray-700 " />
                          </p>
                          <p className="font-sans text-gray-700">599</p>
                        </div>
                      </div>

                      <div className="py-1 flex items-center justify-between">
                        <p className="text-sm text-gray-600">Stock</p>
                        <p className="text-sm text-gray-600">304</p>
                      </div>

                      <div className="py-1 flex items-center justify-between">
                        <p className="text-sm text-gray-600">Sku</p>
                        <p className="text-sm text-gray-600">{item}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center ">
                      <div className="flex justify-center items-center gap-1 ">
                        <p>
                          <Star
                            className="w-3 h-3 "
                            fill="#FFD700"
                            stroke="#FFD700"
                          />
                        </p>
                        <p>
                          <Star
                            className="w-3 h-3 "
                            fill="#FFD700"
                            stroke="#FFD700"
                          />
                        </p>
                        <p>
                          <Star
                            className="w-3 h-3 "
                            fill="#FFD700"
                            stroke="#FFD700"
                          />
                        </p>
                        <p>
                          <Star className="w-3 h-3 " stroke="#708090" />
                        </p>
                        <p className="text-gray-700 text-xs">3</p>
                      </div>
                      <div className="flex justify-center items-center gap-2 cursor-pointer">
                        <Link href="/admin/products/add">
                          <div className=" border rounded-md bg-gray-200  p-2">
                            <p>
                              <Pencil className="w-4 h-4 text-black" />
                            </p>
                          </div>
                        </Link>
                        <div
                          className="border rounded-md bg-gray-200 p-2 "
                          onClick={handleDelete}
                        >
                          <p>
                            <Trash2 className="w-4 h-4 text-black" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
