import Link from "next/link";
import CategoryCard from "../Components/CategoryCard";
import { categories } from "../Constants/MockData";
import { ImageBaseUrl } from "../Constants/functions";
import { useDraggable } from "react-use-draggable-scroll";
import { useRef } from "react";

function Categories() {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <div id="formations" className=" bg-secondary-0 -mt-20">
      <div className="grid pt-32 sm:px-32 xs:px-20 px-5">
        <h1 className="uppercase text-left text-4xl font-black text-white">
          Categories
        </h1>
        <div
          {...events}
          ref={ref}
          className="flex overflow-auto my-20 category-scrollbar pb-10 transall "
        >
          {categories.map((cat) => (
            <Link href={"/academy/categorie/" + cat.link} key={cat.id}>
              <CategoryCard
                img={ImageBaseUrl(cat.Image, 376, 267)}
                title={cat.title}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
