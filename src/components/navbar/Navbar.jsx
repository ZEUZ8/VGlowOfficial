"use client";
import React from "react";
import UserNavbar from "./UserNavbar";
import AdminNavbar from "../admin/AdminNavbar/AdminNavbar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  //getting the user from the path and conditionlay rendering the navbar for users and admin
  const getUserRole = () => {
    return pathname.startsWith("/admin");
  };
  const role = getUserRole();
  return <>{role === false && <UserNavbar /> }</>;
  // return <UserNavbar />;
};

export default Navbar;
