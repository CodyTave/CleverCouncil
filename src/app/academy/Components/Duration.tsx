import { duree } from "@/assets";
import Image from "next/image";

function Duration({ duration, type }: { duration: string; type: string }) {
  return (
    <div className="flex hover:bg-secondary-0 items-center gap-3 bg-secondary-3 py-2  px-3 rounded-full  h-fit w-fit text-white">
      <Image className="w-6" src={duree} alt="" />
      <p className="flex gap-1 text-sm">
        <span className="xlg:flex lg:hidden xxs:flex hidden select-none ">
          Durée de la formation :
        </span>{" "}
        <span className="text-sm font-medium select-none">
          {duration} {type}
        </span>
      </p>
    </div>
  );
}

export default Duration;
