"use client";
import { motion } from "framer-motion";
export default function Toggle({
  setClever,
  isAnimating,
  isTechServices,
}: {
  setClever: (arg: number) => void;
  isAnimating: boolean;
  isTechServices: boolean;
}) {
  function handleStateChange() {
    if (!isAnimating) {
      isTechServices ? setClever(1) : setClever(0);
    }
  }
  return (
    <svg
      onClick={handleStateChange}
      className="absolute g_sm:top-20 g_sm:right-28  top-10 right-10 w-32 g_sm:w-36 transall cursor-pointer"
      width="90"
      height="33"
      viewBox="0 0 90 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.rect
        animate={{ fill: isTechServices ? "#CF4187" : "#109CD7" }}
        width="70"
        height="30"
        rx="16.5"
      />
      <motion.circle
        animate={{ cx: isTechServices ? 19.5 : 50.5 }}
        cy="15"
        r="9.5"
        fill="#F9F9FC"
      />
    </svg>
  );
}
