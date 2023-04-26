import Link from "next/link";
import Image from "next/image";
import Banner from "./Banner";

import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import {IoIosArrowDown} from 'react-icons/io'

import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);

     
  };
  return (
    <div>
      <div className="fixed flex items-center justify-between w-full p-6 bg-black/80">
        <div className="cursor-pointer">
          <Image
            width={150}
            height={150}
            src="/solanaLogo.png"
            alt="solana logo"
          />
        </div>
        <nav>
          <button onClick={handleNav} className="cursor-pointer lg:hidden ">
            {nav ? <AiOutlineClose size={25} /> : <GiHamburgerMenu size={25} />}
          </button>
        </nav>

        {/*Desktop nav*/}
        <div className="hidden lg:block">
        <nav className="flex flex-row gap-8 text-xl font-normal text-neutral-500">
            <div className="flex items-center justify-between gap-2 text-neutral-500 hover:text-neutral-100 ">
              <Link href="#" className="transition duration-150 ">
                Learn{" "}
              </Link>
              <IoIosArrowDown className="text-xl transition duration-150 cursor-pointer "/>
            </div>
            <div className="flex items-center justify-between gap-2 text-neutral-500 hover:text-neutral-100">
              <Link href="#" className="transition duration-150 ">
                Build{" "}
              </Link>
              <IoIosArrowDown className="text-xl transition duration-150 cursor-pointer "/>
            </div>
            <div className="flex items-center justify-between gap-2 text-neutral-500 hover:text-neutral-100">
              <Link href="#" className="transition duration-150 ">
                Network{" "}
              </Link>
              <IoIosArrowDown className="text-xl transition duration-150 cursor-pointer "/>
            </div>
            <div className="flex items-center justify-between gap-2 text-neutral-500 hover:text-neutral-100">
              <Link href="#" className="transition duration-150 ">
                Community{" "}
              </Link>
              <IoIosArrowDown className="text-xl transition duration-150 cursor-pointer "/>
            </div>
          </nav>
        </div>
      </div>
      <div className="hidden">
        <div id="sideNav" />
      </div>

      {/*mobile navigation*/}

      <div
        id="sideNav"
        aria-label="Sidebar"
        className={
          nav
            ? "  absolute  z-10 w-64  lg:hidden"
            : " absolute  z-10 w-64  hidden"
        }
      >
        <div className="fixed w-full h-screen px-3 py-8 mt-20 rounded bg-black/95 ">
          <nav className="flex flex-col gap-6 space-y-4 text-xl font-normal divide-neutral-700 ">
            <div className="flex justify-between mx-4 cursor-pointer text-neutral-400 hover:text-neutral-50">
              {" "}
              <Link href="#" className="transition duration-200 ">
                Learn{" "}
              </Link>
              <IoIosArrowDown className="text-2xl transition duration-200 cursor-pointer "/>
            </div>
           
            <div className="flex justify-between mx-4 cursor-pointer text-neutral-400 hover:text-neutral-50">
              {" "}
              <Link href="#" className="transition duration-200 ">
                Build{" "}
              </Link>
              <IoIosArrowDown className="text-2xl transition duration-200 cursor-pointer "/>
            </div>
           
            <div className="flex justify-between mx-4 cursor-pointer text-neutral-400 hover:text-neutral-50">
              {" "}
              <Link href="#" className="transition duration-200 ">
                Network{" "}
              </Link>
              <IoIosArrowDown className="text-2xl transition duration-200 cursor-pointer "/>
            </div>
           
            <div className="flex justify-between mx-4 cursor-pointer text-neutral-400 hover:text-neutral-50">
              {" "}
              <Link href="#" className="transition duration-200 ">
                Community{" "}
              </Link>
              <IoIosArrowDown className="text-2xl transition duration-200 cursor-pointer "/>
            </div>
           

         
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
