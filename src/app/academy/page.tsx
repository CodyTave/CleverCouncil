import "../globals.css";
import { Work_Sans } from "next/font/google";
import type { Metadata } from "next";
import LandingPage from "./LandingPage";

export const metadata: Metadata = {
  title: "Clever Academy",
  description:
    "Cabinet expert en renforcement de capacité et training innovant, coaching, formation et certification, conception et Intégration de solutions Agiles complexes aux standards internationaux.",
  icons: {
    icon: "/academy.svg",
  },
};

const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function Academy() {
  return (
    <section className={work_sans.className}>
      <LandingPage />
    </section>
  );
}
