import { getCategoryFormations } from "./api";

export interface Formation {
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
/// suggestion service
export async function getSuggestions(category: string, CurrentId: number) {
  const formations = await getCategoryFormations(category);
  let count = 0;
  const SuggestionsList: Formation[] = [];
  while (count < 12) {
    const suggestion: Formation | undefined = formations.find(
      (item: Formation) => {
        return (
          item.subCategory === category &&
          !SuggestionsList.includes(item) &&
          item.id !== CurrentId
        );
      }
    );
    if (suggestion) {
      SuggestionsList.push(suggestion);
    }
    count++;
  }

  return SuggestionsList;
}
