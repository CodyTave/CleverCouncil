import Image from "next/image";

interface props {
  img?: string;
  title?: string;
  loading?: boolean;
}
function CategoryCard({ img, title, loading }: props) {
  return (
    <>
      {loading ? (
        <div className="block h-72 sm:min-w-[260px] min-w-[220px] force-width relative select-none border border-secondary-0 ">
          <h1 className="absolute bottom-5 h-3 w-3/4 ml-5 rounded-sm font-semibold bg-secondary-0 px-4 text-left z-30 select-none "></h1>
          <h1 className="absolute bottom-12 h-3 w-3/5 ml-5 rounded-sm font-semibold bg-secondary-0 px-4 text-left z-30 select-none "></h1>
          <div className="absolute top-0 gradient  w-full h-full transall hover:opacity-80 " />
          <div className="absolute top-0 gradient2 opacity-40 hover:opacity-0  w-full h-full transall  " />
        </div>
      ) : (
        <div className="block h-72 sm:min-w-[260px] min-w-[220px] force-width relative select-none cursor-pointer">
          <Image
            fill
            loading="lazy"
            className=" object-cover w-full h-full select-none "
            src={img || ""}
            alt={title || ""}
          />
          <h1 className="absolute bottom-5  font-semibold text-white px-4 text-left z-30 select-none ">
            {title}
          </h1>
          <div className="absolute top-0 gradient  w-full h-full transall hover:opacity-80 " />
          <div className="absolute top-0 gradient2 opacity-40 hover:opacity-0  w-full h-full transall  " />
        </div>
      )}
    </>
  );
}

export default CategoryCard;
