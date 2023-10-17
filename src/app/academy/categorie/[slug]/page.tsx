import { getCategoryBySlug } from "../../../Services/api";
import CategoryDetails from "./Components/CategoryDetails";
import CategoryFormations from "./Components/CategoryFormations";

export default async function Page({ params }: { params: { slug: string } }) {
  const Categorie = await getCategoryBySlug(params.slug);
  return (
    <div className="grid lg:grid-cols-2 fadeInBlur text-left">
      <CategoryDetails Categorie={Categorie} />
      <CategoryFormations id={Categorie.id} />
    </div>
  );
}
