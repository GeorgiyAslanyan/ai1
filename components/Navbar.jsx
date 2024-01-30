"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [burger, setBurger] = useState(false);
  const [isDe, setIsDe] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition-all shadow-md bg-gradient-to-br from-[#31353D] to-[#292929] top-0 ease-linear duration-200 fixed px-3 sm:px-10 z-40 ${
        scrollY > 50
          ? "  w-[95%] mt-2 md:mt-5 py-3 sm:py-5 rounded-[24px] lg:rounded-[32px]"
          : "lg:w-full py-3 mt-2 md:mt-5 lg:mt-0  bg-opacity-80 rounded-[24px] lg:rounded-none backdrop-blur-md w-[95%]"
      }`}>
      <div className="w-full justify-between flex items-center">
        <div>
          <Image alt="logo" width={141} height={54} src={"/logo.PNG"} className="h-9 w-auto sm:h-12"/>
        </div>
        <div className="flex gap-3">
          <a
            href="https://docs.ai1.wtf" target="_blank" rel="noopener noreferrer"
            className="bg-[#4D4D4D] hover:bg-white hover:text-black text-white h-9 w-9 sm:h-12 sm:w-12 rounded-full justify-center items-center flex">
            <DocumentTextIcon width={24} height={24} />
          </a>
          <a
           target="_blank" rel="noopener noreferrer"
            href="https://app.uniswap.org/#/swap?outputCurrency=0x857154af6c7FF2F0DE049EebEAa0122D2F9bA8A5&use=V2"
            className="bg-[#4D4D4D] h-9 sm:h-12 group pl-4 sm:pl-6 pr-4 w-fit rounded-full gap-5 text-white hover:text-black items-center hover:bg-white transition-all ease-linear duration-200 flex justify-between ">
            BUY NOW
            <div className="h-8 w-8 hidden sm:flex items-center justify-center relative group-hover:bg-[#1F1E1F] group-hover:text-white text-black rounded-full p-2 transition-all ease-linear duration-200  bg-white">
              <ArrowRightIcon
                width={24}
                height={24}
                className="absolute group-hover:translate-x-0 opacity-0 group-hover:opacity-100 translate-x-3 transition-all ease-linear duration-200"
              />
              <ChevronRightIcon
                width={24}
                height={24}
                className="absolute group-hover:translate-x-3 opacity-100 group-hover:opacity-0 translate-x-0 transition-all ease-linear duration-200 "
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
