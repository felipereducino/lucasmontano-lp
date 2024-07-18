import {
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
import menuItemContent from "@/contants/menu-item-constants";
import MenuItem from "./MenuItem";
import Link from "next/link";

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SidebarMenu({ isOpen, onClose }: SidebarMenuProps) {
  return (
    <div
      className={`fixed inset-0 bg-zinc-700 z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <button className="absolute top-5 right-5 text-white" onClick={onClose}>
        X
      </button>
      <nav className="flex flex-col p-5 gap-2 mt-10">
        {menuItemContent.map((item, index) => (
          <MenuItem path={item.path} key={index} onClick={onClose}>
            {item.icon}
            <span>{item.title}</span>
          </MenuItem>
        ))}
      </nav>
      <div className="flex justify-end gap-10 mt-auto p-5">
        <Link href="https://x.com/lucas_montano" target="_blank">
          <IconBrandX />
        </Link>
        <Link href="https://www.youtube.com/lucasmontano" target="_blank">
          <IconBrandYoutube />
        </Link>
        <Link href="https://www.instagram.com/lucasmontano/" target="_blank">
          <IconBrandInstagram />
        </Link>
      </div>
    </div>
  );
}
