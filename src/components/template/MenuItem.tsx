"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  path: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function MenuItem({ path, children, onClick }: MenuItemProps) {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      onClick={onClick}
      className={`flex items-center gap-2 rounded-md px-4 py-2 ${
        isActive ? "bg-blue-500" : "hover:bg-blue-500"
      }`}
    >
      {children}
    </Link>
  );
}
