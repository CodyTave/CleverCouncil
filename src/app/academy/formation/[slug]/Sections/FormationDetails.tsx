"use client";
import Image from "next/image";
import { FormationDetails as Details } from "../../../Constants/constants";
import { useState } from "react";
interface props {
  Formation: {
    courseObjectifs: string;
    target: string;
    prerequisite: string;
    teachingMethods: string;
  };
}

function FormationDetails({
  Formation: { courseObjectifs, target, prerequisite, teachingMethods },
}: props) {
  const [selectedDetail, setDetails] = useState(0);
  return (
    <div className="mt-24 sm:px-32 min-[455px]:px-20 px-5">
      <div className="grid grid-cols-4">
        {Details.map((item, index) => (
          <div className={`${index === 3 || "border-r"}`} key={item.id}>
            <div className="flex flex-col gap-5 justify-center items-center">
              <Image className="w-24" src={item.icon} alt="" />
              <h1 className="text-2xl text-secondary-0 font-black uppercase max-w-xs">
                {item.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default FormationDetails;
