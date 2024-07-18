import Link from "next/link";

export default function Classes() {
  return (
    <section className="flex items-center flex-col gap-10">
      <h1 className="font-black text-3xl">Quer ter aula comigo?</h1>
      <h2 className="text-xl">
        No Youtube temos a turma de membros que recebe acesso a vídeo aulas{" "}
        sobre algoritmos, estrutura de dados, POO e mais. torne-se membro para{" "}
        obter acesso clicando{" "}
        <Link
          href="https://www.youtube.com/channel/UCyHOBY6IDZF9zOKJPou2Rgg/join"
          target="_blank"
          className="text-blue-600"
        >
          aqui
        </Link>
        .
      </h2>
      <h2 className="text-xl">
        Se tu tá procurando o lugar certo para quem quer Desenvolver Aplicativos
        eu recomendo se inscrever{" "}
        <Link
          href="https://webinar.appacademy.dev/free"
          target="_blank"
          className="text-blue-600"
        >
          aqui
        </Link>
        .
      </h2>
    </section>
  );
}
