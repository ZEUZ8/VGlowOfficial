import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const useHydratedUser = () => {
  const queryClient = useQueryClient();

  // Hydrate the React Query cache from localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      // Set the query data for 'user' and 'token' in React Query cache
      queryClient.setQueryData("user", JSON.parse(storedUser));
      queryClient.setQueryData("token", storedToken);
    }
  }, [queryClient]);

  return useQuery({
    // Use useQuery for the 'user' data from React Query cache
    queryKey: ["user"],
    queryFn: () => {
      const token = localStorage.getItem("token")
      const user = JSON.parse(localStorage.getItem("user")) || null
      return {token,user}
    },
    initialData: () => {
      const token = localStorage.getItem("token")
      const user = JSON.parse(localStorage.getItem("user")) || null
      return { user, token };
    },
  });
};

export default useHydratedUser;
