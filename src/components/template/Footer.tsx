export default function Footer() {
  return (
    <footer>
      <div className="flex justify-end items-center gap-2 bg-zinc-700 text-zinc-400 text-sm border-t-2 border-zinc-600 px-5 py-2 md:h-14 md:py-0">
        <span>
          Desenvolvido por &lt;ReducinoDev /&gt; - {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
