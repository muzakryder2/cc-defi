const CTA = () => {
  return (
    <div className="bg-black w-full text-white pt-4 md:pt-16">
      <div className=" flex flex-col items-center justify-center p-3 space-y-8 mx-auto max-w-[1024px]">
        <h2 className="text-2xl font-bold md:text-3xl">
          Join our DeFi Community
        </h2>
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <input
            className="rounded-full px-8 text-black py-3"
            type="text"
            placeholder="Enter your email"
          />
          <button>Sign Up</button>
        </div>
        <div className="w-[275px] flex items-center justify-center space-x-4 sm:w-full">
          <input type="checkbox" name="terms-checkbox" id="terms-checkbox" />
          <p>Yes, I agree to receive email communications from DeFi.</p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
