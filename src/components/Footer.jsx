const Footer = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-[1024px] mx-auto grid gap-4 text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col space-y-4 mb-16">
          <div>
            <h3 className=" inline border-b-2 border-primary-blue">Products</h3>
          </div>

          <a href="#">App</a>
          <a href="#">Analytics</a>
          <a href="#">Token Lists</a>
          <a href="#">Defi</a>
        </div>
        <div className="flex flex-col space-y-4 mb-16">
          <div>
            <h3 className=" inline border-b-2 border-primary-blue">
              Developers
            </h3>
          </div>

          <a href="#">App</a>
          <a href="#">Analytics</a>
          <a href="#">Token Lists</a>
          <a href="#">Defi</a>
        </div>
        <div className="flex flex-col space-y-4 mb-16">
          <div>
            <h3 className=" inline border-b-2 border-primary-blue">
              Governance
            </h3>
          </div>

          <a href="#">App</a>
          <a href="#">Analytics</a>
          <a href="#">Token Lists</a>
          <a href="#">Defi</a>
        </div>
        <div className="flex flex-col space-y-4 mb-16">
          <div>
            <h3 className=" inline border-b-2 border-primary-blue">
              Community
            </h3>
          </div>

          <a href="#">App</a>
          <a href="#">Analytics</a>
          <a href="#">Token Lists</a>
          <a href="#">Defi</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
