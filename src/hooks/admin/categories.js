import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchCategories = async () => {
  const response = await axios.get("/api/admin/category");
  return response?.data;
};

const fetchSubCategories = async (parent, categoryList) => {
  const parentData = categoryList.find((item) => item.categoryName === parent);
  if (!parentData) return null;
  const response = await axios.get(`/api/admin/subCategory/get/${parentData?._id}`);
  return response?.data;
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};

export const useSubCategories = (parent, categoryList) => {
  return useQuery({
    queryKey: ["subCategories", parent],
    queryFn: () => fetchSubCategories(parent, categoryList),
    enabled: !!parent,
  });
};
