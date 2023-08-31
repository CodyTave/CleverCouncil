"use client";
import Navbar from "../../Sections/Navbar";
import type { ReactNode } from "react";
import { getCategorie } from "../../Services/Services";
import CategoryDropdown from "./Components/CategoryDropdown";
import { notFound } from "next/navigation";
import Contact from "../../Sections/Contact";
import Footer from "../../Sections/Footer";

export default function CategoryLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { slug: string };
}) {
  const CatID = getCategorie(params.slug)
    ? getCategorie(params.slug)
    : notFound();
  return (
    <section>
      <Navbar splitbg={false} />
      <div className="flex gap-y-10 mlg:flex-row flex-col mlg:justify-between sm:px-32 xs:px-20 px-5 py-10 bg-secondary-0 text-white">
        <div>
          <span className="text-lg">Explorer</span>
          <h1 className="text-4xl font-bold">Nos Catégories</h1>
          <div className="mlg:block hidden relative">
            <div className="w-[1.5px] h-16 absolute left-0 top-3 bg-aca-0" />
          </div>
        </div>
        <div className="flex mlg:justify-center justify-end items-center">
          <CategoryDropdown CatID={CatID?.id || 0} />
        </div>
      </div>
      <section>{children}</section>
      <Contact />
      <Footer />
    </section>
  );
}
