import Image from "next/image";
import Link from "next/link";
import React from "react";
import {ArrowRightIcon, ChevronRightIcon} from '@heroicons/react/24/outline'

const Hero = () => {
  return (
    <div className="min-h-screen grid grid-cols-2 items-center gap-10 justify-between px-20 relative">
      {/* <img src="/herobg.svg" alt="bg" className="w-full z-0 absolute bottom-0 right-0 object-cover"/> */}

      <div className="flex flex-col gap-8">
        <Image alt="logo" width={425} height={194} src={"/logoHero.png"} />
        <p className="text-[36px] font-bold text-transparent font-outline-1 text-[#4D4D4D]">
          Revolutionizing Trading with Ai Innovation and Rewards
        </p>
        <a
          href="/whitepaper.pdf" target="_blank" rel="noopener noreferrer"
          className="bg-[#B8B80B] hover:shadow-[0px_0px_35px_5px_#FFFFFF] shadow-[0px_0px_30px_2px_#B8B80B] group py-2 pl-6 pr-4 w-fit rounded-full text-[24px] gap-5 text-[#1F1E1F] items-center hover:scale-105 hover:bg-white transition-all ease-linear duration-200 flex justify-between ">
          WHITEPAPER
          <div className="h-10 w-10 flex items-center justify-center relative group-hover:bg-[#1F1E1F] group-hover:text-white text-[#1F1E1F] rounded-full p-3  transition-all ease-linear duration-200  bg-white">
          <ArrowRightIcon width={28} height={28} className="absolute group-hover:translate-x-0 opacity-0 group-hover:opacity-100 translate-x-3 transition-all ease-linear duration-200"/>
          <ChevronRightIcon width={28} height={28} className="absolute group-hover:translate-x-3 opacity-100 group-hover:opacity-0 translate-x-0 transition-all ease-linear duration-200 "/>
          </div>
        </a>
      </div>
      <video src="/bot.webm" autoPlay muted loop></video>
    </div>
  );
};

export default Hero;
