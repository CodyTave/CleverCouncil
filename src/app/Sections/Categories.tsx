import Link from "next/link";
import CategoryCard from "../Components/CategoryCard";
import { categories } from "../academy/Constants/MockData";
import { ImageBaseUrl } from "../academy/Constants/functions";
import { useDraggable } from "react-use-draggable-scroll";
import { useRef, useState } from "react";
import api from "../academy/Services/api";
function Categories() {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
  const [categoriess, setCategories] = useState([]);
  const [isLoaded, setLoaded] = useState(true);
  async function fetchCategoreis() {
    try {
      const resp = await api.get("/categories");
      setCategories(resp.data);
      setLoaded(true);
    } catch (err) {
      throw err;
    }
  }
  return (
    <div id="formations" className=" bg-secondary-0 ">
      <div className="grid pt-32 sm:px-32 xs:px-20 px-5">
        <h1 className="uppercase text-left text-4xl font-black text-white">
          Categories
        </h1>
        <div
          {...events}
          ref={ref}
          className="flex overflow-auto my-20 category-scrollbar pb-10 transall "
        >
          {isLoaded
            ? categories.map((cat) => (
                <Link href={"/academy/categorie/" + cat.link} key={cat.id}>
                  <CategoryCard
                    img={ImageBaseUrl(cat.Image, 376, 267)}
                    title={cat.title}
                  />
                </Link>
              ))
            : [1, 2, 3, 4, 5, 6, 7, 8].map(() => <CategoryCard loading />)}
        </div>
      </div>
    </div>
  );
}

export default Categories;
