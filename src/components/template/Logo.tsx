import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex gap-2 sm:gap-2">
        <span className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-red-500"></span>
        <span className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-green-500"></span>
        <span className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-blue-500"></span>
      </div>
    </Link>
  );
}
