"use client";
import { Trash2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import DeleteModal from "../deleteModal/DeleteModal";

export default function ListTable({ categoryList,parent }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Last 30 days");

  const pathName = usePathname();

  const section = useMemo(() => {
    return pathName.includes("subcategory") ? "subCategory" : "category";
  }, [pathName]);

  const handleDelete = async (item) => {
    const api = `/api/admin/${section}/delete/${item._id}`;
    toast.remove("delete-toast");
    toast.custom((t) => <DeleteModal t={t} api={api} parent={parent} />, {
      id: "delete-toast",
    });
  };
  const handleEdit = (item) => {
    console.log("consling the edit", item);
  };

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-2">
      <div class="lg:pb-4  dark:bg-gray-900 ">
        <label for="table-search" class="sr-only">
          Search
        </label>
        <div class="relative mt-1 ">
          <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
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
            class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
          />
        </div>
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-all-search" class="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              Category Name
            </th>
            <th scope="col" class="px-6 py-3">
              Status
            </th>
            {categoryList?.subCategory && (
              <th scope="col" class="px-6 py-3">
                Sub Category
              </th>
            )}
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {categoryList?.length > 0 &&
            categoryList.map((item, index) => (
              <tr
                key={index}
                class={` bg-white ${
                  categoryList.length > 1 && "border-b"
                } dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600`}
              >
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-table-search-1" class="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item?.categoryName}
                </th>
                {/* <td class="px-6 py-4">sinan</td> */}
                <td class="px-6 py-4">
                  {item?.isActive ? (
                    <div>
                      <p className="border px-3 py-1 rounded-full w-fit border-green-400 text-green-500 font-medium">
                        Active
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="border px-3 py-1 rounded-full w-fit border-red-400 text-red-500 font-medium">
                        Inactive
                      </p>
                    </div>
                  )}
                </td>
                <td class="px-6 py-4">
                  <div className="flex justify-start items-center gap-3">
                    <p
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </p>
                    <p
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                      onClick={() => handleDelete(item)}
                    >
                      <Trash2 className="h-4 w-4 " />
                    </p>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
