import { aca, mfAca, mfTech, tech } from "@/assets";

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
