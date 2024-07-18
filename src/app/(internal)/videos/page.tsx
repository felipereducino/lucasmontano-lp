"use client";

import { useEffect, useState } from "react";
import youtubeVideoLinks from "@/contants/videos-contants";
import Image from "next/image";
import Link from "next/link";

export default function Videos() {
  const [selectedLinks, setSelectedLinks] = useState<string[]>([]);

  useEffect(() => {
    const shuffledLinks = [...youtubeVideoLinks.url]
      .sort(() => 0.5 - Math.random())
      .slice(0, 9);
    setSelectedLinks(shuffledLinks);
  }, []);

  return (
    <section className="flex flex-col justify-center items-center gap-4">
      <h1 className="font-black text-4xl text-zinc-200">
        Tu quer assistir uns vídeos interessantes?
      </h1>
      <p className="text-zinc-400">
        Dica: se tu der um F5, novos vídeos vão aparecer
      </p>
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        {selectedLinks.map((link) => {
          const videoId = link.split("=")[1];
          const videoUrl = `https://www.youtube.com${link}`;
          return (
            <div key={link} className="">
              <Link href={videoUrl} target="_blank">
                <Image
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="Video Thumbnail"
                  loading="lazy"
                  width={320}
                  height={180}
                  className="rounded-xl"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
