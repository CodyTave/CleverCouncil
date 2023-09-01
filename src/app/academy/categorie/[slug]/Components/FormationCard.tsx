/* eslint-disable @next/next/no-img-element */

import { ImageBaseUrl } from "@/app/academy/Constants/functions";
import { duree } from "@/assets";
import Image from "next/image";

interface Formation {
  id: number;
  title: string;
  profilImage: string;
  shortDescription: string;
  duration: string;
  durationType: string;
}
function FormationCard({ form }: { form: Formation }) {
  return (
    <>
      <div className="sm:flex grid gap-5" key={form.id}>
        <div className="sm:w-64 sm:h-44 shrink-0 flex relative">
          <img
            className="object-cover  flex shrink-0 h-full w-full "
            src={ImageBaseUrl(form.profilImage)}
            alt={form.title}
          />
          <div className="absolute w-full h-full opacity-30 hover:opacity-0 gradient transall " />
          <div className="absolute w-full h-full opacity-10 hover:opacity-0 bg-secondary-0 transall " />
        </div>
        <div className="grid sm:gap-4 gap-3 h-fit">
          <h1 className="sm:text-xl hover:opacity-70 text-sm font-semibold text-secondary-0 line-clamp-2">
            {form.title}
          </h1>
          <p className="sm:text-sm text-xs text-secondary-0 line-clamp-2">
            {form.shortDescription}
          </p>
          <div className="flex hover:bg-secondary-0 items-center gap-3 bg-secondary-3 py-2  px-3 rounded-full  h-fit w-fit text-white">
            <Image className="w-6" src={duree} alt="" />
            <p className="flex gap-1 text-sm">
              <span className="xlg:flex lg:hidden xxs:flex hidden ">
                {" "}
                Durée de la formation :
              </span>{" "}
              <span className="text-sm font-medium">
                {form.duration} {form.durationType}
              </span>
            </p>
          </div>
        </div>
      </div>
      <span className="flex justify-center w-[90%] h-[1px] bg-ph-3 opacity-20 sm:mt-10 mt-5" />
    </>
  );
}

export default FormationCard;
