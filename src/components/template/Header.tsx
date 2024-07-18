"use client";

import { useState } from "react";
import Logo from "./Logo";
import SidebarMenu from "./SideBarMenu";
import menuItemContent from "@/contants/menu-item-constants";
import {
  IconBrandX,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Link from "next/link";
import MenuItem from "./MenuItem";
import useIsMobile from "@/hooks/useIsMobile";

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="flex justify-between items-center gap-5 px-5 bg-zinc-700 border-b-2 border-zinc-600 py-2 md:h-14 md:py-0">
        <Logo />
        {isMobile ? (
          <button className="sm:hidden text-white" onClick={toggleSidebar}>
            ☰
          </button>
        ) : (
          <>
            <nav className="flex p-5 gap-2">
              {menuItemContent.map((item, index) => (
                <MenuItem path={item.path} key={index}>
                  {item.icon}
                  <span>{item.title}</span>
                </MenuItem>
              ))}
            </nav>
            <div className="flex gap-10">
              <Link href="https://x.com/lucas_montano" target="_blank">
                <IconBrandX />
              </Link>
              <Link href="https://www.youtube.com/lucasmontano" target="_blank">
                <IconBrandYoutube />
              </Link>
              <Link
                href="https://www.instagram.com/lucasmontano/"
                target="_blank"
              >
                <IconBrandInstagram />
              </Link>
            </div>
          </>
        )}
      </header>
      <SidebarMenu isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
}
