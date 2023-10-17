import { useState, useEffect, ChangeEvent } from "react";

interface props {
  name?: string;
  ph: string;
  type?: string;
  theme?: "light" | "dark";
  validation?: string;
  isSubmitted?: boolean;
  onChange: (
    value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

function Input({
  ph,
  name,
  type,
  theme = "dark",
  onChange,
  validation,
  isSubmitted,
}: props) {
  const [InputValue, setValue] = useState("");
  const dark = {
    id: "dark",
    bg: "bg-secondary-4 border",
    focusBg: "bg-[#434594]",
    border: "border-[#595baf]",
    ph: "placeholder:text-[#7071b3]",
  };
  const light = {
    id: "light",
    bg: "bg-gray-100 border",
    focusBg: "border",
    border: "",
    ph: "text-secondary-0",
  };
  const [themeSetting, setTheme] = useState<{
    id: string;
    bg: string;
    focusBg: string;
    border: string;
    ph: string;
  }>();
  useEffect(() => {
    if (theme === "light") {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  }, []);
  function handlChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setValue(event.target.value);
    onChange(event);
  }
  useEffect(() => {
    if (isSubmitted) {
      setValue("");
    }
  }, [isSubmitted]);
  return (
    <div>
      <div
        className={`text-white ${
          validation === "" ? themeSetting?.border : "border-red-300"
        } ${
          InputValue === "" ? themeSetting?.bg : themeSetting?.focusBg
        } px-4 py-2 ${
          type !== "textarea" && "h-20"
        } overflow-hidden transall  `}
      >
        <label
          className={`text-[#7071b3] font-semibold transall ${
            InputValue === "" ? "-translate-y-10 " : "translate-y-0"
          } flex transall`}
        >
          {ph}
        </label>
        {type === "textarea" ? (
          <textarea
            name={name}
            onChange={handlChange}
            value={InputValue}
            placeholder={ph}
            className={`py-2 z-50 outline-none w-full font-bold bg-transparent ${
              themeSetting?.ph
            }
          ${type === "textarea" && "h-52 min-h-[60px] max-h-[300px]"}
          placeholder:font-semibold ${
            InputValue === "" ? "translate-y-[-14px]" : "translate-y-0"
          }  transall`}
          />
        ) : (
          <input
            name={name}
            onChange={handlChange}
            type={type}
            value={InputValue}
            placeholder={ph}
            className={`py-2 z-50 outline-none w-full font-bold bg-transparent ${
              themeSetting?.id
            }
        ${themeSetting?.ph} placeholder:font-semibold ${
              InputValue === "" ? "translate-y-[-14px]" : "translate-y-0"
            }  transall`}
          />
        )}
      </div>
      {validation !== "" && (
        <span className="text-xs text-red-600 fadeInBlur">{validation}</span>
      )}
    </div>
  );
}

export default Input;
