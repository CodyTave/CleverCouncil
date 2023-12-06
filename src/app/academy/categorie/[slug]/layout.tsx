import type { ReactNode } from "react";
import Navbar from "../../../Sections/Navbar";
import Contact from "../../../Sections/Contact";
import Footer from "../../../Sections/Footer";
import CategoryHeader from "./Components/CategoryHeader";
import SearchModal from "@/app/Components/SearchModal";

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
      <SearchModal />
    </section>
  );
}
