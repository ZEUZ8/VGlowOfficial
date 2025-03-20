"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "./add/Navbar";
import {
  ChevronDown,
  CloudUpload,
  IndianRupee,
  LayoutPanelTop,
  Pencil,
  RotateCcw,
  Search,
  Settings2,
  ShoppingCart,
  Star,
  Trash2,
} from "lucide-react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ListTable from "@/components/admin/products/ListTable";

const fetchProducts = async () => {
  const { data } = await axios.get("/api/admin/products/get");
  return data;
};
const softDelete = async (id) => {
  const { data } = await axios.patch(`/api/admin/products/delete/${id}`);
  return data;
};

const page = () => {
  const [productList, setProductList] = useState([]);
  const productId = "679dd05be5ee9ef1d2ffe0d5";
  const queryclient = useQueryClient();

  const { data } = useQuery({ queryKey: ["products"], queryFn: fetchProducts });

  useEffect(() => {
    if (data?.products) {
      setProductList(data?.products);
    }
  }, [data]);

  // use this in the fute muc more easier and faster right now just complete and later implent tis ************
  // const mutation = useMutation({
  //   mutationFn: (productId) => softDeleteProduct(productId),
  //   onMutate: (deletedProductId) => {
  //     queryClient.setQueryData(["products"], (oldProducts) =>
  //       oldProducts.filter((product) => product.id !== deletedProductId)
  //     );
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["products"]); // Fetch fresh data
  //   },
  // });

  const { mutate } = useMutation({
    mutationFn: (productId) => softDelete(productId),
    onSuccess: (data) => {
      if (data?.msg == "product disabled" || "product recovered") {
        queryclient.invalidateQueries(["products"]);
        toast.success(data?.msg);
      }
    },
  });

  const handleDelete = () => {
    mutate(productId);
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <div className="max-lg:hidden flex justify-between pb-3 pt-5  px-5">
          <div className="flex justify-center items-center">
            {/* <div>
              <ShoppingCart className="mx-2 h-5 w-5" />
            </div>
            <div className="relative border rounded-lg border-gray-200">
              <input
                placeholder="Search"
                type="text"
                className=" px-3 py-2 bg-white rounded-lg placeholder:text-sm text-sm"
              />
              <p className="absolute right-2 bottom-0 m-1 top-0  flex justify-end items-center">
                <Search className="w-4 h-4 text-gray-700" />
              </p>
            </div> */}
            <h1 className="text-xl font-medium font-sans text-gray-900">Products </h1>
          </div>

          <div className="flex justify-center items-center gap-2">
            <div className="flex justify-center items-center border border-gray-700 text-gray-700 rounded-lg px-2 py-1 gap-1 cursor-pointer text-sm">
              <p>Price Range</p>
            </div>

            <div className="flex justify-center items-center border border-gray-700 text-gray-700 rounded-lg px-2 py-1 gap-2 cursor-pointer text-sm ">
              <p className="text-sm active:shadow-md active:scale-90">
                Category
              </p>
            </div>

            <div className="text-center border border-gray-500 text-gray-700 rounded-lg  py-1 px-2 cursor-pointer bg-gray-800">
              {/* <div className="flex justify-center items-center border border-gray-700 text-gray-700 rounded-xl p-2  gap-1 cursor-pointer "> */}
              {/* <div>
                <Trash2 className="w-4 h-4 " />
              </div> */}
              <div>
                <p className="text-sm text-white active:shadow-inner">
                  Add product
                </p>
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

      <div className="p-4 ">
        <div className="">
          <div class="relative overflow-x-auto h-[90vh] scrollbar-hide">
            <ListTable productList={productList} handleDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
