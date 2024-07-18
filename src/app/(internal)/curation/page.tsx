import Link from "next/link";
import currentBooks from "@/contants/books-constants";
import lifeTimeBooks from "@/contants/life-time-books-contants";

export default function Curation() {
  return (
    <section className="flex items-center flex-col gap-10">
      <h1 className="font-black text-3xl">Procurando indicações?</h1>
      <h2>
        Nota: Tudo que tu encontrar de link aqui embaixo, eu ganho algo de
        alguma forma se tu clicar. Eu recomendo apenas comprar se tu estava
        pensando em fazer isso mesmo e quer apoiar o canal!
      </h2>
      <h3 className="text-lg font-black">Livros que vou ler em 2024</h3>
      <ul className="text-lg list-disc px-10 md:min-w-935px">
        {currentBooks.map((item, index) => (
          <li key={index}>
            <Link href={item.path} target="_blank" className="text-blue-600">
              {item.bookName}{" "}
            </Link>
            {item.author}
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-black">
        Abaixo uma lista de livros que eu li durante a vida, eu recomendo
        comprar um{" "}
        <Link
          href="https://www.amazon.com.br/s?k=Kindle&i=digital-text&camp=1789&creative=9325&linkCode=ur2&linkId=a96949b7784d7908d8d65a2190ece81c&tag=lucasmontan05-20"
          target="_blank"
          className="text-blue-600"
        >
          Kindle.{" "}
        </Link>
        Foi uma das melhores compras que já fiz.
      </h3>
      <ul className="text-lg list-disc px-10 md:min-w-935px">
        {lifeTimeBooks.map((item, index) => (
          <li key={index}>
            <Link href={item.path} target="_blank" className="text-blue-600">
              {item.bookName}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
