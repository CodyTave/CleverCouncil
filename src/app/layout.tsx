import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clever Council Maroc",
  description:
    "Cabinet expert en renforcement de capacité et training innovant, coaching, formation et certification, conception et Intégration de solutions Agiles complexes aux standards internationaux.",
  icons: {
    icon: "/academy.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
