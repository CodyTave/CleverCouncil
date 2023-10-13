import HeroIT from "../Sections/HeroIT";
import Navbar from "../Sections/Navbar";

export default function LandingPage() {
  return (
    <section className="grid c-tech">
      <Navbar splitbg nav="technology" scroll />
      <HeroIT />
    </section>
  );
}
