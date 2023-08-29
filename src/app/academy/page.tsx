"use client";
import "../globals.css";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import Refs from "./Sections/Refs";
import About from "./Sections/About";
import Offre from "./Sections/Offre";
import Categories from "./Sections/Categories";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Dna from "./Sections/Dna";
const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Clever Council Academy - Disruptive Learning & Agile Solutions",
  description:
    "Cabinet expert en renforcement de capacité et training innovant, coaching, formation et certification, conception et Intégration de solutions Agiles complexes aux standards internationaux.",
  icons: {
    icon: "/academy.svg",
  },
};

export default function AcademyLanding() {
  return (
    <section id="top" className={work_sans.className + "grid c-academy"}>
      <Navbar splitbg />
      <Hero />
      <Refs />
      <About />
      <Offre />
      <Categories />
      <Dna />
      <Contact />
      <Footer />
    </section>
  );
}
