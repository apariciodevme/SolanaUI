import Image from "next/image";
import Link from "next/link";


import CompaniesBoard from "./CompaniesBoard";



const Hero = () => {
  return (
    <>
      <div className="p-6 m-auto sm:h-screen h-fit text-neutral-100 heroBg xl:h-screen">
       <div className="flex flex-col items-center mt-40 xl:gap-6">
        <h1 className="px-4 mx-auto text-5xl font-medium tracking-normal text-center sm:text-7xl xl:mx-40">
          Powerful for developers. Fast for everyone.
        </h1>

        <h3 className="mt-10 text-xl leading-7 text-center sm:text-2xl sm:mx-40 xl:text-3xl xl:mx-64">
          Bring blockchain to the people. Solana supports experiences for power
          users, new consumers, and everyone in between.
        </h3>

        <div className="flex items-center mt-10 space-x-4 ">
          <button className="px-4 py-3 uppercase transition duration-300 rounded-full sm:px-8 text-md bg-gradient-to-r from-fuchsia-400 from-10% via-violet-700 to-violet-950/80 hover:scale-110 hover:-translate-y-1 sm:py-4 sm:text-xl">
            Start Building
          </button>
          <button className="sm:px-8 px-6 py-3 text-md border-white border-solid uppercase border-[1.2px] rounded-full hover:bg-white hover:text-black duration-300 hover:scale-110 hover:-translate-y-1  sm:py-4 sm:text-xl">
            Read docs
          </button>
        </div>
        </div>
      </div>
      <CompaniesBoard/>

    </>
  );
};

export default Hero;
