import { notFound } from "next/navigation";
import { getFormation } from "../../Services/Services";
import FormationHero from "./Sections/FormationHero";
import FormationDetails from "./Sections/FormationDetails";

function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const Formation = getFormation(slug) || notFound();
  return (
    <div className=" mb-60">
      <FormationHero Formation={Formation} />
      <FormationDetails Formation={Formation} />
    </div>
  );
}

export default page;
