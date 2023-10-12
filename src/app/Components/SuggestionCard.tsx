import { ImageBaseUrl } from "../academy/Constants/functions";
import MiniDuration from "./MiniDuration";

interface props {
  Image: string;
  duration: string;
  durationType: string;
  title: string;
}
function SuggestionCard({ Image, duration, durationType, title }: props) {
  return (
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
  );
}

export default SuggestionCard;
