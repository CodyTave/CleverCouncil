import type { Metadata } from "next";
import SearchModal from "../Components/SearchModal";

export const metadata: Metadata = {
  title: "Clever Academy",
  description:
    "Cabinet expert en renforcement de capacité et training innovant, coaching, formation et certification, conception et Intégration de solutions Agiles complexes aux standards internationaux.",
  icons: {
    icon: "/academy.svg",
  },
};

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="c-academy">
      {children}
      <SearchModal />
    </main>
  );
}
