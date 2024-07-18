import { IconBrandDiscord } from "@tabler/icons-react";
import Link from "next/link";

export default function RemoiteWork() {
  return (
    <section className="flex items-center flex-col gap-10">
      <h1 className="font-black text-3xl">Trabalha remoto para os 🇺🇸?</h1>
      <h2 className="text-xl px-10 items-center gap-5">
        Recomendo utilizar a Higlobe para receber de clientes americanos. Eles
        possuem o menor custo total do mercado, apenas 0.5% em retiradas via PIX
        (maioria cobra de 1.5%-2.5%).
      </h2>
      <h2 className="text-xl px-10 gap-5">
        Receba um bonus de $50 USD na primeira transferência usando a Higlobe!
        Se tu se cadastrar com{" "}
        <Link
          href="https://higlobe.com/pt-br?grsf=lucas-rxrs9i&utm_source=influencers&utm_medium=influencers&utm_campaign=inf-lucas-youtube-12-18"
          target="_blank"
          className="text-blue-600"
        >
          esse link.
        </Link>
      </h2>
    </section>
  );
}
