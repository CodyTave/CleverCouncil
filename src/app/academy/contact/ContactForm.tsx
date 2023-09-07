"use client";

import { arroww, contact, patter_bg } from "@/assets";
import Button from "../Components/Button";
import Input from "../Components/Input";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function ContactForm() {
  return (
    <div className="mlg:mt-28 mb-28 mt-16 sm:px-32 min-[455px]:px-20 px-5">
      <div className="grid gap-8">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "anticipate" }}
          className="sm:text-5xl text-3xl font-black text-secondary-0 uppercase"
        >
          Contact
        </motion.h1>
        <div className="pl-5 block relative overflow-hidden">
          <AnimatePresence>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: "anticipate" }}
            >
              <h2 className="sm:text-xl text-aca-0 font-semibold">
                Besoin d'aide ? Nous sommes à votre disposition !
              </h2>
              <p className=" sm:text-base text-sm max-w-2xl text-secondary-0 font-medium">
                Nous vous remercions pour votre intérêt et vous prions de bien
                vouloir remplir Notre conseiller client prendra attache avec
                vous dans les meilleurs délais afin de répondre à votre besoin
                de manière précise.
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="bg-aca-0 h-full w-[1.5px] absolute top-0 left-0 fadeInBlur" />
        </div>
      </div>
      <div className="grid xlg:grid-cols-2 gap-16 mt-10 ">
        <div className="grid gap-10 xlg:order-1 order-2">
          <div className="grid gap-5">
            <Input theme="light" ph="Nom et Prenom" />
            <Input theme="light" ph="Email" type="email" />
            <Input theme="light" ph="Telephone" type="tel" />
            <Input theme="light" ph="Message" type="textarea" />
            <Button
              moreStyles="text-white mt-5 w-full"
              text="Envoyer"
              animate="translate-x-2"
              icon={arroww}
              color="bg-aca-0 hover:bg-aca-1 transall"
            />
          </div>
        </div>
        <div className="w-full h-full block relative xlg:order-2 order-1">
          <Image className="w-full h-full object-cover" src={contact} alt="" />
          <Image
            className="absolute top-0 right-0 lg:w-60 sm:w-32 xxs:w-20 w-16 z-10 opacity-80"
            src={patter_bg}
            alt=""
          />
          <div className="absolute w-full h-full top-0 left-0  gradient opacity-70" />
          <div className="absolute w-full h-full top-0 left-0  gradient2 opacity-40" />
        </div>
      </div>
    </div>
  );
}
