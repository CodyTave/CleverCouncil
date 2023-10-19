import Contact from "../../Sections/Contact";
import Footer from "../../Sections/Footer";
import Navbar from "../../Sections/Navbar";
import ContactForm from "../../Components/ContactForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contactez-nous - Clever Technology Services",
  description: `Contactez-nous facilement ! Retrouvez nos informations de contact, y compris notre adresse, numéro de téléphone et adresse e-mail. Que vous ayez des questions, des commentaires ou que vous souhaitiez collaborer, nous sommes là pour vous aider. Contactez-nous dès aujourd'hui et établissons le lien.`,
};

function ContactPage() {
  return (
    <div>
      <Navbar nav="technology" />
      <ContactForm clever="technology" />
      <Contact clever="technology" />
      <Footer clever="technology" />
    </div>
  );
}

export default ContactPage;
