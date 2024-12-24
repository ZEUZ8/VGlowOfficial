"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function UserLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const isAuthRoutes = ["/admin/login"].includes(pathname);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    
    if (!token && !isAuthRoutes) {
      router.push("/admin/login");
    }

    if(token && user.user != 'admin'){
        router.push("/products")
    }

  }, [router, pathname]);
  return <div>{children}</div>;
}
