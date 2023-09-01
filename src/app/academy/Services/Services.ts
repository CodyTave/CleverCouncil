import { notFound } from "next/navigation";
import { categories } from "../Constants/MockData";
import { formations } from "../Constants/MockFormations";

export function getCategorie(slug: string) {
  const category = categories.find((item) => item.link === slug);
  return category;
}

export function getCategorieFormations(id: string) {
  if (id==="-1"){
    return notFound()
  }
  return formations.filter((item) => item.subCategory === id);
}
