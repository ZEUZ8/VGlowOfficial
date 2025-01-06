"use client";
import React from "react";
import UserNavbar from "./UserNavbar";
import AdminNavbar from "../admin/AdminNavbar/AdminNavbar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const getUserRole = () => {
    if (pathname.startsWith("/admin")) {
      return "admin";
    }
    if (pathname.startsWith("/user")) {
      return "user";
    }
    return null;
  };
  const role = getUserRole();
  console.log(role,' the role in the console and ready to update ')

  return <>{role === "user" ? <UserNavbar /> : <AdminNavbar />}</>;
};

export default Navbar;
