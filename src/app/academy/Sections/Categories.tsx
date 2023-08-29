import CategoryCard from "../Components/CategoryCard";
import { categories } from "../Constants/MockData";

function Categories() {
  return (
    <div id="formations" className=" bg-secondary-0 -mt-20">
      <div className="grid pt-32 sm:px-32 xs:px-20 px-5">
        <h1 className="uppercase text-left text-4xl font-black text-white">
          Categories
        </h1>
        <div className="flex overflow-auto my-20 category-scrollbar pb-10 transall ">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} img={cat.image} title={cat.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
