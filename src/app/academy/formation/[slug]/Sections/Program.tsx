"use client";
import PlusButton from "@/app/academy/Components/PlusButton";
import { programDecoder } from "@/app/academy/Constants/functions";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Program({ program }: { program: string }) {
  const [Prog] = useState(programDecoder(program));
  const [OpenItem, setOpen] = useState<number | null>(null);
  function handleOpenState(id: number) {
    if (id === OpenItem) {
      setOpen(null);
      return;
    }
    setOpen(id);
  }
  return (
    <div className="mt-20 bg-aca-3 pt-20 pb-28 sm:px-32 min-[455px]:px-20 px-5 transall">
      <h1 className="text-4xl font-black text-secondary-0 text-left uppercase mb-10">
        Le Programme
      </h1>
      <div className="grid xlg:grid-cols-2 gap-10 text-left transall">
        {Prog.map((item) => (
          <div className={`grid gap-10  h-fit`}>
            <div className="grid gap-5 border-b-2 border-aca-0" key={item.id}>
              <div
                onClick={() => handleOpenState(item.id)}
                className="flex gap-5 items-center justify-between py-5"
              >
                <span
                  className={`${
                    OpenItem === item.id ? "text-aca-0" : "text-secondary-0"
                  } font-semibold select-none md:text-lg xs:text-base text-xs`}
                >
                  {item.title}
                </span>
                <PlusButton plus={item.id === OpenItem} />
              </div>
              {OpenItem === item.id && (
                <ul className="grid gap-5 sm:ml-10 ml-3 text-sm pb-10 transall">
                  <AnimatePresence>
                    {item.elements?.map((listItem) => (
                      <motion.li
                        key={OpenItem}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="flex items-center gap-4"
                      >
                        <div className="w-2 h-2 bg-aca-0 rounded-full shrink-0" />
                        <span>{listItem}</span>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
