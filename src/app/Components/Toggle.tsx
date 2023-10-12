"use client";
import { useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
export default function Toggle({
  setClever,
  isAnimating,
  isTechServices,
}: {
  setClever: (arg: number) => void;
  isAnimating: boolean;
  isTechServices: boolean;
}) {
  const [scope, animate] = useAnimate();
  const [rotated, setRotated] = useState(false);
  function handleStateChange() {
    if (!isAnimating) {
      isTechServices ? setClever(1) : setClever(0);
    }
  }
  async function handleRotating(state: boolean) {
    setRotated(state);
    await new Promise((resolve) => setTimeout(resolve, 400));
  }
  useEffect(() => {
    const handleAnimation = async () => {
      if (isTechServices) {
        await animate(scope.current, { stroke: "#CF4187" });
        await animate(
          scope.current,
          {
            d: "M0 50 L0 50 M70 30 L90 50 L70 70",
          },
          { duration: 0.2 }
        );
        await handleRotating(false);
        await animate(scope.current, {
          d: "M11 50 L90 50 M70 30 L90 50 L70 70",
        });
      } else {
        animate(scope.current, { stroke: "#109CD7", rotate: 0 });
        await animate(
          scope.current,
          {
            d: "M0 50 L0 50 M70 30 L90 50 L70 70",
          },
          { duration: 0.2 }
        );
        await handleRotating(true);
        await animate(scope.current, {
          d: "M11 50 L90 50 M70 30 L90 50 L70 70",
        });
      }
    };
    handleAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTechServices]);
  return (
    <>
      <svg
        onClick={handleStateChange}
        className={`absolute g_sm:top-16 g_sm:right-28  top-6 right-10 rotateTransition cursor-pointer ${
          rotated ? "rotate-180" : "rotate-0"
        } `}
        xmlns="http://www.w3.org/2000/svg"
        width="65"
        height="65"
        viewBox="0 0 100 100"
      >
        <path
          ref={scope}
          fill="none"
          stroke="#CF4187"
          strokeWidth="5"
          d="M11 50 L90 50 M70 30 L90 50 L70 70"
        />
      </svg>
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
    </>
  );
}
