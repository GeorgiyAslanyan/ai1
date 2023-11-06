import Example from "@/components/Example";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Join from "@/components/Join";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center bg-[#0F0F0F] text-white overflow-hidden">
      <img src="/greenbg.svg" alt="bg" className="w-full z-0 absolute top-0 object-cover"/>
      <Navbar />
      <Hero />
      <p className="text-center max-w-[1390px] text-2xl pt-4 pb-10">
        Welcome to the world of Ai1, a project that is poised to redefine the
        landscape of automated trading. At its core, ai1 is an all-encompassing,
        multi-lingual trading bot, crafted with a blend of cutting-edge
        technologies and trading strategies.
      </p>
      <div className="relative w-full flex items-center justify-center">
      <img src="/codebg.svg" alt="bg" className="w-full absolute z-0 top-0 left-0 object-cover"/>
      <Example />
      </div>
      <Info />
      <Join />
    </main>
  );
}
