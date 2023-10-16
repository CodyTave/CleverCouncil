import About from "../Sections/About";
import Contact from "../Sections/Contact";
import Dna from "../Sections/Dna";
import Footer from "../Sections/Footer";
import HeroIT from "../Sections/HeroIT";
import Navbar from "../Sections/Navbar";
import Offre from "../Sections/Offre";
import Refs from "../Sections/Refs";

export default function LandingPage() {
  return (
    <section className="grid c-tech">
      <Navbar splitbg nav="technology" scroll />
      <HeroIT />
      <Refs clever="technology" />
      <About clever="technology" />
      <Offre clever="technology" />
      <div className="mt-20">
        <Dna clever="technology" />
      </div>
      <Contact clever="technology" />
      <Footer clever="technology" />
    </section>
  );
}
