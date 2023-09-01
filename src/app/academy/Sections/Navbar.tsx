"use client";
import { Logo } from "@/assets";
import { useState } from "react";
import { navLinks } from "../Constants/constants";
import ToggleBurger from "../Components/ToggleBurger";
import NextLink from "next/link";
import Image from "next/image";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";
interface props {
  splitbg?: boolean;
  scroll?: boolean;
}
function Navbar({ splitbg = false, scroll = false }: props) {
  const [toggled, setToggle] = useState(false);
  console.log(window.location.pathname);
  return (
    <>
      <nav
        className={`xlg:grid hidden grid-cols-6 ${
          splitbg ? "splitbg" : "bg-secondary-0"
        }  p-10 px-32 justify-items-center items-center gap-20 `}
      >
        <Link href={"/academy"}>
          <Image className="cursor-pointer" alt="Clever Council" src={Logo} />
        </Link>
        {navLinks.map((nav) => (
          <>
            {!scroll ? (
              <Link
                href={"/academy/#" + nav.id}
                scroll
                key={nav.id}
                className={`${
                  splitbg ? nav.textClr : "font-semibold text-white"
                } text-sm transall cursor-pointer text-left hover:opacity-60 `}
              >
                {nav.title.split(" ").map((wrd, index) => (
                  <div key={index}>{wrd}</div>
                ))}
              </Link>
            ) : (
              <Scroll
                to={nav.id}
                smooth
                offset={-30}
                key={nav.id}
                className={`${
                  splitbg ? nav.textClr : "font-semibold text-white"
                } text-sm transall cursor-pointer text-left hover:opacity-60 `}
              >
                {nav.title.split(" ").map((wrd, index) => (
                  <div key={index}>{wrd}</div>
                ))}
              </Scroll>
            )}
          </>
        ))}
      </nav>

      <nav className="grid xlg:hidden transall h-auto gap-x-10 bg-secondary-0 p-10 ">
        <div className="flex  justify-center items-center xs:gap-20 xxs:gap-10 gap-4  ">
          <NextLink href={"/academy"}>
            <Image className="cursor-pointer" src={Logo} alt="Clever Council" />
          </NextLink>
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
            <>
              {!scroll ? (
                <Link
                  scroll
                  href={"/academy/#" + nav.id}
                  key={nav.id}
                  className={`fadeInBlur text-light-0 transall cursor-pointer`}
                >
                  {nav.title}
                </Link>
              ) : (
                <Scroll
                  to={nav.id}
                  smooth
                  offset={-30}
                  key={nav.id}
                  className={`fadeInBlur text-light-0 transall cursor-pointer`}
                >
                  {nav.title}
                </Scroll>
              )}
            </>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
