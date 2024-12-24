"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function UserLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const isAuthRoutes = ["/login", "/signup", "/products", "/product"].includes(pathname);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    console.log('user layout--- token', token)
    if (!token && !isAuthRoutes) {
      console.log("user without token");
      router.push("/user/login");
    }
  }, []);
  return <div>{children}</div>;
}
