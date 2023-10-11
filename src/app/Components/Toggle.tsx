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
    <>
      {/* <svg
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
      </svg> */}
      <svg
        onClick={handleStateChange}
        className="absolute g_sm:top-20 g_sm:right-28  top-10 right-10 w-32 g_sm:w-36 transall cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="125"
        height="93"
        viewBox="0 0 125 93"
      >
        <motion.path
          d="M54.4142 16.4142C55.1953 15.6332 55.1953 14.3668 54.4142 13.5858L41.6863 0.857864C40.9052 0.0768158 39.6389 0.0768158 38.8579 0.857864C38.0768 1.63891 38.0768 2.90524 38.8579 3.68629L50.1716 15L38.8579 26.3137C38.0768 27.0948 38.0768 28.3611 38.8579 29.1421C39.6389 29.9232 40.9052 29.9232 41.6863 29.1421L54.4142 16.4142ZM0 17L53 17V13L0 13L0 17Z"
          fill="#CF4187"
          animate={{
            fill: isTechServices ? "#CF4187" : "#109CD7",
            rotate: isTechServices ? 0 : 180,
          }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
        />
      </svg>
    </>
  );
}
