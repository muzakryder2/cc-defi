import heroVid from "../assets/video.mp4";

const Hero = () => {
  return (
    <div className="relative text-white w-full md:h-[calc(100vh_-_90px)]">
      <video
        className="absolute top-0 left-0 -z-10 object-cover h-full w-full brightness-75"
        src={heroVid}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="h-[90%] w-full flex flex-col items-center justify-center space-y-7 text-center">
        <h1>Decentralized</h1>
        <h1>
          <span className="text-primary-blue">Trading</span> Protocol
        </h1>
        <p className="text-xl max-w-xl px-3">
          Guaranteed liquidity trading for millions of users and top Ethereum
          applications.
        </p>
        <div className="flex space-x-8">
          <button>Use Defi</button>
          <button className="bg-none border-[1px] text-primary-blue border-primary-blue">
            FAQ
          </button>
        </div>
      </div>
      <div className="mt-16">
        <p className="text-white text-2xl text-center font-semibold opacity-80 md:ml-8 md:text-left">
          Total Volume Secured: $42,104,783,662.47
        </p>
      </div>
    </div>
  );
};

export default Hero;
