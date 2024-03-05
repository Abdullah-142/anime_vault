import Loader from "./_components/Loader";
import { getanime } from "./action";
export default async function page() {
  const data = await getanime(1);
  return (
    <div className="sm:p-16 px-8 py-16">
      <h1 className="text-3xl font-bold ">Explore Anime</h1>
      <section className="grid gap-8 grid-cols-1 py-9 justify-center lg:grid-cols-4 sm:grid-cols-2">
        {data}
      </section>
      <Loader />
    </div>
  );
}
