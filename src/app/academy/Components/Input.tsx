import { useState, useEffect } from "react";

interface props {
  ph: string;
  type?: string;
  theme?: "light" | "dark";
}

function Input({ ph, type, theme = "dark" }: props) {
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

  return (
    <div
      className={`text-white ${themeSetting?.border} ${
        InputValue === "" ? themeSetting?.bg : themeSetting?.focusBg
      } px-4 py-2 ${type !== "textarea" && "h-20"} overflow-hidden transall  `}
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
          onChange={(e) => {
            setValue(e.target.value);
          }}
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
          onChange={(e) => {
            setValue(e.target.value);
          }}
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
  );
}

export default Input;
