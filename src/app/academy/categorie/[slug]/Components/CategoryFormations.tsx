import { getCategoryFormations } from "@/app/academy/Services/api";
import Link from "next/link";
import FormationCard from "./FormationCard";

export default async function CategoryFormations({ id }: { id: string }) {
  const Formations: {
    id: number;
    title: string;
    profilImage: string;
    shortDescription: string;
    duration: string;
    durationType: string;
    link: string;
  }[] = await getCategoryFormations(id);
  return (
    <div>
      <div className="grid  xxl:px-32 xl:px-24 mxl:px-12 lg:px-5 mlg:px-32 md:px-20 px-5 py-20 bg-aca-3 ">
        <div className="flex flex-col gap-10">
          <h1 className="sm:text-4xl tn:text-2xl font-black text-aca-0 uppercase">
            Spectre d&apos;intervention
          </h1>
          <div className="grid sm:gap-10 gap-5 lg:overflow-auto  pb-10 ">
            {Formations.map((form) => (
              <Link href={"/academy/formation/" + form.link} key={form.id}>
                <FormationCard form={form} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
