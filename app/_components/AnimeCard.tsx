import { FileStack, Star } from "lucide-react";
import Image from "next/image";
import { MotionDiv } from "./MotionDiv";
export interface Anime {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

export interface Props {
  anime: Anime;
  index: number;
}
const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
export default function AnimeCard({ anime, index }: Props) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: index * 0.25, ease: "easeInOut" }}
      className="max-w-sm  space-y-4 rounded relative w-full"
    >
      <div className="relative h-[37vh]  w-full">
        <Image
          fill
          src={`https://shikimori.one${anime.image.original}`}
          className="rounded-xl"
          alt={anime.name}
        />
      </div>
      <div className="flex justify-between gap-2 items-center">
        <h1 className="capitalize text-xl font-bold truncate">{anime.name}</h1>
        <div className="bg-slate-900 py-1 px-2 text-sm rounded-md">
          {anime.kind}
        </div>
      </div>
      <div>
        <div className="flex gap-1">
          <span>
            <FileStack className="text-red-500" />
          </span>
          <span>{anime.episodes}</span>
          <div className="text-yellow-600 ml-4 flex gap-2">
            <span>
              <Star />
            </span>
            <span>{anime.score}</span>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
