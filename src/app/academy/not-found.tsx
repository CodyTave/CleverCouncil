import { notfound } from "@/assets";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "404 Page Introuvable",
};

export default function NotFound() {
  return (
    <div className="w-screem h-screen bg-aca-2 flex flex-col justify-center items-center gap-10">
      <Image alt="not found" src={notfound} />
      <Link
        prefetch
        className="bg-aca-0 hover:bg-aca-1 p-4 px-10 font-black text-light-0 uppercase transall"
        href="/academy"
      >
        {"Page d'accueil"}
      </Link>
    </div>
  );
}
