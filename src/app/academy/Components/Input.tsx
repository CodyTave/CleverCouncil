import { useState } from "react";

interface props {
  ph: string;
  type?: string;
}

function Input({ ph, type }: props) {
  const [InputValue, setValue] = useState("");
  return (
    <div
      className={` ${
        InputValue === "" ? "bg-secondary-4 border" : "bg-[#434594]"
      } px-4 py-2 h-20 overflow-hidden border-[#595baf] transall `}
    >
      <label
        className={`text-[#7071b3] font-semibold transall ${
          InputValue === "" ? "-translate-y-10 " : "translate-y-0"
        } flex transall`}
      >
        {ph}
      </label>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type={type}
        value={InputValue}
        placeholder={ph}
        className={`py-2 z-50 outline-none w-full font-bold bg-transparent placeholder:text-[#7071b3] placeholder:font-semibold ${
          InputValue === "" ? "translate-y-[-14px]" : "translate-y-0"
        }  transall`}
      />
    </div>
  );
}

export default Input;
