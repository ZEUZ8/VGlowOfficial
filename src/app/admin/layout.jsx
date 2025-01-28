"use client";
import React, { useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar/AppSidebar";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <main>
      <SidebarProvider className=" p-2 ">
        <AppSidebar />
        <div>
          <div className="py-4 px-3   border-gray-400 flex justify-between w-[80vw]">
            <div className="flex justify-center items-center">
              <div className="md:hidden">
                <SidebarTrigger />
              </div>
              <div><Link href='/admin'>Home</Link></div>
            </div>
            <div>
              night mode
            </div>
          </div>
          {children}
        </div>
      </SidebarProvider>
    </main>
  );
}
