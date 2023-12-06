import SearchInput from "@/app/Components/SearchInput";
import FormationCard from "../categorie/[slug]/Components/FormationCard";
import Link from "next/link";
import Image from "next/image";
import { noresult } from "@/assets";
import { getSearchResults } from "@/app/Services/api";
export default async function Search({
  searchParams,
}: {
  searchParams?: { query: string | undefined };
}) {
  const Results = await getSearchResults({ query: searchParams?.query || "" });
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
          {Results.map((hit: any) => (
            <Link key={hit.id} href={"formation/" + hit.link}>
              <FormationCard form={hit} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
