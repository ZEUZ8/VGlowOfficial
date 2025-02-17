import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  ShoppingCart,
  ChartColumnStacked,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

import Toggle from "../toggle/Toggle";
import { useEffect, useState } from "react";
import { subMenuState } from "@/util/localStorage/subMenu";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Products",
    // url: "/pro",
    icon: ShoppingCart,
    submenu: [
      { title: "Analytics", url: "/admin/products/report" },
      { title: "Products", url: "/admin/products" },
      { title: "Add Products", url: "/admin/products/add" },
    ],
  },
  {
    title: "Category",
    url: "#",
    icon: ChartColumnStacked,
    submenu: [
      { title: "Categories", url: "/admin/category" },
      { title: "Sub Category", url: "/admin/category/subcategory" },
    ],
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
    // submenu: [],
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
    submenu: [
      { title: "Electronics", url: "/products/electronics" },
      { title: "Clothing", url: "/products/clothing" },
      { title: "Accessories", url: "/products/accessories" },
    ],
  },
];

export function AppSidebar() {
  const [openMenu, setOpenMenu] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setOpenMenu(localStorage.getItem("openMenu") || "");
    setIsClient(true);
  }, []);

  const handleMnenuClick = (title) => {
    const newOpenMenu = openMenu === title ? "" : title;
    setOpenMenu(newOpenMenu);
    localStorage.setItem("openMenu", newOpenMenu);
  };
  return (
    <div className="">
      <Sidebar>
        <SidebarHeader>
          <div className="pt-4 px-1 ">
            <h1 className="font-semibold text-2xl cursor-pointer">VGlow</h1>
          </div>
          <div>
            <p className="text-base font-light text-gray-300"></p>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Admin</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item, index) => (
                  <SidebarMenuItem key={index}>
                    {item.submenu ? (
                      <Collapsible
                        open={isClient && openMenu === item.title}
                        className="group/collapsible"
                      >
                        <CollapsibleTrigger asChild>
                          <div
                            className="flex justify-between items-center"
                            onClick={() => handleMnenuClick(item.title)}
                          >
                            <SidebarMenuButton>
                              <div className="grid grid-cols-2 justify-between items-center cursor-pointer">
                                <div className="flex items-center">
                                  <item.icon className="w-4 h-4 mr-2" />
                                  <span>{item.title}</span>
                                </div>
                                <span className="ml-2 flex justify-end">
                                  {/* ▼ or ▲ indicator */}
                                  {/* <p><ChevronDown className="h-3 w-3"/></p> */}
                                </span>
                              </div>
                            </SidebarMenuButton>
                            <ChevronDown
                              className={`ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180 h-5 w-4 font-bold text-gray-500 ${
                                isClient && openMenu === item.title
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.submenu.map((subItem, subIndex) => (
                              <SidebarMenuSubItem key={subIndex}>
                                <a
                                  href={subItem.url}
                                  className="block text-sm text-gray-600 hover:text-gray-900 pt-2 ps-2"
                                >
                                  {subItem.title}
                                </a>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <SidebarMenuButton asChild>
                        {/* <a href={item.url}>
                        <item.icon className="mr-2" />
                        <span>{item.title}</span>
                      </a> */}
                        <div className="flex items-center justify-between cursor-pointer">
                          <div className="flex items-center">
                            <item.icon className="w-4 h-4 mr-2" />
                            <span>{item.title}</span>
                          </div>
                        </div>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <div className="flex justify-between items-center p-2 m-1">
          <div>
            <p className="text-sm font-medium ">Theme</p>
          </div>
          <Toggle />
        </div>
        <SidebarFooter>
          <div className="mb-[1rem] p-1">
            <div className="  flex items-center gap-2">
              <div className="rounded-full h-[3rem] w-[3rem]  border bg-red-50 overflow-hidden">
                <img
                  src="/rashi.png"
                  className="w-full h-full object-cover"
                  alt="profile"
                />
              </div>
              <div className="grid grid-rows-2">
                <p className="text-sm font-medium ">Rashi</p>
                <p className="text-xs font-light">RashiRaz@gmail.com</p>
              </div>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}
