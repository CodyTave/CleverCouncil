import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clever Academy",
  description:
    "Cabinet expert en renforcement de capacité et training innovant, coaching, formation et certification, conception et Intégration de solutions Agiles complexes aux standards internationaux.",
  icons: {
    icon: "/com.svg",
  },
};

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}