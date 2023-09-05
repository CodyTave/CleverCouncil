import { check } from "@/assets";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ListItem({ text, bt }: { text: string; bt: boolean }) {
  const [Hovered, setHovered] = useState(false);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={text}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 20, opacity: 0 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`flex gap-10 border-b ${
          bt && "border-t"
        } py-4 text-secondary-0`}
      >
        <Image
          className={`w-6 ${Hovered && "rotate-45"} transall`}
          src={check}
          alt="+"
        />
        <p
          className={`sm:text-base text-sm font-medium transall text-left ${
            Hovered && "ml-2"
          }`}
        >
          {text}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
