import { IconBrandDiscord } from "@tabler/icons-react";
import Link from "next/link";

export default function Community() {
  return (
    <section className="flex items-center flex-col gap-10">
      <h1 className="font-black text-3xl">Comunidade do Discord</h1>
      <h2 className="text-xl px-10 flex items-center gap-5">
        <Link
          href="https://discord.com/invite/cK8nSccsgD"
          target="_blank"
          className="text-blue-600"
        >
          Montano Community
        </Link>
      </h2>
    </section>
  );
}
