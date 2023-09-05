"use client";
import Image from "next/image";
import { FormationDetails as Details } from "../../../Constants/constants";
import { useEffect, useState } from "react";
import { listDecoder } from "@/app/academy/Constants/functions";
import ListItem from "@/app/academy/Components/ListItem";
import Button from "@/app/academy/Components/Button";
import { arroww } from "@/assets";
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
  const [detailList, setList] = useState<string[]>();
  useEffect(() => {
    [courseObjectifs, target, prerequisite, teachingMethods].map(
      (item, index) => {
        if (selectedDetail === index) {
          setList(listDecoder(item));
        }
      }
    );
  }, [selectedDetail]);
  return (
    <div className="mt-24 sm:px-32 min-[455px]:px-20 px-5">
      <div className="grid xlg:grid-cols-4 md:grid-cols-2 grid-cols-4 gap-y-10">
        {Details.map((item, index) => (
          <div
            onClick={() => setDetails(index)}
            className={`${
              index === 3 || "xlg:border-r"
            }  hover:opacity-100  transall`}
            key={item.id}
          >
            <div
              className={`flex flex-col gap-5 justify-center items-center ${
                selectedDetail !== index && "opacity-20 cursor-pointer"
              }`}
            >
              <Image
                className="xl:w-24 sm:w-20 w-14 select-none"
                src={item.icon}
                alt=""
              />
              <h1 className="md:block hidden xl:text-2xl text-xl text-secondary-0 font-black uppercase xlg:max-w-xs max-w-[200px] select-none">
                {item.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <h1 className="md:hidden text-xl uppercase flex justify-center items-center text-secondary-0 font-black w-full mt-10">
        {Details[selectedDetail].title}
      </h1>
      <div className="grid  md:mt-20 mt-10">
        {detailList?.map((item, id) => (
          <ListItem key={id} text={item} bt={id === 0} />
        ))}
      </div>
      <Button
        animate="translate-x-2"
        icon={arroww}
        color="bg-aca-0 text-white"
        text="Je m'inscris"
        moreStyles="uppercase mt-10"
      />
    </div>
  );
}

export default FormationDetails;
