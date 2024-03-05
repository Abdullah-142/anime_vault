import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-hero bg-center bg-cover sm:py-16 bg-no-repeat lg:px-16 px-8 w-full py-16">
      <div className="grid lg:grid-cols-2  gap-10 items-center ">
        <div className="flex flex-col gap-10 ">
          <Image
            src="/logo.svg"
            width={100}
            height={67}
            alt="Logo"
            className="object-contain"
          />
          <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
            Explore The <span className="red-gradient">Diverse Realms</span> of
            Anime Magic
          </h1>
        </div>
        <div className="h-[50vh] w-full relative ">
          <Image src="/anime.png" fill alt="Hero" className="object-contain" />
        </div>
      </div>
    </div>
  );
}
