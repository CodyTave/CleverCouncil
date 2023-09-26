"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Title from "@/app/Components/Title";
import { gsap } from "gsap";
import { Clevers } from "./constants";
import { useRouter } from "next/navigation";
import Toggle from "./Components/Toggle";

export default function Home() {
  const [selectedClever, setClever] = useState(Clevers[0]);
  const [dragging, setDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);
  const [isAnimating, setAnimating] = useState(false);
  const router = useRouter();
  function isMobile(): boolean {
    return window.innerWidth < 750;
  }

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".cleverr", {
      duration: 0.1,
      ease: "power2.inOut",
      letterSpacing: isMobile() ? 5 : 10,
    });
    tl.to(".cleverr", {
      duration: 1,
      ease: "power2.inOut",
      letterSpacing: 5,
    });
  }, [selectedClever]);

  const handleDragStart = (clientX: number) => {
    if (!isAnimating) {
      setDragging(true);
      setDragStartX(clientX);
    }
  };

  const handleDragEnd = (clientX: number) => {
    if (dragging && !isAnimating) {
      const dragDistance = clientX - dragStartX;

      if (dragDistance < -20 && selectedClever.index < Clevers.length - 1) {
        setClever(Clevers[selectedClever.index + 1]);
      } else if (dragDistance > 20 && selectedClever.index > 0) {
        setClever(Clevers[selectedClever.index - 1]);
      }
      setDragging(false);
      setDragStartX(0);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleDragStart(e.touches[0].clientX);
  };
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    handleDragEnd(e.changedTouches[0].clientX);
  };

  const handleToggle = (arg: number) => {
    setClever(Clevers[arg]);
  };

  return (
    <main className={`w-screen h-screen ${selectedClever.bg} transall gate`}>
      <Toggle
        isTechServices={selectedClever === Clevers[0]}
        isAnimating={isAnimating}
        setClever={handleToggle}
      />
      <AnimatePresence>
        <motion.span
          key={selectedClever.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          onClick={() => window.open(selectedClever.links[0].url)}
        >
          <Image
            className="absolute g_sm:top-20 g_sm:left-28  top-10 left-10 w-32 g_sm:w-36 transall cursor-pointer"
            src={selectedClever.logo}
            alt={selectedClever.title}
          />
        </motion.span>
      </AnimatePresence>
      {/* <div className="absolute transall g_md:right-1/2 g_sm:top-20  g_sm:right-28 g_sm:-translate-x-1/2 top-8 right-10 flex gap-3 items-center ">
        {Clevers.map((clev) => (
          <div
            onClick={() => {
              if (!isAnimating) {
                setClever(clev);
              }
            }}
            key={clev.id}
            className={` transall w-[2px] rounded-xl cursor-pointer ${
              selectedClever.id === clev.id
                ? `h-10 ${clev.color}`
                : "h-7 bg-[#2F3165]"
            }`}
          ></div>
        ))}
      </div> */}
      <div className="flex g_xl:gap-14 h-full justify-center items-center  transall g_xs:mt-8 mt-12">
        {Clevers.map((clev) => (
          <Image
            key={clev.id}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={() => {
              if (!isAnimating && clev.id !== selectedClever.id) {
                setClever(clev);
              } else if (!isAnimating) {
                router.push(selectedClever.links[0].url);
              }
            }}
            className={`transall relative w-auto max-w-[60%]
            g_xs:h-auto h-1/2 object-cover 
            ${selectedClever.id === clev.id && "cursor-pointer"}
            ${selectedClever.position} ${
              selectedClever.id !== clev.id
                ? " grayscale blur-[3px] scale-75 hover:blur-0 hover:grayscale-0 "
                : "scale-100"
            }`}
            src={clev.image}
            alt={clev.title}
          />
        ))}
        <div
          className={`
          font-extrabold transall ${selectedClever.text}  absolute cleverr tracking-wide cleverWidth
          g_xl:text-8xl  g_mmd:text-8xl g_sm:text-5xl g_xxs:text-4xl g_tn:text-xl text-sm truncate
          g_xl:bottom-48 g_lg:bottom-28 g_md:bottom-[20%] g_mmd:bottom-[18%] g_sm:bottom-[34%] g_msm:bottom-[36%] g_xs:bottom-[36%] bottom-28
          g_xl:left-60 g_lg:left-48 g_md:left-36 g_mmd:left-24 g_sm:left-20 g_msm:left-20 
        g_xs:block hidden
        
            `}
        >
          CLEVER
        </div>

        <div
          className={`g_xl:text-8xl g_mmd:text-7xl g_sm:text-5xl g_xxs:text-4xl g_tn:text-3xl text-sm
           z-50 g_xl:h-64 g_lg:h-48 g_mmd:h-48 g_md: g_sm:h-24 h-18
          absolute tracking-wider transall font-extrabold overflow-hidden truncate
         g_xl:top-48 g_lg:top-28 g_md:top-[20%] g_mmd:top-[18%] g_sm:top-[34%] g_msm:top-[36%] g_xs:top-[36%] top-28
         g_lg:right-48 g_md:right-36 g_mmd:right-20 g_sm:right-28 g_msm:right-20 
          `}
        >
          <Title
            setAnimating={(arg: boolean) => setAnimating(arg)}
            prtitle={selectedClever.title}
          />
        </div>
      </div>
      <div className="absolute bottom-10 g_xxs:left-10 left-5 flex text-left gap-2">
        {selectedClever.links.map((link) => (
          <a
            target="__blank"
            href={link.url}
            key={link.id}
            className="flex justify-center items-center gap-1 transall"
          >
            <span
              className={`font-bold text-xs ${selectedClever.text} hover:underline cursor-pointer transall`}
            >
              {link.title}
            </span>
            <svg width="9" height="8" viewBox="0 0 12 11">
              <path
                className="transall"
                fill={selectedClever.svg}
                d="M9.142 0.603373L3.0821 0.232926L2.96008 2.2289L7.60841 2.51305L0.119065 9.13949L1.44435 10.6374L8.9337 4.01092L8.64954 8.65925L10.6455 8.78127L11.016 2.72136C11.0482 2.19201 10.869 1.67152 10.5175 1.27434C10.1661 0.877159 9.67134 0.635812 9.142 0.603373Z"
              />
            </svg>
          </a>
        ))}
      </div>
    </main>
  );
}
