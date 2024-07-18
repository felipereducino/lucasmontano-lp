"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  path: string;
  children: React.ReactNode;
}

export default function MenuItem(props: MenuItem) {
  const pathname = usePathname();
  const isActive = pathname === props.path;

  return (
    <Link
      href={props.path}
      className={`flex items-center gap-2 rounded-md px-4 py-2 ${
        isActive ? "bg-blue-500" : "hover:bg-blue-500"
      }`}
    >
      {props.children}
    </Link>
  );
}
