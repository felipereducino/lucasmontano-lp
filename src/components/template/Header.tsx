import {
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Logo from "./Logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center gap-5 px-5 bg-zinc-700 h-20">
      <Logo />
      <span className="flex-grow">
        Hey, Lucas Montano do canal Lucas Montano aqui! 👋
      </span>
      <Link href="https://x.com/lucas_montano" target="_blank">
        <IconBrandX />
      </Link>
      <Link href="https://www.youtube.com/lucasmontano" target="_blank">
        <IconBrandYoutube />
      </Link>
      <Link href="https://www.instagram.com/lucasmontano/" target="_blank">
        <IconBrandInstagram />
      </Link>
    </header>
  );
}
