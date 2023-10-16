import type { Metadata } from "next";
import Navbar from "../../../Sections/Navbar";
import { getFormation } from "../../Services/Services";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import Contact from "../../../Sections/Contact";
import Footer from "../../../Sections/Footer";

type props = {
  params: { slug: string };
};
export async function generateMetadata({ params }: props): Promise<Metadata> {
  const { slug } = params;
  const Formation = getFormation(slug) || notFound();
  return {
    title: "Formation " + Formation?.title,
  };
}

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
