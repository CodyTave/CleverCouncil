import Form from "@/app/Components/Form";
import { desk } from "@/assets";
import Image from "next/image";

export default function EnrollmentForm({
  Category,
  Formation,
}: {
  Category: string;
  Formation: string;
}) {
  return (
    <div
      id="inscription"
      className="bg-secondary-0 block relative sm:px-32 min-[455px]:px-20 px-5 text-left text-white py-20 "
    >
      <div className="grid mxl:grid-cols-2 z-0">
        <div className="grid gap-5 h-fit">
          <h1 className="text-4xl font-black uppercase max-w-2xl">
            Vous souhaitez avoir plus détails sur cette formation ?
          </h1>
          <p className="text-aca-0 max-w-xs">
            Inscrivez-vous vite en remplissant le formulaire suivant
          </p>
        </div>
        <div className="grid z-10">
          <Form Formation={Formation} Category={Category} />
        </div>
      </div>
      <Image
        className="absolute left-0 bottom-0 mxl:w-[700px] w-[500px] mxl:opacity-100 opacity-20  "
        src={desk}
        alt="Clever"
      />
    </div>
  );
}
