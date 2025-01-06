"use client";
import React, { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import Link from "next/link";

const AdminNavbar = () => {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // Save the theme to local storage
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  return (
    <div className="flex justify-between p-4 py-5 items-start">
      <div className="">
        {/* {page === "Home" ? ( */}
        <Link href="/admin">
          <div className="text-lg text-black dark:text-white hover:cursor-pointer">
            Home
          </div>
        </Link>
        {/* ) : (
          <div className="grid grid-flow-col font-extralightlight items-center gap-5">
            <p className="flex items-center text-2xl pt-1 text-black dark:text-white" onClick={()=>navigate(-1)}><MdArrowBack /> </p>
            <p className="font-extralight text-2xl text-black dark:text-white">{page}</p>
          </div>
        )} */}
      </div>
      <div className="flex gap-5 items-center ">
        <p className="text-sm text-[#FF1A1A] hover:cursor-pointer">Log Out</p>
        <p className="text-lg hover:cursor-pointer" onClick={toggleTheme}>
          {theme !== "light" ? (
            <p className="dark:text-white text-black">
              {" "}
              <FaMoon />
            </p>
          ) : (
            <LuSun />
          )}
        </p>
      </div>
    </div>
  );
};

export default AdminNavbar;
