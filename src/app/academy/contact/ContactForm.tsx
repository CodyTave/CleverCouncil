"use client";
import { arroww, check, contact, contact_hv, patter_bg } from "@/assets";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, createContext } from "react";
import { ContactPageData } from "@/app/constants";
import { postContact } from "@/app/Services/api";

export default function ContactForm() {
  const [Hovered, setHovered] = useState(contact);
  const [Submitted, setSubmmited] = useState(false);
  const [dirtyForm, setDirty] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    telephone: "",
    commentaire: "",
  });
  const [validation, setValidation] = useState({
    name: "",
    email: "",
    telephone: "",
    commentaire: "",
  });
  useEffect(() => {
    if (Object.values(form).every((value) => value === "")) {
      setHovered(contact);
    } else {
      setHovered(contact_hv);
    }
    if (dirtyForm) {
      handleValidation();
    }
  }, [form]);
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleValidation = () => {
    Object.entries(form).map(([key, value]) => {
      if (value === "") {
        setValidation((prev) => ({
          ...prev,
          [key]: "Ce champ est obligatoire ",
        }));
      } else {
        if (key === "email") {
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          !emailRegex.test(value)
            ? setValidation((prev) => ({
                ...prev,
                [key]: "veuillez saisir un email valide",
              }))
            : setValidation((prev) => ({
                ...prev,
                [key]: "",
              }));
        } else if (key === "telephone") {
          const phoneRegex =
            /^(?:\+\d{1,3}[-. ]?)?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
          !phoneRegex.test(value)
            ? setValidation((prev) => ({
                ...prev,
                [key]: "veuillez saisir un numero tel valide ",
              }))
            : setValidation((prev) => ({
                ...prev,
                [key]: "",
              }));
        } else {
          setValidation((prev) => ({
            ...prev,
            [key]: "",
          }));
        }
      }
    });
  };
  const handleSubmit = () => {
    setDirty(true);
    handleValidation();
    if (Object.values(form).every((value) => value !== "")) {
      postContact(form).then(() => {
        setDirty(false);
        setForm({
          name: "",
          email: "",
          telephone: "",
          commentaire: "",
        });
        setSubmmited(true);
      });
    }
  };
  return (
    <div className="mlg:mt-28 mb-28 mt-16 sm:px-32 min-[455px]:px-20 px-5">
      <div className="grid gap-8">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "anticipate" }}
          className="sm:text-5xl text-3xl font-black text-secondary-0 uppercase"
        >
          {ContactPageData.title}
        </motion.h1>
        <div className="pl-5 block relative overflow-hidden">
          <AnimatePresence>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: "anticipate" }}
            >
              <h2 className="sm:text-xl text-aca-0 font-semibold">
                {ContactPageData.subTitle}
              </h2>
              <p className=" sm:text-base text-sm max-w-2xl text-secondary-0 font-medium">
                {ContactPageData.text}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="bg-aca-0 h-full w-[1.5px] absolute top-0 left-0 fadeInBlur" />
        </div>
      </div>
      <div className="grid xlg:grid-cols-2 gap-16 mt-10 ">
        <div className="grid gap-10 xlg:order-1 order-2">
          <div className="grid gap-5">
            <Input
              isSubmitted={Submitted}
              validation={validation["name"]}
              onChange={handleChange}
              name="name"
              theme="light"
              ph="Nom et Prenom"
            />
            <Input
              isSubmitted={Submitted}
              validation={validation["email"]}
              onChange={handleChange}
              name="email"
              theme="light"
              ph="Email"
              type="email"
            />
            <Input
              isSubmitted={Submitted}
              validation={validation["telephone"]}
              onChange={handleChange}
              name="telephone"
              theme="light"
              ph="Telephone"
              type="tel"
            />
            <Input
              isSubmitted={Submitted}
              validation={validation["commentaire"]}
              onChange={handleChange}
              name="commentaire"
              theme="light"
              ph="Commentaire"
              type="textarea"
            />
            <Button
              onClick={handleSubmit}
              moreStyles="text-white mt-5 w-full"
              text="Envoyer"
              animate="translate-x-2"
              icon={arroww}
              color="bg-aca-0 hover:bg-aca-1 transall"
            />
            {Submitted && (
              <div className="flex  gap-3 text-[#59c67a] font-black uppercase fadeInBlur">
                <Image className="w-5" alt="" src={check} />
                Merci de nous avoir contacté, nous vous répondrons dès que
                possible
              </div>
            )}
          </div>
        </div>
        <div className="w-full h-full block relative xlg:order-2 order-1">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={Hovered.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full object-cover"
              src={Hovered.src}
              alt=""
            />
          </AnimatePresence>
          <div className="absolute w-full h-full top-0 left-0  gradient opacity-70 " />
          <div className="absolute w-full h-full top-0 left-0  gradient2 opacity-40 z-20" />
          <Image
            className="absolute top-0 right-0 lg:w-60 sm:w-32 xxs:w-20 w-16 z-10 opacity-80"
            src={patter_bg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
