import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "../../../Sections/Navbar";
import { getCategorie } from "../../Services/Services";
import CategoryDropdown from "./Components/CategoryDropdown";
import { notFound } from "next/navigation";
import Contact from "../../../Sections/Contact";
import Footer from "../../../Sections/Footer";
import { getCategoryBySlug } from "../../Services/api";
import CategoryHeader from "./Components/CategoryHeader";

type props = {
  params: { slug: string };
};
export async function generateMetadata({ params }: props): Promise<Metadata> {
  const id = params.slug;
  const CatID = getCategorie(id) || notFound();
  return {
    title: CatID?.title,
  };
}

export default async function CategoryLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { slug: string };
}) {
  return (
    <section id="page-categorie" className="c-academy">
      <Navbar nav="academy" />
      <CategoryHeader slug={params.slug} />
      <section>{children}</section>
      <Contact clever="academy" />
      <Footer clever="academy" />
    </section>
  );
}
