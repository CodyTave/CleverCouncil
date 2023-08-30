import { categories } from "../Constants/MockData";

export function getCategorie(slug: string) {
  const id = categories.find((item) => item.link === slug);
  return id;
}
