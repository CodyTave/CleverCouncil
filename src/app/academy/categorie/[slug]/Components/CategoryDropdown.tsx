"use client";
import { categories } from "@/app/academy/Constants/MockData";
import { useRouter } from "next/navigation";

export default function CategoryDropdown({ CatID }: { CatID: number }) {
  const router = useRouter();
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategoryId = parseInt(event.target.value, 10); // Convert the value to an integer
    const selectedCategory = categories.find(
      (cat) => cat.id === selectedCategoryId
    );

    if (selectedCategory) {
      router.push(`/academy/categorie/${selectedCategory.link}`); // Assuming the route is defined as /category/:id
    }
  };

  return (
    <select
      value={CatID}
      onChange={handleOptionChange}
      className="bg-secondary-0 border truncate border-light-0 p-5 outline-none lg:w-96 w-80 dropdown text-light-0 "
    >
      {categories.map((cat) => (
        <option
          key={cat.id}
          value={cat.id}
          className="bg-secondary-4 w-80 truncate hover:bg-aca-1 "
        >
          {cat.title}
        </option>
      ))}
    </select>
  );
}
