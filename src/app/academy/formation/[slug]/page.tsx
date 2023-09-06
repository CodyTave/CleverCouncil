import { notFound } from "next/navigation";
import { getFormation } from "../../Services/Services";
import FormationHero from "./Sections/FormationHero";
import FormationDetails from "./Sections/FormationDetails";
import Program from "./Sections/Program";
import EnrollmentForm from "./Sections/EnrollmentForm";
import SuggestedFormations from "./Sections/SuggestedFormations";

function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const Formation = getFormation(slug) || notFound();
  return (
    <div className="mb-60">
      <FormationHero Formation={Formation} />
      <FormationDetails Formation={Formation} />
      <Program program={Formation.description} />
      <EnrollmentForm />
      <SuggestedFormations
        FormationId={Formation.id}
        Category={Formation.subCategory}
      />
    </div>
  );
}

export default page;
