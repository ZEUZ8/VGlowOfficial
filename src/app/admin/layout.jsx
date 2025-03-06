"use client";
import React, { useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar/AppSidebar";
import Link from "next/link";
import { SunMoon } from "lucide-react";

export default function Layout({ children }) {
  return (
    <main className="w-full bg-gray-50">
      <SidebarProvider className="">
        <AppSidebar />
        <div className="w-full">
          <div className="">{children}</div>
        </div>
      </SidebarProvider>
    </main>
  );
}
