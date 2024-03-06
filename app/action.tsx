
import AnimeCard, { Anime } from "./_components/AnimeCard";

export const getanime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await response.json();

  return data.map((data: Anime, index: number) => (
    <AnimeCard key={data.id} index={index} anime={data} />
  ));
};
