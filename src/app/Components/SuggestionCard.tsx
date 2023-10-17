import { ImageBaseUrl } from "../academy/Constants/functions";
import MiniDuration from "./MiniDuration";

interface props {
  Image?: string;
  duration?: string;
  durationType?: string;
  title?: string;
  Loading?: boolean;
}
function SuggestionCard({
  Image,
  duration,
  durationType,
  title,
  Loading,
}: props) {
  return (
    <>
      {Loading ? (
        <div className="flex relative xlg:w-[350px]  xlg:h-96 w-64 h-80 shrink-0">
          <div className="absolute z-20 bottom-1 p-5 pb-10 grid gap-3 ">
            <div className="bg-[#74759f] h-6 w-28 rounded-full" />
            <div className=" h-4 bg-secondary-0 w-40 rounded-sm " />
            <div className=" h-4 bg-secondary-0 w-60 rounded-sm " />
          </div>
          <div className="absolute w-full h-full top-0 left-0  gradient-bottom2" />
        </div>
      ) : (
        <div className="flex relative xlg:w-[350px]  xlg:h-96 w-64 h-80 shrink-0">
          <img
            className="object-cover w-full h-full "
            src={ImageBaseUrl(Image, 376, 267)}
          />
          <div className="absolute z-20 bottom-1 p-5 pb-10 grid gap-3 ">
            <MiniDuration duration={duration} type={durationType} />
            <h1 className="  font-medium text-xl line-clamp-2 ">{title}</h1>
          </div>
          <div className="absolute w-full h-full top-0 left-0  gradient-bottom2" />
        </div>
      )}
    </>
  );
}

export default SuggestionCard;
