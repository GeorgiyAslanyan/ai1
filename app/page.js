import About from "@/components/About";
import Example from "@/components/Example";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Join from "@/components/Join";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center bg-[#0F0F0F] text-white overflow-hidden">
      <img
        src="/greenbg.svg"
        alt="bg"
        className="w-full z-10 absolute top-0 object-cover pointer-events-none"
      />
      <Navbar />
      <Hero />
      <p className="sm:text-center max-w-[1390px] text-[14px] text-center sm:text-2xl pt-10 lg:pt-4 pb-10 w-[96%] lg:w-full">
        Enter the realm of AI1, where the future of automated algorithmic
        trading is being reshaped by artificial intelligence. At its heart lies
        AI1, a comprehensive trading system, forged from a fusion of advanced
        technologies and innovative market methodologies.{" "}
      </p>
      <div className="relative w-full flex items-center justify-center">
        <img
          src="/codebg.svg"
          alt="bg"
          className="w-full hidden lg:flex absolute z-0 top-0 left-0 object-cover pointer-events-none"
        />
        <img
          src="/codeMobilebg.svg"
          alt="bg"
          className="w-full blur-sm h-full flex lg:hidden absolute z-0 top-0 left-0 object-cover pointer-events-none"
        />
        <Example />
      </div>
      <Info />
      <div className="relative w-full flex flex-col items-center justify-center">
        
        <About />
        
        <img
          src="/aboutbg.svg"
          alt="bg"
          className="w-full blur-sm hidden sm:flex absolute z-0 top-0 left-0 object-cover pointer-events-none"
        />
        <img
          src="/codeMobilebg.svg"
          alt="bg"
          className="w-full blur-md h-[110%] flex sm:hidden absolute z-0 top-0 left-0 object-cover pointer-events-none"
        />
      </div>
      <Join />
    </main>
  );
}
