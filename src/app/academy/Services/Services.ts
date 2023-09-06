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

interface Formation {
  id: number;
  title: string;
  link: string;
  description: string;
  subCategory: string;
  duration: string;
  courseObjectifs: string;
  target: string;
  prerequisite: string;
  teachingMethods: string;
  profilImage: string;
  durationType: string;
  shortDescription: string;
}
///fake suggestion service
export function getSuggestions(category: string) {
  let count = 0;
  const SuggestionsList: Formation[] = [];
  while (count < 12) {
    const suggestion: Formation | undefined = formations.find((item) => {
      return item.subCategory === category && !SuggestionsList.includes(item);
    });
    if (suggestion) {
      SuggestionsList.push(suggestion);
    }
    count++;
  }

  return SuggestionsList;
}
