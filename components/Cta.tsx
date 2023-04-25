const Cta = () => {
  return (
    <div className="h-screen p-6 m-auto sm:h-fit text-neutral-50 bgCta md:pb-32 ">
      <div className="flex flex-col items-center mt-40 space-y-12 ">
        <h1 className="px-4 mx-auto text-4xl font-medium tracking-normal text-center sm:text-5xl sm:mx-24 ">
          It's time to join the thousands of creators, artists, and developers
          using Solana.
        </h1>

        <button className="px-6 py-3 uppercase transition duration-300 rounded-full sm:px-8 text-md bg-gradient-to-r from-fuchsia-400 from-10% via-violet-700 to-violet-950/80 hover:scale-110 hover:-translate-y-1 sm:py-4 sm:text-xl">
          Start Building
        </button>
      </div>
    </div>

    /*
      <h1 className="px-2 mx-auto text-4xl font-semibold tracking-normal text-center ">
        It's time to join the thousand of creators, artists, and developers using Solana.
        </h1>
        <div className="flex items-center mt-6 ">
          <button className="px-5 py-3 uppercase transition duration-300 rounded-full text-md bg-gradient-to-r from-fuchsia-400 via-purple-700 to-neutral-900 hover:scale-110 hover:-translate-y-1">
            Start Building
          </button>
        </div>
     */
  );
};

export default Cta;
