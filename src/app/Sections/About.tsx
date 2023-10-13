"use client";
import { threeDlogo } from "@/assets";
import Stats from "../Components/Stats";
import Image from "next/image";
function About({ clever }: { clever: "academy" | "technology" }) {
  const aboutData = {
    preTitle: "découvrez clever",
    Title: "Qui sommes-nous",
    parag: (
      <>
        Institut international de conseil et de renforcement de capacités, nous
        disposons d&apos;une équipe solide aux compétences avérées, et
        d&apos;une présence internationale.
        <br /> Nous sommes fiers de forger avec nos partenaires leur force de
        frappe business
      </>
    ),
  };
  return (
    <div id="qsn" className="block relative sm:my-16 fadeInBlur transall">
      <Image
        onContextMenu={(e) => e.preventDefault()}
        className="absolute hidden hover:ml-10 lg:block mxl:top-0 top-12 w-[33%] xl:-left-52 -left-24 -z-20 transall "
        src={threeDlogo}
        alt=""
      />
      <div className="grid mlg:grid-cols-2 mxl:w-3/4 lg:w-[79%] px-5 lg:px-0 ml-auto mt-10 ">
        <div className="text-left py-10">
          <h1
            className={`uppercase ${
              clever === "technology" ? "text-tech-0" : " text-secondary-1"
            } font-semibold`}
          >
            {aboutData.preTitle}
          </h1>
          <h1 className="uppercase text-secondary-0 font-extrabold text-4xl">
            {aboutData.Title}
          </h1>
          <p className="mt-5 text-secondary-0 font-medium">{aboutData.parag}</p>
        </div>
        <Stats clever={clever} />
      </div>
    </div>
  );
}

export default About;
