import Button from "@/app/Components/Button";
import Duration from "@/app/Components/Duration";
import { ImageBaseUrl } from "@/app/academy/Constants/functions";
import { arroww, pattern } from "@/assets";
import Image from "next/image";

interface props {
  Formation: {
    title: string;
    shortDescription: string;
    profilImage: string;
    duration: string;
    durationType: string;
  };
}
function FormationHero({
  Formation: { title, shortDescription, profilImage, duration, durationType },
}: props) {
  return (
    <div className="grid xlg:grid-cols-2 xlg:gap-0 gap-12 xlg:pt-20 sm:px-32 min-[455px]:px-20 px-5 bg-secondary-0 text-white text-left  ">
      <div className="flex flex-col  gap-3 pb-6 h-fit ">
        <h1 className="mxl:text-5xl sm:text-4xl tn:text-3xl text-xl font-bold max-w-3xl  py-2">
          {title}
        </h1>
        <div className="flex relative ">
          <p className="xxs:pl-5 text-sm max-w-xl font-light line-clamp-4">
            {shortDescription}
          </p>
          <div className="w-[1.5px] h-48 bg-aca-0 absolute top-0 left-0" />
        </div>
        <Button
          animate="translate-x-2"
          icon={arroww}
          color="bg-aca-0"
          text="Je m'inscris"
          moreStyles="uppercase ml-5 mt-5"
        />
      </div>
      <div className="flex justify-center mxl:items-end  ">
        <div className="block relative md:w-[550px] w-full -mb-14 xlg:mr-0 mr-auto">
          <img
            className="object-cover w-full h-full"
            src={ImageBaseUrl(profilImage)}
            alt={title}
          />
          <div className="absolute bottom-8 left-5 z-20">
            <Duration duration={duration} type={durationType} />
          </div>
          <div className="absolute xlg:flex hidden xlg:w-72 w-40 -top-12 xlg:left-[-25%] -left-20 z-30 opacity-30">
            <Image alt="" src={pattern} />
          </div>
          <div className="absolute top-0 gradient-bottom hover:opacity-0  w-full h-full transall  " />
          <div className="absolute top-0 gradient2 opacity-20 hover:opacity-0 w-full h-full transall  " />
        </div>
      </div>
    </div>
  );
}

export default FormationHero;
