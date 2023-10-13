import About from "../Sections/About";
import HeroIT from "../Sections/HeroIT";
import Navbar from "../Sections/Navbar";
import Refs from "../Sections/Refs";

export default function LandingPage() {
  return (
    <section className="grid c-tech">
      <Navbar splitbg nav="technology" scroll />
      <HeroIT />
      <Refs clever="technology" />
      <About clever="technology" />
    </section>
  );
}
