"use client";
import "../globals.css";
import Navbar from "../Sections/Navbar";
import Hero from "../Sections/Hero";
import Refs from "../Sections/Refs";
import About from "../Sections/About";
import Offre from "../Sections/Offre";
import Categories from "../Sections/Categories";
import Contact from "../Sections/Contact";
import Footer from "../Sections/Footer";
import Dna from "../Sections/Dna";
import SearchModal from "../Components/SearchModal";

export default function LandingPage() {
  return (
    <section id="top" className="grid c-academy">
      <Navbar nav="academy" scroll splitbg />
      <Hero />
      <Refs clever="academy" />
      <About clever="academy" />
      <Offre clever="academy" />
      <Categories />
      <Dna clever="academy" />
      <Contact clever="academy" />
      <Footer clever="academy" />
      <SearchModal />
    </section>
  );
}
