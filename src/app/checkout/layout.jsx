'use client'
import Navigator from "@/components/bag/Navigator";
import React from "react";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
    const pathname = usePathname();
    const path = pathname.split('/')
  return (
    <>
      <Navigator path={path[path.length-1]}/>
      <main>{children}</main>
    </>
  );
}
