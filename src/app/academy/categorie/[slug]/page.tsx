/* eslint-disable @next/next/no-img-element */
import { getCategoryBySlug } from "../../Services/api";
import CategoryDetails from "./Components/CategoryDetails";
import CategoryFormations from "./Components/CategoryFormations";

export default async function Page({ params }: { params: { slug: string } }) {
  let Categorie;
  try {
    Categorie = await getCategoryBySlug(params.slug);
  } catch (err) {
    throw err;
  }

  return (
    <div className="grid lg:grid-cols-2 fadeInBlur text-left">
      <CategoryDetails Categorie={Categorie} />
      <CategoryFormations id={Categorie.id} />
    </div>
  );
}
