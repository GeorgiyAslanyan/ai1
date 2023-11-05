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
      className={`transition-all top-0 ease-linear duration-200 fixed px-3 sm:px-10 z-40 ${
        scrollY > 50
          ? " bg-[#3b3b3b] w-[95%] mt-5 py-3 sm:py-5 rounded-[24px] lg:rounded-[32px]"
          : "lg:w-full py-3 mt-5 lg:mt-0 bg-[#3b3b3b] bg-opacity-80 rounded-[24px] lg:rounded-none backdrop-blur-md w-[95%]"
      }`}>
      <div className="w-full justify-between flex items-center">
        <div>
          <Image alt="logo" width={141} height={54} src={"/logo.PNG"} />
        </div>
        <div className="flex gap-3">
          <Link
            href={"#"}
            className="bg-[#4D4D4D] hover:bg-white hover:text-black text-white h-12 w-12 rounded-full justify-center items-center flex">
            <DocumentTextIcon width={24} height={24} />
          </Link>
          <Link
            href={"#"}
            className="bg-[#4D4D4D] h-12 group pl-6 pr-4 w-fit rounded-full gap-5 text-white hover:text-black items-center hover:bg-white transition-all ease-linear duration-200 flex justify-between ">
            Uniswap
            <div className="h-8 w-8 flex items-center justify-center relative group-hover:bg-[#1F1E1F] group-hover:text-white text-black rounded-full p-2 transition-all ease-linear duration-200  bg-white">
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
