import Contact from "../../Sections/Contact";
import Footer from "../../Sections/Footer";
import Navbar from "../../Sections/Navbar";
import ContactForm from "./ContactForm";

function ContactPage() {
  return (
    <div>
      <Navbar nav="academy" />
      <ContactForm />
      <Contact clever="academy" />
      <Footer clever="academy" />
    </div>
  );
}

export default ContactPage;
