import terminal from "../assets/terminal.png";

const Developers = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className="flex flex-col items-center justify-center space-y-16 space-x-8 max-w-[1240px] mx-auto px-4 py-8 lg:flex-row">
        <div className="flex-auto w-4/5 text-center lg:text-left">
          <h3 className="text-3xl font-extrabold">
            Superpowers for DEFI developers.
          </h3>
          <p>
            Checkout the{" "}
            <a href="#" className="text-primary-blue">
              documentation
            </a>
            , the{" "}
            <a href="#" className="text-primary-blue">
              quick start
            </a>{" "}
            or a guide below to integrate your project with thousands of tokens
            and billions of liquidity.
          </p>
        </div>
        <div className="flex-auto w-1/5">
          <img
            src={terminal}
            alt=""
            className="w-full shadow-lg shadow-primary-blue"
          />
        </div>
      </div>
    </div>
  );
};

export default Developers;
