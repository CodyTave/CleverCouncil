import { arroww, dropLogo, heroPhotofull, plus } from "@/assets";
import { useEffect, useRef, useState } from "react";
import { heroContent } from "../Constants/constants";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";
import Image from "next/image";

function Hero() {
  const [selectedHero, setHero] = useState(heroContent[0]);
  const [Hovered, Hover] = useState(0);
  const timeout = useRef<NodeJS.Timeout>();
  useEffect(() => {
    timeout.current = setTimeout(() => {
      if (selectedHero.id === 2) {
        setHero(heroContent[0]);
      } else if (selectedHero.id === 1) {
        setHero(heroContent[1]);
      }
    }, 10000);
  }, [selectedHero]);

  return (
    <>
      <div className="grid lg:grid-cols-2 -mt-1">
        <div className="flex flex-col gap-5 text-white sm:pt-20 pt-10 pb-20 md:px-28 sm:px-16 xxs:px-5 px-4  bg-secondary-0">
          <AnimatePresence mode="wait">
            <motion.h1
              key={selectedHero.id}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              transition={{ duration: 0.8, ease: "backInOut" }}
              className="xxs:text-6xl text-5xl text-left font-semibold transall"
            >
              {selectedHero.title}
            </motion.h1>
          </AnimatePresence>
          <div className="block relative ">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedHero.id}
                initial={{ height: 0 }}
                animate={{ height: 384 }}
                exit={{ height: -384 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`absolute w-[1.5px]  transall ${
                  selectedHero.id === 2 ? "bg-aca-0" : "bg-secondary-1"
                } top-0`}
              />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={selectedHero.id}
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{ duration: 0.8, ease: "backInOut", delay: 0.2 }}
                className="text-left ml-5 font-light max-w-xl min-h-[130px]  "
              >
                {selectedHero.paragraph}
              </motion.p>
            </AnimatePresence>
            <div className="flex mxl:flex-row flex-col">
              <Link smooth to="contact">
                <button
                  onMouseEnter={() => Hover(1)}
                  onMouseLeave={() => Hover(0)}
                  className="bg-aca-0 p-5 w-52 flex items-center justify-between gap-2 ml-5 mt-5"
                >
                  <span className="font-semibold">Contactez Nous</span>
                  <Image
                    className={`w-4 transall ${
                      Hovered === 1 && "-translate-x-2"
                    }`}
                    src={arroww}
                    alt=""
                  />
                </button>
              </Link>
              <Link smooth to="offre">
                <button
                  onMouseEnter={() => Hover(2)}
                  onMouseLeave={() => Hover(0)}
                  className="bg-secondary-1 p-5 w-52 flex items-center justify-between gap-2 ml-5 mt-5"
                >
                  <span className="font-semibold">Nos Offres</span>
                  <Image
                    className={`w-4 transall ${Hovered === 2 && "rotate-180"}`}
                    src={plus}
                    alt=""
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex md:justify-end justify-center mt-5 gap-2">
            {heroContent.map((hero) => (
              <div
                key={hero.id}
                onClick={() => {
                  clearTimeout(timeout.current);
                  setHero(hero);
                }}
                className="py-2"
              >
                <span
                  className={`h-[5px]  bg-white block transall cursor-pointer
                ${
                  selectedHero.id !== hero.id
                    ? "opacity-25 w-[68px] hover:opacity-50"
                    : "opacity-100 w-16"
                }`}
                ></span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-light-0  sm:p-10 p-5 flex justify-center items-center relative overflow-hidden">
          <AnimatePresence>
            <motion.span
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="  max-w-lg sm:max-w-3xl px-20 select-none fadeInBlur "
            >
              <Image
                loading="lazy"
                className="w-full object-cover"
                src={heroPhotofull}
                alt=""
              />
            </motion.span>
          </AnimatePresence>
          <AnimatePresence>
            <motion.span
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute w-12 sm:w-24 xxxl:left-1/3 xxxl:-translate-x-1/2 left-1/4 bounce fadeInBlur transall hover:mb-5 "
            >
              <Image
                className="w-full object-cover"
                src={dropLogo}
                alt="Clever"
              />
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default Hero;
