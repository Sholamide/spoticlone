"use client";

import { usePathname } from "next/navigation";
import Box from "./Box";
import { useMemo } from "react";
import Image from "next/image";
import SidebarItem from "./SidebarItem";
import { BiSearch, HiHome } from "@/assets";
import Library from "./Library";
interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathName = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathName !== "/search",
        href: "/",
        icon: HiHome,
      },
      {
        label: "Search",
        active: pathName === "/search",
        href: "/search",
        icon: BiSearch,
      },
    ],
    [pathName]
  );
  return (
    <div className="flex h-full">
      <div className="w-[300px] p-2 h-full hidden md:flex gap-y-2 bg-black flex-col">
        <Box>
          <div className="flex flex-col px-3 py-4 gap-y-4">
            {routes.map((route) => (
              <SidebarItem key={route.label} {...route} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
