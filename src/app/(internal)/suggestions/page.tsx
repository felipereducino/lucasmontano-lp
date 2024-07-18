import Link from "next/link";

export default function Suggestions() {
  return (
    <section className="flex items-center flex-col gap-10">
      <h1 className="font-black text-3xl">
        Quer mandar sugestão de artigos e tópicos?
      </h1>
      <h2 className="text-xl px-10">
        Manda direto pro{" "}
        <Link
          href="https://chatgpt.com/g/g-IaNiHmwSC-the-tony"
          target="_blank"
          className="text-blue-600"
        >
          Tony{" "}
        </Link>
        que nós vamos selecionar os melhores para gravar o próximo video.
      </h2>
    </section>
  );
}
