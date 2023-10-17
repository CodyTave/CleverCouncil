"use client";
import { arroww, check, enterprise, particulier } from "@/assets";
import Image from "next/image";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";

function Form({
  Category,
  Formation,
}: {
  Category: string;
  Formation: string;
}) {
  const userTypes = [
    { id: "ind", title: "Particulier", icon: particulier },
    { id: "ent", title: "Entreprise", icon: enterprise },
  ];
  const [userType, setType] = useState("ind");
  const [form, setForm] = useState({
    typeClient: "",
    name: "",
    email: "",
    phone: "",
    city: "",
    formation: Formation,
    category: Category,
    company: "",
  });
  const [validation, setValidation] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    company: "",
  });
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="grid md:grid-cols-2 xs:gap-0 gap-5 md:mt-0 mt-5">
        <div className="flex items-end relative">
          <h1 className="font-extralight text-2xl pb-5">Vous êtes :</h1>
          <div className="h-[2px] w-10 bg-aca-0 absolute" />
        </div>
        <div className="flex justify-end gap-10">
          {userTypes.map((user) => (
            <div
              onClick={() => setType(user.id)}
              key={user.id}
              className={`flex relative gap-3 flex-col justify-center items-center border xxs:px-5 px-3 xxs:py-6 py-4 cursor-pointer hover:opacity-100 transall ${
                userType === user.id ? "border-[#3ee671]" : "opacity-60"
              }`}
            >
              <Image className="w-5" src={user.icon} alt="particulier" />
              <h1 className="font-medium">{user.title}</h1>
              {userType === user.id && (
                <Image
                  className="w-5 absolute top-2 right-2"
                  src={check}
                  alt=""
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-5">
        <div className="grid sm:grid-cols-2 gap-3">
          <Input onChange={handleChange} name="firstName" ph="Nom" />
          <Input onChange={handleChange} name="lastName" ph="Prenom" />
        </div>
        <Input
          onChange={handleChange}
          name="email"
          type="email"
          ph="Adresse E-mail"
        />
        <AnimatePresence>
          {userType === "ent" && (
            <motion.div
              layout
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              <Input
                onChange={handleChange}
                name="company"
                ph="Votre Entreprise"
              />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          layout
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="grid sm:grid-cols-2 gap-3"
        >
          <Input onChange={handleChange} name="phone" type="tel" ph="Tel." />
          <Input onChange={handleChange} name="city" ph="Ville" />
        </motion.div>
        <Button
          animate="translate-x-2"
          moreStyles="mt-5"
          color="bg-aca-0"
          icon={arroww}
          text="Envoyer"
        />
      </div>
    </div>
  );
}

export default Form;
