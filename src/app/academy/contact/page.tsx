import Contact from "../Sections/Contact";
import Footer from "../Sections/Footer";
import Navbar from "../Sections/Navbar";
import ContactForm from "./ContactForm";

function ContactPage() {
  return (
    <div>
      <Navbar />
      <ContactForm />
      <Contact />
      <Footer />
    </div>
  );
}

export default ContactPage;
