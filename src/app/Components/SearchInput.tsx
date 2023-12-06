"use client";
import { searchIcon } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function SearchInput({
  searchParams,
}: {
  searchParams?: { query: string | undefined };
}) {
  const [query, setQuery] = useState(searchParams?.query || "");
  const router = useRouter();
  const path = usePathname();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    router.push(path + "?query=" + query);
  }

  return (
    <div className="mb-10 flex justify-center ">
      <form
        onSubmit={handleSubmit}
        className="flex justify-between items-center bg-aca-1 mxl:w-1/2 w-full gap-2 h-14 pl-3 "
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Recherche votre formation"
          className="bg-aca-1 w-full h-full px-1 text-light-0 focus:outline-none  placeholder:text-light-0/80"
        />
        <Link
          href={{ query: { query: query } }}
          className="hover:bg-secondary-0 h-full px-4 flex items-center justify-center"
        >
          <Image className="w-6 h-6" alt="" src={searchIcon} />
        </Link>
      </form>
    </div>
  );
}
