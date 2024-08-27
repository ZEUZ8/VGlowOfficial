"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Clientcomponent = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/" && (
        <div className="absolute inset-0 top-0 left-0 flex items-center justify-end">
          <img
            src="/cream.png"
            className="max-h-[100vh] h-fit w-fit  -z-10 opacity-50  rotate-180"
            alt=""
          />
        </div>
      )}
    </>
  );
};

export default Clientcomponent;
