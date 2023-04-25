const Stats = () => {
  return (
    <>
      <section className="flex flex-col items-start h-screen p-4 m-auto mt-28 sm:flex-row text-neutral-100 xl:px-24">
        <div className="sm:pr-12 sm:pl-8 sm:pt-16">
          <h1 className="mb-16 text-4xl font-medium tracking-tight md:mr-12 xl:mr-36 xl:text-5xl ">
            Join a community of millions.
          </h1>
        </div>
        <div className="space-y-10 ">
          <div className="space-y-1 sm:pr-28">
            <h1 className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-pink-400 via-30% via-purple-800 to-indigo-400 font-light tracking-tighter sm:text-9xl ">
              11.5M+
            </h1>
            <h2 className="uppercase text-neutral-400 sm:text-xl">
              Active accounts
            </h2>
          </div>
          <div className="space-y-4">
            <h1 className="text-transparent text-6xl bg-clip-text  bg-gradient-to-r  from-cyan-400 from-10% via-50%  via-blue-600/70 to-indigo-400 font-light tracking-tighter sm:text-9xl">
              21.9M
            </h1>
            <h2 className="uppercase text-neutral-400 sm:text-xl">
              NFTS Minted
            </h2>
          </div>
          <div className="space-y-4">
            <h1 className="text-6xl font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 from-10% to-50% to-cyan-600 sm:text-9xl">
              $0.00025
            </h1>
            <h2 className="uppercase text-neutral-400 sm:text-xl">
              average cost per transaction
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
