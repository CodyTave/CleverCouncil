import { Logo } from "@/assets";
import { useState } from "react";
import { navLinks } from "../Constants/constants";
import ToggleBurger from "../Components/ToggleBurger";
import { Link } from "react-scroll";
import Image from "next/image";
interface props {
  splitbg: boolean;
}
function Navbar({ splitbg = false }: props) {
  const [toggled, setToggle] = useState(false);
  return (
    <>
      <nav
        className={`xlg:grid hidden grid-cols-6 ${
          splitbg ? "splitbg" : "bg-secondary-0"
        }  p-10 px-32 justify-items-center items-center gap-20 `}
      >
        <Image className="cursor-pointer" alt="Clever Council" src={Logo} />
        {navLinks.map((nav) => (
          <Link
            smooth
            offset={-50}
            to={nav.id}
            key={nav.id}
            className={`${
              splitbg ? nav.textClr : "font-semibold text-white"
            } text-sm transall cursor-pointer text-left hover:opacity-60 `}
          >
            {nav.title.split(" ").map((wrd, index) => (
              <div key={index}>{wrd}</div>
            ))}
          </Link>
        ))}
      </nav>

      <nav className="grid xlg:hidden transall h-auto gap-x-10 bg-secondary-0 p-10 ">
        <div className="flex  justify-center items-center xs:gap-20 xxs:gap-10 gap-4  ">
          <Image className="cursor-pointer" src={Logo} alt="Clever Council" />
          <ToggleBurger
            toggled={toggled}
            setToggle={() => {
              setToggle(!toggled);
            }}
          />
        </div>
        <div
          className={`grid gap-10 font-semibold overflow-hidden transall -mb-8 ${
            toggled ? "h-[280px] mt-10" : "h-0 mt-0"
          } `}
        >
          {navLinks.map((nav) => (
            <Link
              offset={-50}
              smooth
              to={nav.id}
              key={nav.id}
              className={`fadeInBlur text-light-0 transall cursor-pointer`}
            >
              {nav.title}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
