import Link from "next/link";
import Image from "next/image";

const buttonData = [
  {
    id: 1,
    label: "NFTs",
  },
  {
    id: 2,
    label: "DeFi",
  },
  {
    id: 3,
    label: "Payments",
  },
  {
    id: 4,
    label: "Gaming",
  },
  {
    id: 5,
    label: "DAOs",
  },
];

const Selector = () => {
  return (
    <div className="flex flex-col p-4 m-auto mt-32 text-neutral-100 ">
      <div className="items-center sm:flex sm:flex-row sm:justify-between sm:px-8">
      <h1 className="mb-2 text-4xl font-medium sm:text-5xl ">Build for growth.</h1>
      <div>
        <div className="flex flex-wrap gap-4 sm:gap-2 ">
          {buttonData.map((data) => (
            <button key={data.id} className="sm:text-lg p-4  lg:text-2xl text-sm duration-100 border-purple-500 rounded-2xl bg-neutral-900/80 hover:bg-neutral-800 active::border-solid active:border-[1.2px] ">
              {data.label}
            </button>
          ))}
        </div>
        </div>
      </div>
      {/* container */}
      <div className="mt-8 rounded-3xl bg-neutral-950 sm:flex sm:flex-row-reverse sm:mx-8">
        <div className="p-10 space-y-6 ">
          <Image
            src={"/anybodiesLogo.svg"}
            width={200}
            height={100}
            alt="logo"
          />
          <p className="text-lg leading-6 ">
            It’s time to bridge the digital and physical. Anybodies helps
            established brands like Toys'R’Us connect real-life places and
            products with NFTs.
          </p>
          <div>
            <Link className="text-lg text-purple-500 underline" href={"/"}>
              Learn more
            </Link>
          </div>
        </div>
        <div className="w-full h-96 imgBg rounded-b-3xl sm:rounded-3xl"></div>
      </div>
    </div>
    
  );
};

export default Selector;
