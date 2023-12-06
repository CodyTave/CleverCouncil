"use client";
import SearchInput from "@/app/Components/SearchInput";
import algoliasearch from "algoliasearch";
import { useState } from "react";
import FormationCard from "../categorie/[slug]/Components/FormationCard";
import Link from "next/link";
import Image from "next/image";
import { noresult } from "@/assets";
interface Formation {
  id: number;
  title: string;
  profilImage: string;
  shortDescription: string;
  duration: string;
  durationType: string;
  link: string;
}
export default function Search({
  searchParams,
}: {
  searchParams?: { query: string | undefined };
}) {
  const [Results, setResults] = useState<Formation[]>([]);
  const client = algoliasearch(
    "GZO7ZC5AI7",
    "da5c67edc8f02316b00b2e7cb5eb567c"
  );
  const index = client.initIndex("formations");

  index
    .search(searchParams?.query || "")
    .then(({ hits }: any) => {
      setResults(hits);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="grid gap-10 my-24 sm:px-32 xs:px-20 px-5">
      <h1 className="text-4xl font-black uppercase text-aca-0">
        Recherche Formations
      </h1>
      <SearchInput searchParams={searchParams} />
      {Results.length === 0 ? (
        <div className=" text-2xl font-black text-secondary-0">
          <span>{"AUCUN RÉSULTATS DE RECHERCHE"}</span>
          <Image className="sm:w-1/3 mx-auto mt-10" alt="" src={noresult} />
        </div>
      ) : (
        <div className="grid mxl:grid-cols-2 gap-5">
          {Results.map((hit) => (
            <Link href={"formation/" + hit.link}>
              <FormationCard form={hit} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
