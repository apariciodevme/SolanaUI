import Image from "next/image";
import Link from "next/link";

const Carousel = () => {
  return (
    <div className="h-screen m-6">
      <h1 className="text-4xl font-semibold">Join a thriving community.</h1>
  
  
  
    <div className="flex mt-8 space-x-4">
        <div className="w-80 bg-zinc-800 h-96 rounded-2xl">

        </div>
        <div className="flex flex-col space-y-4">

        <div className="bg-zinc-800 w-60 h-44 rounded-2xl"></div>
        <div className="h-48 bg-zinc-800 w-60 rounded-2xl"></div>

        </div>
  
    </div>

   
    </div>
  );
};

export default Carousel;
