import {
  ImageBaseUrl,
  LineDecoder,
  parseDescription,
} from "@/app/academy/Constants/functions";

export default function CategoryDetails({
  Categorie,
}: {
  Categorie: { [key: string]: string };
}) {
  return (
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
        {parseDescription(Categorie?.description).map((desc) => (
          <div className="grid gap-5 text-secondary-0 " key={desc.id}>
            <h1 className="xxs:text-lg font-black uppercase">{desc.title}</h1>
            <p className="font-medium">{LineDecoder(desc.content)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
