import Navbar from "@/app/Sections/Navbar";
import { ReactNode } from "react";
import Contact from "@/app/Sections/Contact";
import Footer from "@/app/Sections/Footer";

export default function FormationLayout({ children }: { children: ReactNode }) {
  return (
    <section id="page-formation" className="c-academy">
      <Navbar nav="academy" />
      <section className="min-h-[80vh]">{children}</section>
      <Contact clever="academy" />
      <Footer clever="academy" />
    </section>
  );
}
