"use client";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../Components/Button";
import { arroww, plus } from "@/assets";
export default function HeroIT() {
  const [titleHovered, setHovered] = useState(false);
  const [autoPlayPrevented, setAPerror] = useState(false);
  const [selectedTitle, setTitle] = useState(0);
  const vid = useRef<HTMLVideoElement | null>(null);
  const heroData = {
    title: ["CONSULTING", "ACCOMPAGNEMENT"],
    parag: `Valorisez votre force de frappe Business via des programmes de renforcement de capacité uniques et une pédagogie disruptive pour briser le status quo et semer les graines du succès.`,
    videoSections: ["Ascent", "rêver", "build", "maintenir", "réussir"],
  };
  useEffect(() => {
    setTimeout(() => {
      if (selectedTitle === 4) {
        setTitle(0);
        return;
      }
      setTitle(selectedTitle + 1);
    }, 10000);
  }, [selectedTitle]);

  useEffect(() => {
    if (vid.current) {
      vid.current
        .play()
        .then(() => {})
        .catch((error) => {
          setAPerror(true);
          throw error;
        });
    }
  }, []);
  useEffect(() => {
    if (vid.current) {
      vid.current.addEventListener("pause", () => {
        setAPerror(true);
      });
    }
  }, []);

  function handleManualPlay() {
    if (vid.current) {
      vid.current.play();
      setAPerror(false);
    }
  }

  return (
    <div className="grid xlg:grid-cols-2 -mt-1 text-secondary-0 overflow-hidden">
      <div className="pt-24 pb-32 bg-light-1 mxl:px-28 md:px-14  xxs:px-5 px-4">
        <AnimatePresence mode="wait">
          <motion.h1
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.8, ease: "backInOut" }}
            className="flex flex-col gap-y-3  text-left font-black sm:text-5xl text-4xl  uppercase"
          >
            <div className="flex gap-x-5">
              <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="relative  w-fit"
              >
                <span className="z-[2] relative">{heroData.title[0]}</span>
                <span
                  className={`absolute h-3 w-full bg-tech-0 bottom-0 left-0 z-[1] ${
                    titleHovered ? "left-5" : "left-0"
                  } transall`}
                />
              </div>
              <span className="text-tech-1">&</span>
            </div>
            <span>{heroData.title[1]}</span>
          </motion.h1>
        </AnimatePresence>
        <div className=" relative mt-10 ">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 384 }}
            exit={{ height: -384 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`absolute w-[1.5px]  transall bg-tech-0 top-0`}
          />
          <motion.p
            className="text-left ml-5  max-w-xl mb-10  "
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
          >
            {heroData.parag}
          </motion.p>
          <div className="flex mxl:flex-row flex-col">
            <Button
              moreStyles="ml-5 mt-5 text-light-1"
              animate="translate-x-2"
              color="bg-secondary-0"
              text="Contactez-Nous"
              icon={arroww}
            />
            <Button
              moreStyles="ml-5 mt-5 text-light-1"
              animate="rotate-180"
              color="bg-tech-1"
              text="Nos Offres"
              icon={plus}
            />
          </div>
        </div>
      </div>
      <div className="relative ">
        <div className="w-full h-full relative overflow-hidden ">
          <div className="w-full h-full gradientOverlay relative z-[3]  " />
          <video
            ref={vid}
            className="top-0 absolute object-cover w-full h-full z-[1] mt-1   "
            loop
            muted
          >
            <source
              src="https://clevercouncil.com/assets/videos/CleverTech.mp4"
              type="video/mp4"
            />
          </video>
          <AnimatePresence mode="wait">
            <motion.h1 className="absolute z-[5] top-[40%] -translate-y-1/2 right-[50%] translate-x-1/2 text-5xl font-black uppercase text-light-1 fadeInBlur">
              {heroData.videoSections[selectedTitle]}
            </motion.h1>
          </AnimatePresence>
          {autoPlayPrevented && (
            <button
              onClick={handleManualPlay}
              className="absolute z-[5] bottom-5 right-1/2 translate-x-1/2 text-lg font-black uppercase text-light-1 fadeInBlur "
            >
              Lire La Video
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
