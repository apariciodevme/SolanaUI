import Link from "next/link";
import Image from "next/image";

const AltGrid = () => {
  return (
    <section className="liveDataBg">
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <div className="">
          <div className="flex flex-col items-start mt-10 ml-6">
            <h1 className="mb-4 text-5xl font-medium tracking-tight">
              Made for mass adoption.
            </h1>
            <div className="flex items-start mb-12 space-x-2 ">
              <div className="w-1 h-1 rounded-full bg-cyan-400"></div>
              <h2 className="leading-tight uppercase text-md text-neutral-300">
                Live data
              </h2>
            </div>
          </div>
        </div>

        <div className="col-span-2 ">
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-0" >
           <div >
            {/*card*/}
            <div className=" sm:border-none border-[1.2px] border-solid border-zinc-900 p-4 py-6 rounded-3xl    ">
              <div className="flex flex-col items-start justify-center mx-4 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-[1.8px] h-9 bg-cyan-300"></div>
                    <h1 className="text-3xl font-semibold ">Fast</h1>
                  </div>
                  <h2 className="mr-6 text-lg text-neutral-300 sm:mr-16">
                    Don’t keep your users waiting. Solana has block times of 400
                    milliseconds — and as hardware gets faster, so will the
                    network.
                  </h2>
                </div>
                <div>
                  <div className="flex items-start space-x-2 ">
                    <div className="w-1 h-1 rounded-full bg-cyan-400"></div>
                    <h1 className="text-2xl font-medium text-neutral-50">
                      3,993
                    </h1>
                  </div>
                  <h2 className="mt-2 text-sm uppercase text-neutral-400">
                    transactions per second
                  </h2>
                </div>
              </div>
            </div>
            {/*Card*/}
            <div className=" sm:border-none border-[1.2px] border-solid border-zinc-900 p-4 py-6 rounded-3xl  ">
              <div className="flex flex-col items-start justify-center mx-4 space-y-8 ">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-[1.8px] h-9 bg-amber-300"></div>
                    <h1 className="text-3xl font-semibold ">Decentralized</h1>
                  </div>
                  <h2 className="text-lg text-neutral-300 sm:mr-42 sm:mr-16">
                    The Solana network is validated by thousands of nodes that
                    operate independently of each other, ensuring your data
                    remains secure and censorship resistant.
                  </h2>
                </div>
                <div>
                  <div className="flex items-start space-x-2 ">
                    <div className="w-1 h-1 rounded-full bg-cyan-400"></div>
                    <h1 className="text-2xl font-medium text-neutral-50">
                      1,680{" "}
                    </h1>
                  </div>
                  <h2 className="mt-2 text-sm uppercase text-neutral-400">
                    Validator nodes
                  </h2>
                </div>
              </div>
            </div>
            </div>
            <div>
            {/*Card*/}
            <div className=" sm:border-none  border-[1.2px] border-solid border-zinc-900 p-4 py-6 rounded-3xl  ">
              <div className="flex flex-col items-start justify-center mx-4 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-[1.8px] h-9 bg-violet-600"></div>
                    <h1 className="text-3xl font-semibold ">Scalable</h1>
                  </div>
                  <h2 className="text-lg text-neutral-300 sm:mr-16">
                    Get big, quick. Solana is made to handle thousands of
                    transactions per second, and fees for both developers and
                    users remain less than $0.01.
                  </h2>
                </div>
                <div>
                  <div className="flex items-start space-x-2 ">
                    <div className="w-1 h-1 rounded-full bg-cyan-400"></div>
                    <h1 className="text-2xl font-medium text-neutral-50">
                      168,622,565,605{" "}
                    </h1>
                  </div>
                  <h2 className="mt-2 text-sm uppercase text-neutral-400">
                    total transactions
                  </h2>
                </div>
              </div>
            </div>
            {/*Card*/}
            <div className="sm:border-none  border-[1.2px] border-solid border-zinc-900 p-4 py-6 rounded-3xl  ">
              <div className="flex flex-col items-start justify-center mx-4 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="sm:h-20  w-[1.8px] h-9 bg-green-400"></div>
                    <h1 className="text-3xl font-semibold sm:mr-20 white ">
                      Energy Efficient
                    </h1>
                  </div>
                  <h2 className="text-lg text-neutral-300 sm:mr-12">
                    Solana’s proof of stake network and other innovations
                    minimize its impact on the{" "}
                    <span className="text-emerald-400">environment.</span> Each
                    Solana transaction uses about the same energy as a few
                    Google searches.
                  </h2>
                </div>
                <div>
                  <div className="flex items-start space-x-2 ">
                    <div className="w-1 h-1 rounded-full bg-cyan-400"></div>
                    <h1 className="text-2xl font-medium text-neutral-50">
                      0%{" "}
                    </h1>
                  </div>
                  <h2 className="mt-2 text-sm uppercase text-neutral-400">
                    Net carbon impact
                  </h2>
                </div>
              </div>
            </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AltGrid;
