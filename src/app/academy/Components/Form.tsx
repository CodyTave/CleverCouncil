"use client";
import { check, enterprise, particulier } from "@/assets";
import Image from "next/image";
import { useState } from "react";

function Form() {
  const userTypes = [
    { id: "ind", title: "Particulier", icon: particulier },
    { id: "ent", title: "Entreprise", icon: enterprise },
  ];
  const [userType, setType] = useState("ind");
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2">
        <div className="flex items-end relative">
          <h1 className="font-extralight text-2xl pb-5">Vous êtes :</h1>
          <div className="h-[2px] w-10 bg-aca-0 absolute" />
        </div>
        <div className="flex justify-end gap-10">
          {userTypes.map((user) => (
            <div
              onClick={() => setType(user.id)}
              key={user.id}
              className={`flex relative gap-3 flex-col justify-center items-center border px-5 py-6 cursor-pointer hover:opacity-100 transall ${
                userType === user.id ? "border-[#3ee671]" : "opacity-60"
              }`}
            >
              <Image className="w-5" src={user.icon} alt="particulier" />
              <h1 className="font-medium">{user.title}</h1>
              {userType === user.id && (
                <Image
                  className="w-5 absolute top-2 right-2"
                  src={check}
                  alt=""
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-3">
          <input className="bg-secondary-4 p-3 py-5 outline-none w-full font-bold" />
          <input className="bg-secondary-4 p-3 py-5 outline-none w-full font-bold" />
        </div>
      </div>
    </div>
  );
}

export default Form;
