import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] h-full mx-auto px-4 flex items-center justify-between">
        <div>
          <h1 className="text-primary-blue">Defi</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex items-center text-white">
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button className="ml-4">Use Defi</button>
          </ul>
        </div>
        {/* Hamburger Menu */}
        <div className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "left-0" : "left-[-100%]"
          } flex md:hidden w-full z-20 justify-center text-center bg-black text-white absolute top-[90px] h-[calc(100vh_-_90px)]`}
        >
          <ul>
            <li className="text-2xl">Platform</li>
            <li className="text-2xl">Developers</li>
            <li className="text-2xl">Community</li>
            <li className="text-2xl">About</li>
            <button className="m-8">Use Defi</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
