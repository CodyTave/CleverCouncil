import Navbar from "../../../Sections/Navbar";
import { ReactNode } from "react";
import Contact from "../../../Sections/Contact";
import Footer from "../../../Sections/Footer";

export default function FormationLayout({ children }: { children: ReactNode }) {
  return (
    <section id="page-formation" className="c-academy">
      <Navbar nav="academy" />
      {children}
      <Contact clever="academy" />
      <Footer clever="academy" />
    </section>
  );
}
