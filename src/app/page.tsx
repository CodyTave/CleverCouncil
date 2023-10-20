"use client";
import Image from "next/image";
import { Clevers } from "./constants";
import { useState } from "react";

export default function page() {
  const [isHovered, setHovered] = useState<string | null>(null);
  return (
    <div className="grid w-screen h-screen lg:grid-cols-2 fixed inset-0">
      {Clevers.map((clv) => (
        <div
          key={clv.id}
          className={`${clv.bg} ${
            isHovered !== clv.id && isHovered !== null
              ? "grayscale"
              : "grayscale-0"
          } flex flex-col justify-center items-center transall`}
        >
          <div
            onMouseEnter={() => setHovered(clv.id)}
            onMouseLeave={() => setHovered(null)}
            className={`flex flex-col lg:gap-10 gap-5 ${
              isHovered === clv.id
                ? "md:w-[70%] w-[85%]"
                : isHovered === null
                ? "md:w-[55%] w-[80%]"
                : "md:w-[35%] w-[60%]"
            }   lg:h-3/5 transall`}
          >
            <Image
              className="mr-auto sm:w-28 w-16"
              alt="academy"
              src={clv.logo}
            />
            <div className="w-full h-full block relative">
              <Image
                className={`w-full h-full object-cover ${
                  isHovered !== clv.id && isHovered !== null
                    ? "grayscale"
                    : "grayscale-0"
                }`}
                alt=""
                src={clv.image}
              />
              <span className="absolute bottom-7 left-5 text-white msm:text-3xl xs:text-2xl font-bold z-10">
                {clv.title}
              </span>
              <div
                className={`w-full h-full ${clv.gradient} absolute inset-0`}
              />
            </div>
            <div className="flex flex-wrap text-left mr-auto gap-2">
              {clv.links.map((link) => (
                <a
                  target="__blank"
                  href={link.url}
                  key={link.id}
                  className="flex justify-center items-center gap-1 transall"
                >
                  <span
                    className={`sm:text-xs text-[0.5rem] text-white hover:underline cursor-pointer transall`}
                  >
                    {link.title}
                  </span>
                  <svg width="8" height="7" viewBox="0 0 12 11">
                    <path
                      className="transall"
                      fill="white"
                      d="M9.142 0.603373L3.0821 0.232926L2.96008 2.2289L7.60841 2.51305L0.119065 9.13949L1.44435 10.6374L8.9337 4.01092L8.64954 8.65925L10.6455 8.78127L11.016 2.72136C11.0482 2.19201 10.869 1.67152 10.5175 1.27434C10.1661 0.877159 9.67134 0.635812 9.142 0.603373Z"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
