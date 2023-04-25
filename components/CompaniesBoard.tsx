import Image from "next/image";
import Link from "next/link";

const companyImg = [
  {
    id: 1,
    imageSrc: "/brave.svg",
  },
  {
    id: 2,
    imageSrc: "/circle.svg",
  },
  {
    id: 3,
    imageSrc: "/discord.svg",
  },
  {
    id: 4,
    imageSrc: "/google.svg",
  },
  {
    id: 5,
    imageSrc: "/jump.svg",
  },
  {
    id: 6,
    imageSrc: "/lollapalooza.svg",
  },
  {
    id: 7,
    imageSrc: "/magiceden.svg",
  },
  {
    id: 8,
    imageSrc: "/meta.svg",
  },
  {
    id: 9,
    imageSrc: "/stepn.svg",
  },
  {
    id: 10,
    imageSrc: "/stripe.svg",
  },
];

const CompaniesBoard = () => {
  return (
    <div className="flex flex-col items-center p-6 m-auto text-neutral-100">
      <h2 className="mx-4 mt-24 leading-none text-center text-md text-blue-400/90 sm:text-xl ">
        POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD
      </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12 xl:gap-6 xl:flex-nowrap mx-18 sm:mx-44 ">
        {companyImg.map((data) => (

          <img key={data.id} src={data.imageSrc} className="w-16 md:w-24 "  alt="" />
      ))}
        </div>

      {/*
        <Image src={'/brave.svg'} width={70} height={70} alt=""/>
        <Image src={'/circle.svg'} width={70} height={70} alt=""/>
        <Image src={'/discord.svg'} width={70} height={70} alt=""/>
        <Image src={'/google.svg'} width={70} height={70} alt=""/>
        <Image src={'/jump.svg'} width={70} height={70} alt=""/>
        <Image src={'/lollapalooza.svg'} width={70} height={70} alt=""/>
        <Image src={'/magiceden.svg'} width={70} height={70} alt=""/>
        <Image src={'/meta.svg'} width={70} height={70} alt=""/>
        <Image src={'/stepn.svg'} width={70} height={70} alt=""/>
        <Image src={'/stripe.svg'} width={60} height={70} alt=""/>
    */}
    </div>
  );
};

export default CompaniesBoard;
