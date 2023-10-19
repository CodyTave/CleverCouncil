export const navLinks: Array<{
  id: string;
  title: string;
  textClr: string;
  link?: string;
}> = [
  {
    id: "qsn",
    title: "QUI SOMMES-NOUS",
    textClr: " text-secondary-0 font-bold",
  },

  {
    id: "offre",
    title: "OFFRE INTÉGRÉE",
    textClr: " text-secondary-0 font-bold ",
  },
  {
    id: "technologies",
    title: "NOS TECHNOLOGIES",
    textClr: "text-white font-semibold",
  },
  {
    id: "adn",
    title: "NOTRE ADN",
    textClr: "text-white font-semibold",
  },
  {
    id: "contact",
    title: "CONTACTEZ NOUS",
    textClr: "text-white font-semibold",
    link: "/technology/contact",
  },
];
