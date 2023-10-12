import Image, { StaticImageData } from "next/image";

interface props {
  id: number;
  icon: StaticImageData;
  title: string;
  text: string;
  color: string;
  width: string;
}
function OffreCard({ offre }: { offre: props }) {
  return (
    <div className="flex flex-col gap-2 bg-white hover:bg-gray-50 w-72 h-fit transall p-5 py-8 cursor-pointer">
      <div
        className={`flex justify-center items-center w-24 h-24 ${offre.color} `}
      >
        <Image
          className={`${offre.width} `}
          alt={offre.title}
          src={offre.icon}
        />
      </div>
      <h1 className="text-left font-bold text-2xl text-secondary-0 capitalize">
        {offre.title}
      </h1>
      <p className="line-clamp-3 text-left text-sm text-ph-3 transall">
        {offre.text}
      </p>
    </div>
  );
}

export default OffreCard;
