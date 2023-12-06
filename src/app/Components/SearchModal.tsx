"use client";
import { useState, useRef, FormEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { searchIcon } from "@/assets";
import Image from "next/image";

export default function SearchModal() {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const path = usePathname();
  const handleExpanding = () => {
    if (expanded) {
      setExpanded(false);
    } else {
      setExpanded(true);
      inputRef.current?.focus();
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setQuery("");
    setExpanded(false);
    router.push(`/academy/search?query=${encodeURIComponent(query)}`);
  };

  if (path !== "/academy/search") {
    return (
      <div
        onMouseEnter={handleExpanding}
        onMouseLeave={handleExpanding}
        className={`fixed flex items-center justify-center smtransall bottom-10 right-10 h-12 z-50 `}
      >
        <button
          onClick={handleSubmit}
          className=" bg-aca-1 p-3  smtransall hover:bg-secondary-0 "
        >
          <Image className="w-6 h-6" alt="" src={searchIcon} />
        </button>
        <form
          onSubmit={handleSubmit}
          className={`bg-aca-1 h-full smtransall flex  ${
            expanded ? "sm:w-72 w-full" : "w-0"
          }`}
        >
          <input
            onSubmit={handleSubmit}
            ref={inputRef}
            placeholder="Recherche votre formation"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className=" h-full w-full mx-3 bg-aca-1 focus:outline-none text-light-0 font-medium placeholder:text-light-0/80 placeholder:text-sm"
          />
        </form>
      </div>
    );
  }
}
