import { notFound } from "next/navigation";
import { categories } from "../Constants/MockData";
import { formations } from "../Constants/MockFormations";

export function getCategorie(slug: string) {
  return categories.find((item) => item.link === slug);
}

export function getCategorieFormations(id: string) {
  if (id === "-1") {
    return notFound();
  }
  return formations.filter((item) => item.subCategory === id);
}

export function getFormation(slug: string) {
  return formations.find((item) => item.link === slug);
}
