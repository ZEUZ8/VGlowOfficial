"use client";
import React, { useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar/AppSidebar";
import Link from "next/link";
import { SunMoon } from "lucide-react";

export default function Layout({ children }) {
  return (
    <main>
      <SidebarProvider className=" p-2 ">
        <AppSidebar />
        <div className="w-full">
          <div className="p-2 px-3 lg:py-4  border-gray-400 flex justify-between  ">
            <div className="flex justify-center items-center">
              <div className="md:hidden">
                <SidebarTrigger />
              </div>
              <div>
                <Link href="/admin">Home</Link>
              </div>
            </div>
            <div><SunMoon/></div>
          </div>
          <div className="">{children}</div>
        </div>
      </SidebarProvider>
    </main>
  );
}
