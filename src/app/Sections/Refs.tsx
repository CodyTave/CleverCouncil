"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { refs } from "../academy/refs";
import { useEffect, useRef, useState } from "react";
import { refsDevider } from "../academy/Constants/functions";
import Image from "next/image";
function Refs({ clever }: { clever: "academy" | "technology" }) {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [refsArray] = useState(refsDevider(refs));
  const [displayedRefs, setRef] = useState(0);
  const [Hovered, setHover] = useState(false);
  const refsTimeout = useRef<NodeJS.Timeout>();

  function handleRefs() {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refsTimeout.current = setTimeout(() => {
      setRef(displayedRefs + 1);
      if (displayedRefs + 1 === refsArray.length) {
        setRef(0);
      }
    }, 4000);
  }

  useEffect(() => {
    if (!Hovered) {
      handleRefs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayedRefs]);

  return (
    <div
      id="refs"
      ref={ref}
      className="lg:flex grid gap-10 lg:mx-28 mx-5 mt-12 fadeInBlur"
    >
      <div className="flex justify-center gap-10">
        <AnimatePresence mode="wait">
          {inView && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 60 }}
              exit={{ height: -60 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={` w-[1.5px]  transall ${
                clever === "technology" ? "bg-tech-0" : "bg-aca-0"
              }`}
            />
          )}
        </AnimatePresence>
        <div className="items-center lg:block flex text-left font-black text-ph-0 text-lg ">
          ILS NOUS ONT
          <br className="lg:block hidden" /> FAIT CONFIANCE
        </div>
      </div>
      <div className="w-4/5 overflow-hidden lg:block hidden">
        <AnimatePresence mode="wait">
          <motion.div
            className="flex justify-around items-center h-16"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            key={displayedRefs}
          >
            {refsArray[displayedRefs].map((ref) => (
              <Image
                placeholder="blur"
                onClick={() => window.open(ref.url, "_blank")}
                onMouseEnter={() => {
                  setHover(true);
                  clearTimeout(refsTimeout.current);
                }}
                onMouseLeave={() => {
                  setHover(false);
                  handleRefs();
                }}
                className=" w-28 grayscale hover:grayscale-0 opacity-80 transall "
                key={ref.id}
                src={ref.img}
                alt={ref.url}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={displayedRefs}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="grid lg:hidden grid-cols-2 mt-10  justify-items-center gap-5 gap-y-10"
        >
          {refsArray[displayedRefs].map((ref) => (
            <Image
              onMouseEnter={() => {
                setHover(true);
                clearTimeout(refsTimeout.current);
              }}
              onMouseLeave={() => {
                setHover(false);
                handleRefs();
              }}
              className="flex justify-center items-center sm:w-28 w-16 grayscale hover:grayscale-0 opacity-80 transall "
              key={ref.id}
              src={ref.img}
              alt={ref.id}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Refs;
