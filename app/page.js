import Example from "@/components/Example";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center bg-[#3b3b3b] text-white">
      <Navbar />
      <Hero />
      <p className="text-center max-w-[1390px] text-2xl pt-4 pb-10">
        Welcome to the world of Ai1, a project that is poised to redefine the
        landscape of automated trading. At its core, ai1 is an all-encompassing,
        multi-lingual trading bot, crafted with a blend of cutting-edge
        technologies and trading strategies.
      </p>
      <Example />
    </main>
  );
}
