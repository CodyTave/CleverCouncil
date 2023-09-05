import { AnimatePresence, motion } from "framer-motion";

export default function PlusButton({ plus }: { plus: boolean }) {
  return (
    <svg
      className={`p-2 w-8 h-8 bg-aca-0 rounded-full select-none transall ${
        !plus && "hover:rotate-180"
      } cursor-pointer shrink-0`}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <AnimatePresence mode="wait">
        {!plus && (
          <motion.rect
            key={`${plus}`}
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            x={"13.5"}
            width="3"
            height="30"
            rx="0.3"
            fill="white"
          />
        )}
      </AnimatePresence>
      <rect
        y="16.5"
        width="3"
        height="30"
        rx="0.3"
        transform="rotate(-90 0 16.5)"
        fill="white"
      />
    </svg>
  );
}
