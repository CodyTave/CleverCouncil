"use client";
import SuggestionCard from "@/app/academy/Components/SuggestionCard";
import { getSuggestions } from "@/app/academy/Services/Services";
import Link from "next/link";
import { useState } from "react";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function SuggestedFormations({
  Category,
  FormationId,
}: {
  Category: string;
  FormationId: number;
}) {
  const [SimilarCourses] = useState(getSuggestions(Category, FormationId));
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <div className="bg-aca-0 sm:px-32 min-[455px]:px-20 px-5 text-left text-white py-20 mb-80">
      <h1 className="font-black text-4xl text-center mb-5 uppercase">
        Formations Similaires
      </h1>
      <p className="text-center font-extralight">
        Ces formations pourraient vous intéresser
      </p>
      <div className="mt-20 -mb-56">
        <div
          {...events}
          ref={ref}
          className={`overflow-auto flex gap-10 pb-16 ${
            SimilarCourses.length < 5 && "mlg:justify-center"
          } `}
        >
          {SimilarCourses.map((course, index) => (
            <Link key={index} href={"/academy/formation/" + course.link}>
              <SuggestionCard
                Image={course.profilImage}
                duration={course.duration}
                durationType={course.durationType}
                title={course.title}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SuggestedFormations;
