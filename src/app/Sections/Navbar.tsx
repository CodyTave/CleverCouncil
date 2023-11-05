"use client";
import { LogoAca, LogoTech, LogoWhiteTech } from "@/assets";
import { useState } from "react";
import { navLinks as academyLinks } from "../academy/Constants/constants";
import { navLinks as techLinks } from "../technology/Constants/constants";

import ToggleBurger from "../Components/ToggleBurger";
import NextLink from "next/link";
import Image from "next/image";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";
interface props {
  splitbg?: boolean;
  scroll?: boolean;
  nav: "academy" | "technology";
}
function Navbar({ splitbg = false, scroll = false, nav }: props) {
  const [toggled, setToggle] = useState(false);
  const navLinks = nav === "academy" ? academyLinks : techLinks;
  return (
    <>
      <nav
        className={`xlg:grid hidden grid-cols-6 ${
          splitbg
            ? nav === "academy"
              ? "splitbg-aca"
              : "splitbg-tech"
            : nav === "academy"
            ? "bg-secondary-0"
            : "bg-tech-1"
        }  p-10 px-32 justify-items-center items-center gap-20 `}
      >
        <Link prefetch href={"/" + nav}>
          <Image
            className="cursor-pointer"
            alt="Clever Council"
            src={
              nav === "academy" ? LogoAca : splitbg ? LogoTech : LogoWhiteTech
            }
          />
        </Link>
        {navLinks.map((navig) => (
          <span key={navig.id}>
            {!scroll || navig.link ? (
              <Link
                prefetch
                href={navig.link ? navig.link : `/${nav}/#` + navig.id}
                scroll
                className={`${
                  splitbg ? navig.textClr : "font-semibold text-white"
                } text-sm transall cursor-pointer text-left hover:opacity-60 `}
              >
                {navig.title.split(" ").map((wrd, index) => (
                  <div key={index}>{wrd}</div>
                ))}
              </Link>
            ) : (
              <Scroll
                to={navig.id}
                smooth
                offset={-30}
                className={`${
                  splitbg ? navig.textClr : "font-semibold text-white"
                } text-sm transall cursor-pointer text-left hover:opacity-60 `}
              >
                {navig.title.split(" ").map((wrd, index) => (
                  <div key={index}>{wrd}</div>
                ))}
              </Scroll>
            )}
          </span>
        ))}
      </nav>

      <nav
        className={`grid xlg:hidden transall h-auto gap-x-10 ${
          nav === "academy" ? "bg-secondary-0" : "bg-tech-1"
        } bg-secondary-0 p-10 `}
      >
        <div className="flex  justify-center items-center xs:gap-20 xxs:gap-10 gap-4  ">
          <NextLink href={"/academy"}>
            <Image
              className="cursor-pointer"
              src={nav === "academy" ? LogoAca : LogoWhiteTech}
              alt="Clever Council"
            />
          </NextLink>
          <ToggleBurger
            toggled={toggled}
            setToggle={() => {
              setToggle(!toggled);
            }}
          />
        </div>
        <div
          className={`grid gap-10 font-semibold overflow-hidden transall mb-6 ${
            toggled ? "h-[280px] mt-10" : "h-0 mt-0"
          } `}
        >
          {navLinks.map((navig) => (
            <span key={navig.id}>
              {!scroll || navig.link ? (
                <Link
                  prefetch
                  scroll
                  href={navig.link ? navig.link : `/${nav}/#` + navig.id}
                  className={`fadeInBlur text-light-0 transall cursor-pointer`}
                >
                  {navig.title}
                </Link>
              ) : (
                <Scroll
                  to={navig.id}
                  smooth
                  offset={-30}
                  className={`fadeInBlur text-light-0 transall cursor-pointer`}
                >
                  {navig.title}
                </Scroll>
              )}
            </span>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
