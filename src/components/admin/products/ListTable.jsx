"use client";
import {
  ArrowDownUp,
  ChevronDown,
  Link,
  ListFilter,
  Plus,
  RefreshCw,
  Search,
  Trash2,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import DeleteModal from "../deleteModal/DeleteModal";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";

const softDelete = async (id) => {
  const { data } = await axios.patch(`/api/admin/products/delete/${id}`);
  return data;
};

export default function ListTable({ productList }) {
  const queryclient = useQueryClient();
  const pathName = usePathname();
  const router = useRouter();

  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [options, setOptions] = useState([
    "All",
    "Active",
    "Draft",
    "Archived",
  ]);
  const [selectedOption, setSelectedOption] = useState([]);

  const { mutate } = useMutation({
    mutationFn: (productId) => softDelete(productId),
    onSuccess: (data) => {
      if (data?.msg == "product disabled" || "product recovered") {
        queryclient.invalidateQueries(["products"]);
        toast.success(data?.msg);
      }
    },
  });

  const handleDelete = (item) => {
    mutate(item?._id);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedCheckboxes([]);
    } else {
      setSelectedCheckboxes(productList.map((item) => item._id));
    }
    setSelectAll(!selectAll);
  };

  const handleCheckboxChange = (id) => {
    setSelectedCheckboxes((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg  border bg-white">
      <div class="lg:pb-4  dark:bg-gray-900  p-2 px-3 flex justify-between items-center ">
        {search ? (
          <div class="relative flex-1 mt-1 ">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none ">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              class="block  p-1 ps-10 text-sm w-full text-gray-900 border  rounded-lg  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        ) : (
          <div
            // key="components"
            initial={{ opacity: 0, y: 10 }} // Start below
            animate={{ opacity: 1, y: 0 }} // Normal position
            exit={{ opacity: 0, y: -10 }} // Move up on exit
            transition={{ duration: 0.3, ease: "easeOut" }}
            className=""
          >
            <div className="flex justify-start items-center gap-2">
              {options?.map((item) => (
                <div
                  className={`cursor-pointer py-1 px-3 rounded-lg ${
                    selectedOption.includes(item) ? "bg-gray-100" : "bg-white"
                  }`}
                  onClick={() =>
                    setSelectedOption((prev) =>
                      prev.includes(item)
                        ? prev.filter((selected) => selected !== item)
                        : [...prev, item]
                    )
                  }
                >
                  <p className="text-xs">{item}</p>
                </div>
              ))}
              <div className={`cursor-pointer   rounded-lg`}>
                <p className="text-xs">
                  <Plus className="w-4 h-4 text-gray-800" />
                </p>
              </div>
            </div>
          </div>
        )}

        <div>
          <div className="flex justify-start items-center gap-2">
            {!search ? (
              <div
                className="border border-gray-100 rounded-lg p-1  flex justify-center items-center gap-1 shadow-md active:shadow-inner cursor-pointer"
                onClick={() => setSearch((prev) => true)}
              >
                <Search className="w-4 h-4 text-gray-700" />
                <ListFilter className="w-4 h-4 text-gray-700" />
              </div>
            ) : (
              <div className="flex justify-center items-center gap-1 mx-2 ">
                <div
                  className=" border-gray-200 rounded-lg hover:bg-gray-100 text-xs py-1 px-2 cursor-pointer"
                  onClick={() => setSearch(false)}
                >
                  Cancel
                </div>
                <div className=" border-gray-200 bg-gray-100 rounded-lg  text-xs py-1 px-2 cursor-pointer">
                  Save as
                </div>
              </div>
            )}

            <div className="border border-gray-100 rounded-lg p-1 cursor-pointer shadow-md active:shadow-inner">
              <ArrowDownUp className="w-4 h-4 text-gray-700" />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {search && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="border-t border-gray-200 p-2 "
          >
            <div className="flex  justify-start items-center gap-2">
              <div className="border border-gray-300 rounded-lg border-dashed py-1 px-2 w-fit flex justify-between items-center gap-1">
                <p className="text-xs text-gray-600">Type</p>
                <p>
                  <ChevronDown className="h-4 w-4" />
                </p>
              </div>
              <div className="border border-gray-300 rounded-lg border-dashed py-1 px-2 w-fit flex justify-between items-center gap-1">
                <p className="text-xs text-gray-600">Vendor</p>
                <p>
                  <ChevronDown className="h-4 w-4" />
                </p>
              </div>
              <div className="border border-gray-300 rounded-lg border-dashed py-1 px-2 w-fit flex justify-between items-center gap-1">
                <p className="text-xs text-gray-600">Type</p>
                <p>
                  <ChevronDown className="h-4 w-4" />
                </p>
              </div>
              <div className="border border-gray-300 rounded-lg border-dashed py-1 px-2 w-fit flex justify-between items-center gap-1">
                <p className="text-xs text-gray-600">Add filter</p>
                <p>
                  <Plus className="h-4 w-4" />
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        <motion.table
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
          class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="no-edit w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="w-10 p-2"></th>
              <th scope="col" class="p-2">
                Category Name
              </th>
              <th scope="col" class="p-2">
                Status
              </th>
              <th scope="col" class="p-2">
                Inventory
              </th>
              <th scope="col" class="p-2">
                Category
              </th>
              <th scope="col" class="p-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {productList?.length > 0 &&
              productList.map((item, index) => (
                <tr
                  key={item?._id}
                  onClick={(e) => {
                    if (!e.target.closest(".no-edit")) {
                      router.push(`/admin/products/edit/${item?._id}`);
                    }
                  }}
                  className={`${
                    productList?.length > 1 && "border-b"
                  } dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 ${
                    item?.isDeleted && " opacity-45 "
                  }`}
                >
                  <td class="w-4 p-2">
                    <div class="flex items-center justify-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        checked={selectedCheckboxes.includes(item._id)}
                        onChange={() => handleCheckboxChange(item._id)}
                        class="no-edit w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-1" class="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  {/* <th
                  scope="row"
                  class="bg-red-500 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="h-[2rem] w-[2rem]">
                    <img src="/onRock.png" className="rounded-md" alt="" />
                  </div>
                </th> */}
                  <th className="p-2">
                    <div className="h-[3rem] w-[3rem]">
                      <img
                        src={item?.images[0]}
                        className="rounded-md object-cover w-full h-full"
                        alt=""
                      />
                    </div>
                  </th>
                  <th
                    scope="row"
                    class="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {/* {item?.productName} */}
                    <div className="relative">
                      <div className=" group max-w-[150px] overflow-hidden truncate whitespace-nowrap">
                        {item?.productName}

                        <div className="absolute left-0 top-full mt-1 opacity-0 invisible group-hover:opacity-100  group-hover:visible transition-opacity duration-200 bg-gray-500 text-white text-xs rounded-md p-1 px-2 w-max min-w-[200px] z-50 shadow-lg">
                          {item?.productName}
                        </div>
                      </div>
                    </div>
                  </th>
                  {/* <td class="px-6 py-4">sinan</td> */}
                  <td class=" py-2 px-3">
                    <div className="">
                      <p
                        className={`border px-2 rounded-full w-fit  text-black font-light text-xs py-[1px] ${
                          !item?.isActive
                            ? "border-green-200 bg-green-300 bg-opacity-80"
                            : "bg-blue-200 border-blue-200"
                        }`}
                      >
                        {!item?.isActive ? "Active" : "Draft"}
                      </p>
                    </div>
                  </td>

                  <td class="py-2">
                    <div>
                      <p
                        className={` px-2  text-black font-light py-[1px] ${
                          item?.stock < 1 && "text-red-700"
                        }`}
                      >
                        {item?.stock} <span>in stock</span>
                      </p>
                    </div>
                  </td>

                  <td class="py-2">
                    <div>
                      <p className={` px-2  text-black font-light py-[1px] `}>
                        {item?.category} <span> / </span>{" "}
                        <span>{item?.subCategory}</span>
                      </p>
                    </div>
                  </td>

                  <td class=" py-2 ">
                    {/* <div className="flex justify-center items-center "> */}
                    <p
                      class="not-edit font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer px-4 "
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(item);
                      }}
                    >
                      {item?.isDeleted ? (
                        <RefreshCw className="h-4 w-4 text-blue-600 " />
                      ) : (
                        <Trash2 className="h-4 w-4 text-red-700" />
                      )}
                    </p>
                    {/* </div> */}
                  </td>
                </tr>
              ))}
          </tbody>
        </motion.table>
      </AnimatePresence>
    </div>
  );
}
