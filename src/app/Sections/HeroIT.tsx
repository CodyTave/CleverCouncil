"use client";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../Components/Button";
import { arroww, plus } from "@/assets";
export default function HeroIT() {
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
              <div className="relative  w-fit">
                <span className="z-[2] relative">Consulting</span>
                <span className="absolute h-3 w-full bg-tech-0 bottom-0 left-0 z-[1]" />
              </div>
              <span className="text-tech-1">&</span>
            </div>
            <span>accompagnement</span>
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
            Valorisez votre force de frappe Business via des programmes de
            renforcement de capacité uniques et une pédagogie disruptive pour
            briser le status quo et semer les graines du succès.
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
          <div className="w-full h-full gradientOverlay relative z-[3] " />
          <video
            className="top-0 absolute object-cover w-full h-full z-[1] mt-1   "
            autoPlay
            loop
            muted
          >
            <source
              src="https://clevercouncil.com/assets/videos/CleverTech.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}
