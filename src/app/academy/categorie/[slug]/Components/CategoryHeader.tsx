import { getCategoryBySlug } from "@/app/Services/api";
import { notFound } from "next/navigation";
import CategoryDropdown from "./CategoryDropdown";

export default async function CategoryHeader({ slug }: { slug: string }) {
  const fetchCat = await getCategoryBySlug(slug);
  const CatID = fetchCat || notFound();
  return (
    <div className="flex gap-y-10 mlg:flex-row flex-col mlg:justify-between sm:px-32 xs:px-20 px-5 py-10 bg-secondary-0 text-white text-left">
      <div>
        <span className="text-lg">Explorer</span>
        <h1 className="tn:text-4xl text-xl font-bold">Nos Catégories</h1>
        <div className="mlg:block hidden relative">
          <div className="w-[1.5px] h-16 absolute left-0 top-3 bg-aca-0" />
        </div>
      </div>
      <div className="flex mlg:justify-center justify-end items-center">
        <CategoryDropdown CatID={CatID?.id || 0} />
      </div>
    </div>
  );
}
