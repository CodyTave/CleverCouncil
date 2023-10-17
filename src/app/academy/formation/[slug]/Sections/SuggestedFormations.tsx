"use client";
import SuggestionCard from "@/app/Components/SuggestionCard";
import { Formation, getSuggestions } from "@/app/Services/Services";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function SuggestedFormations({
  Category,
  FormationId,
}: {
  Category: string;
  FormationId: number;
}) {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
  const [isLoaded, setLoaded] = useState(false);
  const [SimilarCourses, setCourses] = useState<Formation[]>([]);
  useEffect(() => {
    fetch();
  }, []);
  async function fetch() {
    await getSuggestions(Category, FormationId).then((resp) => {
      setCourses(resp);
      setLoaded(true);
    });
  }
  return (
    <div className="bg-aca-0 sm:px-32 min-[455px]:px-20 px-5 text-left text-white py-20 mb-80">
      <h1 className="font-black text-4xl text-center mb-5 uppercase">
        Formations Similaires
      </h1>
      <p className="text-center font-light">
        Ces formations pourraient vous intéresser
      </p>
      <div className="mt-20 -mb-56">
        <div
          {...events}
          ref={ref}
          className={`overflow-auto flex gap-10 pb-16 ${
            (SimilarCourses.length < 5 || !isLoaded) && "mlg:justify-center"
          } `}
        >
          {isLoaded
            ? SimilarCourses.map((course, index) => (
                <Link
                  className="cursor-pointer"
                  key={index}
                  href={"/academy/formation/" + course.link}
                >
                  <SuggestionCard
                    Image={course.profilImage}
                    duration={course.duration}
                    durationType={course.durationType}
                    title={course.title}
                  />
                </Link>
              ))
            : [0, 1, 2, 3].map((i) => <SuggestionCard key={i} Loading />)}
        </div>
      </div>
    </div>
  );
}

export default SuggestedFormations;
