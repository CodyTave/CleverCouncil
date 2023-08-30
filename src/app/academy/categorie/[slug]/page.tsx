/* eslint-disable @next/next/no-img-element */
import { categories } from "../../Constants/MockData";
import { getCategorie } from "../../Services/Services";
import { ImageBaseUrl } from "../../Constants/functions";

export default function Page({ params }: { params: { slug: string } }) {
  const Categorie = getCategorie(params.slug);

  return (
    <div className="grid grid-cols-2  fadeInBlur">
      <div className="grid gap-10 pr-48 pl-32 pt-20">
        <h1 className="text-3xl font-bold text-secondary-0">
          {Categorie?.title}
        </h1>
        <img
          loading="lazy"
          className="object-cover w-full"
          alt={Categorie?.title}
          src={ImageBaseUrl(Categorie?.Image)}
        />
        {Categorie?.description && (
          <p className="text-aca-1  text-lg">{Categorie.shortDescription}</p>
        )}
        <div>{Categorie?.description}</div>
      </div>
      <div className="pr-10 bg-aca-3"></div>
    </div>
  );
}
