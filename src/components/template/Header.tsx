import {
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Logo from "./Logo";
import Link from "next/link";
import menuItemContent from "@/contants/menu-item-constants";
import MenuItem from "./MenuItem";

export default function Header() {
  return (
    <header className="flex justify-between items-center gap-5 px-5 bg-zinc-700 h-20 border-b-2 border-zinc-600">
      <Logo />
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
        <Link href="https://www.instagram.com/lucasmontano/" target="_blank">
          <IconBrandInstagram />
        </Link>
      </div>
    </header>
  );
}
