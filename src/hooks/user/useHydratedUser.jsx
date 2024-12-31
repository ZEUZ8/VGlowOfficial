/**
 * Custom hook: useHydratedUser
 *
 * Purpose:
 * - Retrieves the authentication token and user data from cookies (if available).
 * - Updates the React Query state with the retrieved user information.
 * - Assists with user authentication and authorization throughout the application.
 *
 * Usage:
 * - Call this hook at the top level of your components to ensure the user state
 *   is hydrated and synchronized with the server-side cookies.
 * - Helps maintain a seamless authenticated experience for users.
 *
 * Notes:
 * - Ensure cookies are set correctly to allow the hook to retrieve the token and user.
 * - Works in conjunction with React Query for state management.
 */

import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";

const useHydratedUser = () => {
  const queryClient = useQueryClient();

  function getUser(){
    const user = Cookies.get("user")
    return  user ? JSON.parse(user) : null
  }
  function getToken(){
    return Cookies.get("token") ?? null
  }


  // Hydrate the React Query cache from localStorage on initial render
  useEffect(() => {
    const storedUser = getUser()
    const storedToken = getToken()

    if (storedUser && storedToken) {
      // Set the query data for 'user' and 'token' in React Query cache
      queryClient.setQueryData("user", storedToken);
      queryClient.setQueryData("token", storedToken);
    }
  }, [queryClient]);

  return useQuery({
    // Use useQuery for the 'user' data from React Query cache
    queryKey: ["user"],
    queryFn: () => {
      const token = getToken()
      const user = getUser()
      return {token,user}
    },
    initialData: () => {
      const token = getToken()
      const user = getUser()
      return { user, token };
    },
  });
};

export default useHydratedUser;
