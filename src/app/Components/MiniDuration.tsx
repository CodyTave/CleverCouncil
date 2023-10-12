import { duree } from "@/assets";
import Image from "next/image";

function MiniDuration({ duration, type }: { duration: string; type: string }) {
  return (
    <div className="flex hover:bg-secondary-3 items-center gap-3 bg-[#74759f] py-2  px-4 rounded-full  h-fit w-fit text-white transall">
      <Image className="w-5" src={duree} alt="" />
      <p className="flex gap-1 text-sm">
        <span className="text-sm font-medium select-none">
          {duration} {type}
        </span>
      </p>
    </div>
  );
}

export default MiniDuration;
