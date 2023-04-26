import Image from "next/image";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";

//components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Selector from "@/components/Selector";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Cta from "@/components/Cta";
import CompaniesBoard from "@/components/CompaniesBoard";
import AltGrid from "@/components/AltGrid";



const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: ['100','300', '400','500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})



export default function Home() {
  return (
    <>
      {" "}
      <main className="flex flex-col min-h-screen overflow-hidden bg-black ">
        <Hero />
        <Stats />
        <AltGrid/>
        <Selector />
        <Cta/>
      </main>
    </>
  );
}
