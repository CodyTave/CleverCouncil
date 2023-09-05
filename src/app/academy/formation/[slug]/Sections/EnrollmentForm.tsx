import Form from "@/app/academy/Components/Form";
import { desk } from "@/assets";
import Image from "next/image";

export default function EnrollmentForm() {
  return (
    <div className="bg-secondary-0 block relative sm:px-32 min-[455px]:px-20 px-5 text-left text-white py-20 ">
      <div className="grid grid-cols-2">
        <div className="grid gap-5 h-fit">
          <h1 className="text-4xl font-black uppercase max-w-2xl">
            Vous souhaitez avoir plus détails sur cette formation ?
          </h1>
          <p className="text-aca-0 max-w-xs">
            Inscrivez-vous vite en remplissant le formulaire suivant
          </p>
          <Image
            className="absolute left-0 bottom-0 w-[700px]"
            src={desk}
            alt="Clever"
          />
        </div>
        <div className=" grid h-[45vh]">
          <Form />
        </div>
      </div>
    </div>
  );
}
