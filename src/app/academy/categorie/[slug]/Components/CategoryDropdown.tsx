"use client";
import { getCategories } from "@/app/Services/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoryDropdown({ CatID }: { CatID: number }) {
  const [categories, setCatrgories] = useState<{ [key: string]: string }[]>([]);
  const [isLoaded, setLoaded] = useState(false);
  const router = useRouter();
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = categories.find((cat) => {
      return cat.id.toString() === event.target.value;
    });
    if (selectedCategory) {
      router.push(`/academy/categorie/${selectedCategory.link}`);
    }
  };

  async function fetchCategories() {
    try {
      const resp = await getCategories();
      setCatrgories(resp);
      setLoaded(true);
    } catch (err) {
      throw err;
    }
  }
  return (
    <>
      {isLoaded && (
        <select
          value={CatID}
          onChange={handleOptionChange}
          className="bg-secondary-0 border truncate border-light-0 p-5 outline-none lg:w-96 mlg:w-80 w-full dropdown text-light-0 fadeInBlur "
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
      )}
    </>
  );
}
