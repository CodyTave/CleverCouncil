"use client";
/* eslint-disable @next/next/no-img-element */
import { getCategorie, getCategorieFormations } from "../../Services/Services";
import { ImageBaseUrl, LineDecoder } from "../../Constants/functions";
import Image from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
  const Categorie = getCategorie(params.slug);
  const Formations = getCategorieFormations(Categorie?.id.toString());
  return (
    <div className="grid lg:grid-cols-2 fadeInBlur">
      <div className="grid h-fit gap-10 xl:pr-48 xlg:pr-28 lg:pr-14 sm:pr-32 xs:pr-20 pr-5  sm:pl-32 xs:pl-20 pl-5 pt-20 pb-32">
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
      <div className="grid gap-10 px-32 pt-20 bg-aca-3">
        <h1 className="text-4xl font-black text-aca-0 uppercase">
          Spectre d&apos;intervention
        </h1>
        <div className="grid gap-10">
          {Formations.map((form) => (
            <div className="flex" key={form.id}>
              <Image
                className="object-cover"
                width={200}
                height={160}
                src={ImageBaseUrl(form.profilImage)}
                alt={form.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
