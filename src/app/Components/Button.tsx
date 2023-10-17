"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
interface props {
  text: string;
  color: string;
  icon: StaticImageData;
  animate?: string;
  moreStyles?: string;
  onClick?: () => void;
}
function Button({
  text,
  icon,
  color,
  animate,
  moreStyles = "",
  onClick,
}: props) {
  const [isHovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${color} ${moreStyles} p-5 w-52 flex items-center justify-between gap-2 `}
    >
      <span className="font-bold">{text}</span>
      <Image
        className={`w-4 transall ${isHovered && animate}`}
        src={icon}
        alt=""
      />
    </button>
  );
}

export default Button;
