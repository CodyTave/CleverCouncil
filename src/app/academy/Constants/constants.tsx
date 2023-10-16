import { objective, pedags, requirs, target } from "@/assets";

export const navLinks: Array<{
  id: string;
  title: string;
  textClr: string;
  link?: string;
}> = [
  {
    id: "qsn",
    title: "QUI SOMMES-NOUS",
    textClr: "text-white font-semibold",
  },

  {
    id: "offre",
    title: "OFFRE INTÉGRÉE",
    textClr: "text-white font-semibold ",
  },
  {
    id: "formations",
    title: "NOS FORMATION",
    textClr: "text-secondary-0 font-bold",
  },
  {
    id: "adn",
    title: "NOTRE ADN",
    textClr: "text-secondary-0 font-bold",
  },
  {
    id: "contact",
    title: "CONTACTEZ NOUS",
    textClr: "text-secondary-0 font-bold",
    link: "/academy/contact",
  },
];

export const heroContent = [
  {
    id: 1,
    title: (
      <>
        Disruptive
        <br />
        Learning
      </>
    ),
    paragraph: `Valorisez votre force de frappe Business
     via des programmes de renforcement de capacité uniques
      et une pédagogie disruptive pour briser le status quo
       et semer les graines du succès.`,
  },
  {
    id: 2,
    title: (
      <>
        Agile
        <br />
        Solutions
      </>
    ),
    paragraph: `Profitez d'une approche unique en mode open book pour
    assurer la croissance et l'optimisation pérenne de vos systèmes
    d'informations en vue de garantir la flexibilité, la qualité et la
    performance de votre entreprise.`,
  },
];

export const FormationDetails = [
  {
    id: "objectifs",
    title: "Objectfs De La Formation",
    icon: objective,
  },
  {
    id: "target",
    title: "Public Vise De La Formation",
    icon: target,
  },
  {
    id: "requirments",
    title: "Prerequis De La Formation",
    icon: requirs,
  },
  {
    id: "pedagogiques",
    title: "Pedagogiques De La Formation",
    icon: pedags,
  },
];
