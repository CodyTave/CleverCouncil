import { categories } from "../Constants/MockData";
import { formations } from "../Constants/MockFormations";

export function getCategorie(slug: string) {
  const category = categories.find((item) => item.link === slug);
  return category;
}

export function getCategorieFormations(id: string) {
  return formations.filter((item) => item.subCategory === id);
}
