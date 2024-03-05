import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" bg-[#161921] flex justify-around py-8">
      <div>
        <h1>@All copyright recive Animevalut</h1>
      </div>
      <div>
        <Image src={"/logo.svg"} width={50} height={50} alt={"logo"} />
      </div>
      <div className="flex gap-3">
        <span>
          <Facebook />
        </span>
        <span>
          <Twitter />
        </span>
        <span>
          <Instagram />
        </span>
      </div>
    </footer>
  );
}
