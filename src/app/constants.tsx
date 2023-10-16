import {
  aca,
  conseil,
  conseilPhoto,
  csecurity,
  csecurityPhoto,
  ensei,
  fb,
  histoire,
  ig,
  linked,
  mfAca,
  mfTech,
  tech,
  techdefaultOffer,
  transfo,
  transfoPhoto,
  valeur,
  vision,
} from "@/assets";
import {
  acaIcon,
  acaPhoto,
  defaultOffre,
  diagIcon,
  diagPhoto,
  eveIcon,
  evePhoto,
} from "@/assets";

export const aboutData = {
  preTitle: "découvrez clever",
  Title: "Qui sommes-nous",
  parag: (
    <>
      Institut international de conseil et de renforcement de capacités, nous
      disposons d&apos;une équipe solide aux compétences avérées, et d&apos;une
      présence internationale.
      <br /> Nous sommes fiers de forger avec nos partenaires leur force de
      frappe business
    </>
  ),
};

export const OffersIntro = {
  academy: `Nous proposons une offre intégrée pour adresser de manière cohérente et globale les besoinsen formation des entreprises`,
  tech: `Nous disposons d'une équipe aux expériences internationales et la compétence solide. Avec nos partenaires, notre objectif est commun, atteindre les résultats souhaités pour le business.`,
};
export const academyOffers = {
  defaultOffer: {
    title: "Offre adaptée",
    primarybg: "bg-aca-0",
    text: `
       Sessions spécifiques qui peuvent être organisées à l’intention, des
        organismes professionnels, des collectivités locales, des administrations
        ou des entreprises. Afin de renforcer les compétences et concrétiser les
        objectifs communs.
    `,
    photo: defaultOffre,
  },
  Offres: [
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
  ],
};
export const techOffers = {
  defaultOffer: {
    title: "Offre adaptée",
    primarybg: "bg-tech-0",
    text: `
       Sessions spécifiques qui peuvent être organisées à l’intention, des
        organismes professionnels, des collectivités locales, des administrations
        ou des entreprises. Afin de renforcer les compétences et concrétiser les
        objectifs communs.
    `,
    photo: techdefaultOffer,
  },
  Offres: [
    {
      id: 1,
      icon: transfo,
      title: "Transformation Digitale",
      text: `Ré imaginez votre activité et libérez le potentiel de la transformation numérique grâce à nos solutions pour les administrations publiques et les entreprises. Découvrez-en davantage et laissez nous vous accompagner pour libérer le potentiel de vos équipes et passer au niveau supérieur. Migrez vos systèmes vers un environnement cloud pour une activité plus sécurisé et plus optimale.
          `,
      color: "bg-[#ffc4e1]",
      primarybg: "bg-tech-1",
      primaryText: "text-secondary-0",
      width: "w-11",
      photo: transfoPhoto,
    },
    {
      id: 2,
      icon: conseil,
      title: "Conseil Et Accompagnement",
      text: `Profitez de notre expertise en SERVICES IT pour mieux comprendre vos besoins, adapter vos services et élaborer des stratégies flexibles et évolutifs. Nous mettons un système de conduite et de changement efficace pour aider nos partenaires dans le changement des comportements et des cultures de management.`,
      color: "bg-[#e5e6ff]",
      primarybg: "bg-secondary-0",
      primaryText: "text-secondary-1",
      width: "w-14",
      photo: conseilPhoto,
    },
    {
      id: 3,
      icon: csecurity,
      title: "Cyber Sécurité",
      text: `Protégez votre entreprise contre les cyber menaces grâce à notre service de cyber sécurité de pointe. Nos solutions d'audit, de test et de protection des données sont conçues pour offrir à votre entreprise la transformation numérique dont vous avez besoin.
        `,
      color: "bg-[#E9E1FF]",
      primarybg: "bg-secondary-1",
      primaryText: "text-aca-0",
      width: "w-11",
      photo: csecurityPhoto,
    },
  ],
};

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

export const adn = [
  {
    id: 1,
    title: "Histoire",
    content: `Fondée par des chefs de projets provenant du secteur
     des nouvelles les technologies, des télécoms et de l'énergie
      qui opèrent dans la formation depuis plus de dix ans de manière individuelle,
       l'idée a été de structurer et standardiser le meilleur
        de notre offre pour développer une enseigne internationale
    `,
    icon: histoire,
  },
  {
    id: 2,
    title: "Vision",
    content: `Orfèvres de la formation, notre ambition est de créer de la
     valeur de maniere durable pour les entreprises. Nous construisons des
      offres sur mesure, basées sur une évaluation pragmatique des besoins de chaque client

    `,
    icon: vision,
  },
  {
    id: 3,
    title: "Valeurs",
    content: `Nous sommes avant tout proches de notre client pour lui
     apporter une vision claire, du discernement et de l'agilité.
      CLEAR, WISE, SMART. Nous construisons des offres sur mesure,
       basées sur une évaluation pragmatique des besoins de chaque entreprise
    `,
    icon: valeur,
  },
  {
    id: 4,
    title: "Enseignants",
    content: `Ils sont triés sur le volet avec rigueur et assurent 
    avec intégrité leur mission pour être le vecteur de notre vision
     pédagogique et nos valeurs. Ils justifient également d'une base
      de connaissance académique solide,
      d'une expérience pratique ainsi que des certifications en vigueur

    `,
    icon: ensei,
  },
];

export const contactInfo = {
  email: "contact@clevercouncil.com",
  phone: ["+212 520 510 215", "+212 665 141 848"],
  address: `1 Rue Abou Taour, Socrate, 4éme 
  étage N12 - Casablanca, 20370`,
  socialMedia: [
    {
      id: "facebook",
      icon: fb,
      link: "https://www.facebook.com/clevercouncil",
    },
    {
      id: "instagram",
      icon: ig,
      link: "https://www.instagram.com/clevercouncil/",
    },
    {
      id: "linkedin",
      icon: linked,
      link: "https://www.linkedin.com/company/clevercouncil",
    },
  ],
  map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13296.237779205787!2d-7.6448628!3d33.5778058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x510627aa3e56343e!2sClever%20council!5e0!3m2!1sfr!2sma!4v1653836719671!5m2!1sfr!2sma",
  location:
    "https://www.google.com/maps?ll=33.571441,-7.651677&z=14&t=m&hl=fr&gl=MA&mapclient=embed&cid=5838397579076187198",
};

export const footerLinks = [
  {
    id: "about",
    title: "Qui sommes-nous",
    subLinks: [
      { id: 1, title: "A propos", link: "#qsn" },
      { id: 2, title: "Notre ADN", link: "#adn" },
      { id: 3, title: "Portfolio", link: "" },
      { id: 4, title: "Contact", link: "/academy/contact" },
    ],
  },
  {
    id: "fastaccess",
    title: "ACCÈS RAPIDE",
    subLinks: [
      { id: 1, title: "Offre intégrée", link: "#offre" },
      { id: 2, title: "Formations", link: "#formation" },
      { id: 3, title: "Integration SI", link: "" },
      { id: 4, title: "Transformation Digitale", link: "" },
    ],
  },
  {
    id: "clever",
    title: "Clever Council",
    subLinks: [
      { id: 0, title: "Clever", link: "/" },
      { id: 1, title: "Academy", link: "/academy" },
      { id: 2, title: "Technology Services", link: "/technology" },
    ],
  },
];

//////// clever gate page
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
