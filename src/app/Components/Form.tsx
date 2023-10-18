"use client";
import { arroww, check, enterprise, particulier } from "@/assets";
import Image from "next/image";
import { useState, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";
import { postInscription } from "../Services/api";

function Form({
  Category,
  Formation,
}: {
  Category: string;
  Formation: string;
}) {
  const userTypes = [
    { id: "Particulier", icon: particulier },
    { id: "Entreprise", icon: enterprise },
  ];
  const [userType, setType] = useState("Particulier");
  const [Submitted, setSubmmited] = useState(false);
  const [dirtyForm, setDirty] = useState(false);
  const [form, setForm] = useState({
    typeClient: userType,
    name: "",
    email: "",
    phone: "",
    city: "",
    company: "",
    formation: Formation,
    category: Category,
  });
  const [validation, setValidation] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    company: "",
  });
  useEffect(() => {
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
        if (!(key === "company" && form.typeClient === "Particulier")) {
          setValidation((prev) => ({
            ...prev,
            [key]: "Ce champ est obligatoire",
          }));
        }
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
        } else if (key === "phone") {
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
        } else if (
          key !== "typeClient" &&
          key !== "formation" &&
          key !== "category"
        ) {
          setValidation((prev) => ({
            ...prev,
            [key]: "",
          }));
        }
      }
    });
  };
  const handleSubmit = () => {
    if (!dirtyForm) {
      setDirty(true);
      handleValidation();
      return;
    }
    handleValidation();
    console.log(validation);
    if (Object.values(validation).every((value) => value === "")) {
      postInscription(form).then(() => {
        setDirty(false);
        setForm({
          typeClient: userType,
          name: "",
          email: "",
          phone: "",
          city: "",
          company: "",
          formation: Formation,
          category: Category,
        });
        setSubmmited(true);
      });
    }
  };

  function handleClientType(type: string) {
    setType(type);
    setForm((prevForm) => ({
      ...prevForm,
      ["typeClient"]: type,
    }));
    if (type === "Particulier") {
      setForm((prev) => ({
        ...prev,
        ["company"]: "",
      }));
      setValidation((prev) => ({
        ...prev,
        ["company"]: "",
      }));
    } else {
      if (dirtyForm) {
        setValidation((prev) => ({
          ...prev,
          ["company"]: "Ce champ est obligatoire",
        }));
      }
    }
  }

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
              onClick={() => handleClientType(user.id)}
              key={user.id}
              className={`flex relative gap-3 flex-col justify-center items-center border xxs:px-5 px-3 xxs:py-6 py-4 cursor-pointer hover:opacity-100 transall ${
                userType === user.id ? "border-[#3ee671]" : "opacity-60"
              }`}
            >
              <Image className="w-5" src={user.icon} alt="particulier" />
              <h1 className="font-medium">{user.id}</h1>
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
        <Input
          isSubmitted={Submitted}
          validation={validation["name"]}
          onChange={handleChange}
          name="name"
          ph="Nom & Prénom"
        />
        <Input
          isSubmitted={Submitted}
          validation={validation["email"]}
          onChange={handleChange}
          name="email"
          type="email"
          ph="Adresse E-mail"
        />
        <AnimatePresence>
          {userType === "Entreprise" && (
            <motion.div
              layout
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              <Input
                isSubmitted={Submitted}
                validation={validation["company"]}
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
          <Input
            isSubmitted={Submitted}
            validation={validation["phone"]}
            onChange={handleChange}
            name="phone"
            type="tel"
            ph="Tel."
          />
          <Input
            isSubmitted={Submitted}
            validation={validation["city"]}
            onChange={handleChange}
            name="city"
            ph="Ville"
          />
        </motion.div>
        <Button
          onClick={handleSubmit}
          animate="translate-x-2"
          moreStyles="mt-5"
          color="bg-aca-0"
          icon={arroww}
          text="Envoyer"
        />
        {Submitted && (
          <div className="flex  gap-3 text-[#59c67a] font-black uppercase fadeInBlur">
            <Image className="w-5" alt="" src={check} />
            Votre inscription a été effectuée avec succès.
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
