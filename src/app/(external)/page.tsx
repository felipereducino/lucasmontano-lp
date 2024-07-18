import { IconPackage } from "@tabler/icons-react";
import Link from "next/link";
import lucasmontano from "../../assets/lucasmontano.webp";
import Image from "next/image";

export default function Inicio() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-10">
      <Image
        src={lucasmontano}
        alt="Lucas Montano do canal Lucas Montano"
        height={600}
        width={368}
      />
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-black">
          Hey, Lucas Montano do canal Lucas Montano aqui! 👋
        </h1>
        <p className="text-lg text-zinc-400">Seja bem-vindo ao sistema!!!</p>
      </div>

      <Link href="/help" className="bg-blue-500 rounded-md px-4 py-2 mt-10">
        Entrar
      </Link>
    </div>
  );
}
