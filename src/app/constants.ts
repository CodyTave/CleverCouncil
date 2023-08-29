import { aca, com, mfAca, mfCom, mfTech, tech } from "@/assets";

export const Clevers = [
  {
    index: 0,
    id: "com",
    title: "COM & EVENTS",
    position: "translate-x-full",
    image: mfCom,
    logo: com,
    bg: "bg-com-2",
    stroke: "stroke-com",
    textresp: "g_msm:text-com-0",
    text: "text-com-0",
    color: "bg-com-0",
    svg: "#C6A180",
    links: [
      {
        id: "ws",
        title: "VISITER",
        url: "/com-events",
      },
      {
        id: "fb",
        title: "FACEBOOK",
        url: "https://www.facebook.com/clevercouncil",
      },
      {
        id: "ig",
        title: "INSTAGRAM",
        url: "https://www.instagram.com/clevercomandevents/",
      },
      {
        id: "ln",
        title: "LINKEDIN",
        url: "https://www.linkedin.com/company/clevercouncil/",
      },
    ],
  },
  {
    index: 1,
    id: "tech",
    title: "TECH SERVICES",
    position: "",
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
    position: "-translate-x-full ",
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
