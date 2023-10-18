import FormationHero from "./Sections/FormationHero";
import FormationDetails from "./Sections/FormationDetails";
import Program from "./Sections/Program";
import EnrollmentForm from "./Sections/EnrollmentForm";
import SuggestedFormations from "./Sections/SuggestedFormations";
import { getCategoryByID, getFormationBySlug } from "../../../Services/api";

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const Formation = await getFormationBySlug(slug);
  const Category = await getCategoryByID(Formation.subCategory);
  return (
    <div className="mb-60">
      <FormationHero Formation={Formation} />
      <FormationDetails Formation={Formation} />
      <Program program={Formation.description} />
      <EnrollmentForm Formation={Formation.title} Category={Category.title} />
      <SuggestedFormations
        FormationId={Formation.id}
        Category={Formation.subCategory}
      />
    </div>
  );
}
