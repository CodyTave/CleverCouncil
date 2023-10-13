import { aca, mfAca, mfTech, tech } from "@/assets";
import {
  acaIcon,
  acaPhoto,
  defaultOffre,
  diagIcon,
  diagPhoto,
  eveIcon,
  evePhoto,
} from "@/assets";
export const defaultOffer = {
  title: "Offre adaptée",
  primarybg: "bg-aca-0",
  text: `
     Sessions spécifiques qui peuvent être organisées à l’intention, des
      organismes professionnels, des collectivités locales, des administrations
      ou des entreprises. Afin de renforcer les compétences et concrétiser les
      objectifs communs.
  `,
  photo: defaultOffre,
};

export const Offres = [
  {
    id: 1,
    icon: diagIcon,
    title: "Diagnostic compétences",
    text: `Diagnostic des compétences conjointement avec
       les entités métier et les Ressources Humaines afin d'évaluer
        la capitalisation du savoir-faire à date, ainsi que le gap
         à combler, puis accompagnement en vue de con-tribuer
          à un alignement stratégique avec la vision Corporate

        `,
    color: "bg-[#d8d9ff]",
    primarybg: "bg-secondary-0",
    primaryText: "text-secondary-0",
    width: "w-8",
    photo: diagPhoto,
  },
  {
    id: 2,
    icon: acaIcon,
    title: "académie d'entreprise",
    text: `Solution intégrée clé en main d'Académie d'entreprise,
       basée sur une approche ergonomique permettant aux employés
        de s'auto-former de manière sereine sur des modules universels ou métier.
         Tailoring du bouquet de formation inhouse, pour des cursus prédéfinis.
          Statistiques d'utilisation et du retour sur investissement.`,
    color: "bg-[#ddcfff]",
    primarybg: "bg-secondary-1",
    primaryText: "text-secondary-1",
    width: "w-14",
    photo: acaPhoto,
  },
  {
    id: 3,
    icon: eveIcon,
    title: "Evènement d'entreprise",
    text: `Evènement d'entreprise autour de la formation,
      de l'intégration des talents et pour favoriser le travail
      en équipe tels que les team buildings à forte valeur ajoutée.
      Campagnes de Micro-formation pour des sujets spots liés notamment
      à la santé, la sécurité informatique, l'ergonomie, la qualité
      `,
    color: "bg-[#d3f2ff]",
    primarybg: "bg-aca-0",
    primaryText: "text-aca-0",
    width: "w-8",
    photo: evePhoto,
  },
];

export const Clevers = [
  {
    index: 1,
    id: "tech",
    title: "TECH SERVICES",
    position: "translate-x-1/2",
    image: mfTech,
    logo: tech,
    bg: "bg-tech-2",
    stroke: "stroke-tech",
    textresp: "g_msm:text-tech-1",
    text: "text-tech-1",
    color: "bg-tech-1",
    svg: "#B02D6E",
    links: [
      {
        id: "ws",
        title: "VISITER",
        url: "/technology",
      },
      {
        id: "fb",
        title: "FACEBOOK",
        url: "https://www.facebook.com/clevercouncil",
      },
      {
        id: "ig",
        title: "INSTAGRAM",
        url: "https://www.instagram.com/clev.ertechnologyservices/",
      },
      {
        id: "ln",
        title: "LINKEDIN",
        url: "https://www.linkedin.com/company/clevercouncil/",
      },
    ],
  },
  {
    index: 2,
    id: "academy",
    title: "ACADEMY",
    position: "-translate-x-1/2 ",
    image: mfAca,
    logo: aca,
    bg: "bg-aca-2",
    stroke: "stroke-aca",
    textresp: "g_msm:text-aca-1",
    text: "text-aca-1",
    color: "bg-aca-1",
    svg: "#109CD7",
    links: [
      {
        id: "ws",
        title: "VISITER",
        url: "/academy",
      },
      {
        id: "fb",
        title: "FACEBOOK",
        url: "https://www.facebook.com/clevercouncil",
      },
      {
        id: "ig",
        title: "INSTAGRAM",
        url: "https://www.instagram.com/cleveracademy__/",
      },
      {
        id: "ln",
        title: "LINKEDIN",
        url: "https://www.linkedin.com/company/clevercouncil/",
      },
    ],
  },
];
