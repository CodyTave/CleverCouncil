import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clever Technology Services",
  description: "",
  icons: {
    icon: "/tech.svg",
  },
};

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="c-academy">{children}</main>;
}
