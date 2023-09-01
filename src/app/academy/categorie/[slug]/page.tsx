/* eslint-disable @next/next/no-img-element */
import { getCategorie, getCategorieFormations } from "../../Services/Services";
import { ImageBaseUrl, LineDecoder } from "../../Constants/functions";
import FormationCard from "./Components/FormationCard";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  const Categorie = getCategorie(params.slug);
  const Formations = getCategorieFormations(Categorie?.id.toString() || "-1");
  return (
    <div className="grid lg:grid-cols-2 fadeInBlur">
      <div className="grid h-fit gap-10 xl:pr-40 xlg:pr-24 lg:pr-14 sm:pr-32 xs:pr-20 pr-5  sm:pl-32 xs:pl-20 pl-5 pt-20 pb-32">
        <h1 className="sm:text-3xl text-xl font-bold text-secondary-0">
          {Categorie?.title}
        </h1>
        <img
          loading="lazy"
          className="object-cover w-full"
          alt={Categorie?.title}
          src={ImageBaseUrl(Categorie?.Image || "")}
        />
        {Categorie?.description && (
          <p className="text-aca-1 xxs:text-lg">{Categorie.shortDescription}</p>
        )}
        <div className="grid gap-12">
          {Categorie?.description.map((desc) => (
            <div className="grid gap-5 text-secondary-0 " key={desc.id}>
              <h1 className="xxs:text-lg font-black uppercase">{desc.title}</h1>
              <p className="font-medium">{LineDecoder(desc.content)}</p>
            </div>
          ))}
        </div>
      </div>
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
