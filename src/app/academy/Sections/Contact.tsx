"use client";
import { address, phone } from "@/assets";
import { contactInfo } from "../Constants/constants";
import Image from "next/image";

function Contact() {
  return (
    <div id="contact" className=" h-[460px] relative">
      <iframe
        className="w-full h-full  border-0"
        src={contactInfo.map}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="absolute grid gap-6 -top-16 md:left-32 md:mx-0  sm:mx-32 sm:w-fit w-full  mx-0 xs:p-10 p-5  sm:py-20 py-12 bg-secondary-0 text-left">
        <div className="block relative">
          <div className="absolute  h-32  w-[2px] hover:h-10 bottom-0 left-0 bg-aca-0 transall " />
          <h1 className="uppercase font-black md:text-3xl xs:text-2xl tn:text-xl text-sm text-secondary-3 pl-8  ">
            CONTACTEZ-NOUS
          </h1>
        </div>
        <a
          href={`mailto:${contactInfo.email}`}
          className="text-white tn:text-base text-xs bg-[#3a3c8e] w-fit hover:opacity-70 transall p-2 tn:px-5 rounded-full "
        >
          {contactInfo.email}
        </a>
        <div className="flex items-center gap-5">
          <Image className="w-12" src={phone} alt="" />
          <div className="text-white tn:text-base text-xs">
            {contactInfo.phone.map((num, index) => (
              <a className="block" href={`tel:${num}`} key={index}>
                {num}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Image className="w-12" src={address} alt="" />
          <a
            target="_blank"
            href={contactInfo.location}
            className="text-white max-w-[18rem] tn:text-base text-xs"
          >
            {contactInfo.address}
          </a>
        </div>
        <div className="flex gap-3 mt-5">
          {contactInfo.socialMedia.map((link) => (
            <a target="_blank" href={link.link} key={link.id}>
              <Image
                className="w-10 transall opacity-70 hover:opacity-100"
                src={link.icon}
                alt={link.id}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
