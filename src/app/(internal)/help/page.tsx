import Image from "next/image";
import Link from "next/link";
import sosRs from "../../../assets/sosRs.webp";

export default function HelpRs() {
  return (
    <section className="flex items-center flex-col gap-10">
      <h1 className="font-black text-3xl">AJUDA - RS 🧉</h1>
      <ul className="text-xl list-disc px-10">
        <li>
          Prestação de contas das doações nessa{" "}
          <Link
            href="https://docs.google.com/spreadsheets/d/1q4En143UD8Q7A-RbOigF9kZ-4_ITs7dmIC2bBn2-AXg/edit?gid=0#gid=0"
            target="_blank"
            className="text-blue-600"
          >
            planilha
          </Link>
        </li>
        <li>
          Se quiser doar ou levar itens para abrigos, acompanhe a lista de
          necessidades em{" "}
          <Link
            href="https://www.sos-rs.com/"
            target="_blank"
            className="text-blue-600"
          >
            SOS Rio Grande do Sul
          </Link>
        </li>
        <li>
          Existe uma iniciativa para centralizar informações para ajuda e alivio
          da enchente que pode ser acessado{" "}
          <Link
            href="https://bento.me/ajudars?s=08"
            target="_blank"
            className="text-blue-600"
          >
            aqui
          </Link>
        </li>
      </ul>
      <div className="flex justify-center">
        <Image src={sosRs} alt="Ajude - RS" width={700} height={270} />
      </div>
    </section>
  );
}
