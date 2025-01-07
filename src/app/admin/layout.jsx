"use client";
import React, { useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar/AppSidebar"

export default function Layout({ children }) {
  return (
    <main>
      <SidebarProvider>
      <AppSidebar />
      <div>
        <div><SidebarTrigger /></div>
        {children}
      </div>
    </SidebarProvider>
    </main>
  )
}