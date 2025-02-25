import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axios from "axios";
import { Trash } from "lucide-react";
import React from "react";

const Delete = async (api) => {
  console.log("conslling the value in teh console", api);
  const response = await axios.delete(api);
  console.log(response, "consoling the reponse the frontend");
  return response?.data;
};

const DeleteModal = ({ api, t }) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: () => Delete(api), // ✅ Pass function reference correctly
    onSuccess: (data) => {
      toast.dismiss();
      setTimeout(() => toast.dismiss(data?.msg), 2000);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to delete", { duration: 3000 });
    },
    onSettled: () => {
      queryClient.invalidateQueries(["categories"]); // Always refresh the category list
      queryClient.invalidateQueries(["suCategories"]); // Always refresh the category list
    },
  });

  const handleDelete = () => {
    toast.remove(t.id); // ✅ Close modal after deletion
    mutate();
  };

  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto  ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex p-4">
        <div className="bg-red-100 p-2 rounded-lg">
          <Trash className="h-4 w-4 text-red-700 font-medium" />
        </div>
      </div>
      <div className="px-4 ">
        <p className="">Are you sure you want to Delete </p>
        <p className="text-xs font-extralight py-1">
          This action cannot be undone.
        </p>
      </div>
      <div className="flex border-l border-gray-200 justify-end items-center gap-4 p-4">
        <button
          onClick={() => toast.remove(t.id)}
          className=" border border-gray-300 rounded-md p-2 px-3 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          Close
        </button>
        <button
          onClick={handleDelete}
          className=" border border-red-500 rounded-md p-2 px-3 flex items-center justify-center text-sm  bg-red-500 text-white hover:bg-white hover:text-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
