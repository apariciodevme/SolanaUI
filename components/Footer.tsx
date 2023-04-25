import Link from "next/link";
import Image from "next/image";

import {
  BsYoutube,
  BsDiscord,
  BsTwitter,
  BsReddit,
  BsGithub,
  BsTelegram,
} from "react-icons/bs";
import { GrReddit } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <div className="lg:hidden grid rounded-3xl pb-12  bg-gradient-to-br from-slate-950/40 from-60% to-violet-500/30 grid-cols-1 mx-auto border-neutral-900 border-solid border-[1.2px] w-full">
        <div className="flex flex-col items-center p-12 space-y-5">
          <Image src={"/logoSimple.png"} width={30} height={40} alt="logo" />
          <h1 className="text-md text-neutral-200">Managed by Solana Foundation</h1>

          <div className="flex space-x-2">
            <div className="flex items-center justify-center duration-100 rounded-full cursor-pointer w-7 h-7 bg-neutral-500 hover:bg-neutral-100">
              <BsYoutube className="text-base text-neutral-900" />
            </div>
            <div className="flex items-center justify-center duration-100 rounded-full cursor-pointer w-7 h-7 bg-neutral-500 hover:bg-neutral-100">
              <BsTwitter className="text-base text-neutral-900" />
            </div>

            <div className="flex items-center justify-center duration-100 rounded-full cursor-pointer w-7 h-7 bg-neutral-500 hover:bg-neutral-100">
              <BsDiscord className="text-base text-neutral-900" />
            </div>

            <div className="flex items-center justify-center duration-100 rounded-full cursor-pointer w-7 h-7 bg-neutral-500 hover:bg-neutral-100">
              <BsReddit className="text-base text-neutral-900" />
            </div>

            <div className="flex items-center justify-center duration-100 rounded-full cursor-pointer w-7 h-7 bg-neutral-500 hover:bg-neutral-100">
              <BsGithub className="text-base text-neutral-900" />
            </div>

            <div className="flex items-center justify-center duration-100 rounded-full cursor-pointer w-7 h-7 bg-neutral-500 hover:bg-neutral-100">
              <BsTelegram className="text-base text-neutral-900" />
            </div>
          </div>
        </div>

        <div className="grid justify-center grid-cols-2 p-4 mx-2 ">
          <div className="space-y-2">
            <h1 className="text-lg tracking-tight uppercase text-neutral-50 ">
              Solana
            </h1>
            <div className="flex flex-col space-y-4 text-base text-neutral-400">
              <Link className="duration-150 hover:text-neutral-50 " href={"/"}>Break Solana</Link>
              <Link className="duration-150 hover:text-neutral-50 " href={"/"}>Grants</Link>
              <Link className="duration-150 hover:text-neutral-50 " href={"/"}>Media kit</Link>
              <Link className="duration-150 hover:text-neutral-50 " href={"/"}>Careers</Link>
              <Link className="duration-150 hover:text-neutral-50 " href={"/"}>Disclaimer</Link>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-lg tracking-tight uppercase text-neutral-50">
              Get connected
            </h1>
            <div className="flex flex-col space-y-4 text-base text-neutral-400">
              <Link className="duration-150 hover:text-neutral-50 " href={"/"}>Ecosystem</Link>
              <Link className="duration-150 hover:text-neutral-50 " href={"/"}>Blog</Link>
              <Link className="duration-150 hover:text-neutral-50 " href={"/"}>Newsletter</Link>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center mt-12">
        <div className="h-[1.2px] bg-neutral-900 w-[90%]"></div>
            <h1 className="mx-4 mt-10 text-center text-md text-neutral-400">© 2023 Solana Foundation. All rights reserved.</h1>
        </div>
      </div>




      {/* Footer sm+ */}
      <div className="hidden grid-cols-2 lg:grid bg-gradient-to-t from-violet-500/20 to slate-900 border-neutral-900 border-solid border-[1.2px] rounded-xl" >
        <div className=" h-96">
          <div className="flex flex-col items-start gap-6 mt-16 ml-16">
            <Image src={"/logoSimple.png"} width={30} height={40} alt="logo" />
            <h1 className="text-xl text-neutral-100">
              Managed by Solana Foundation
            </h1>
            <div className="flex space-x-2">
              <div className="flex items-center justify-center duration-100 rounded-full cursor-pointer w-7 h-7 bg-neutral-500 hover:bg-neutral-100">
                <BsYoutube className="text-base text-neutral-900" />
              </div>
              <div className="flex items-center justify-center duration-100 rounded-full cursor-pointer w-7 h-7 bg-neutral-500 hover:bg-neutral-100">
                <BsTwitter className="text-base text-neutral-900" />
              </div>

              <div className="flex items-center justify-center duration-100 rounded-full cursor-pointer w-7 h-7 bg-neutral-500 hover:bg-neutral-100">
                <BsDiscord className="text-base text-neutral-900" />
              </div>

              <div className="flex items-center justify-center duration-100 rounded-full cursor-pointer w-7 h-7 bg-neutral-500 hover:bg-neutral-100">
                <BsReddit className="text-base text-neutral-900" />
              </div>

              <div className="flex items-center justify-center duration-100 rounded-full cursor-pointer w-7 h-7 bg-neutral-500 hover:bg-neutral-100">
                <BsGithub className="text-base text-neutral-900" />
              </div>

              <div className="flex items-center justify-center duration-100 rounded-full cursor-pointer w-7 h-7 bg-neutral-500 hover:bg-neutral-100">
                <BsTelegram className="text-base text-neutral-900" />
              </div>
            </div>
            <h1 className="text-base text-neutral-300">
              © 2023 Solana Foundation. All rights reserved.
            </h1>
          </div>
        </div>

{/*--------------------------------------*/}

        <div className="h-96 ">
        
        <div className="grid grid-cols-2 mt-16 ml-16 ">
        <div className="space-y-2">
            <h1 className="text-xl tracking-tight uppercase text-neutral-50 ">
              Solana
            </h1>
            <div className="flex flex-col space-y-4 text-lg text-neutral-400">
              <Link className="duration-150 hover:text-neutral-50 " href={"/"}>Break Solana</Link>
              <Link className="duration-150 hover:text-neutral-50 " href={"/"}>Grants</Link>
              <Link className="duration-150 hover:text-neutral-50 " href={"/"}>Media kit</Link>
              <Link className="duration-150 hover:text-neutral-50 " href={"/"}>Careers</Link>
              <Link className="duration-150 hover:text-neutral-50 " href={"/"}>Disclaimer</Link>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-xl tracking-tight uppercase text-neutral-50">
              Get connected
            </h1>
            <div className="flex flex-col space-y-4 text-lg text-neutral-400">
              <Link className="duration-150 hover:text-neutral-50 " href={"/"}>Ecosystem</Link>
              <Link className="duration-150 hover:text-neutral-50 " href={"/"}>Blog</Link>
              <Link className="duration-150 hover:text-neutral-50 " href={"/"}>Newsletter</Link>
            </div>
          </div>
        </div>
        </div>
    
      </div>
    </>
  );
};

export default Footer;
