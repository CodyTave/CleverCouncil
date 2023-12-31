import { notfound } from "@/assets";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "404 Page Introuvable",
};

export default function NotFound() {
  return (
    <div className="w-screen h-screen bg-tech-2 flex flex-col justify-center items-center gap-10">
      <Image alt="not found" src={notfound} />
      <Link
        prefetch
        className="bg-tech-0 hover:bg-tech-1 p-4 px-10 font-black text-light-0 uppercase transall"
        href="/technology"
      >
        {"Page d'accueil"}
      </Link>
    </div>
  );
}
