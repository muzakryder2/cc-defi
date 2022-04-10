import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="w-full bg-black">
      <div className="flex flex-col items-center max-w-[1440px] mx-auto px-4 py-16 text-white text-center space-y-8">
        <h1>A Growing Protocol Ecosystem</h1>
        <p className="text-xl">
          The Defi protocol system empowers developers, liquidity providers, and
          traders to participate in a financial marketplace that is open and
          accessible to all.
        </p>
        <div className="pt-5 w-full grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <AboutCard
            icon={
              <SiHiveBlockchain
                className="bg-primary-blue rounded-full p-3 text-gray-700 mb-2 mx-auto md:mx-0"
                size={50}
              />
            }
            heading="Reliable, tamper-proof network"
            description="Use decentralization, trusted nodes, premium data, and
              cryptographic proofs to connect highly accurate and available
              data/APIs to any smart contact."
          />
          <AboutCard
            icon={
              <SiStrapi
                className="bg-primary-blue rounded-full p-3 text-gray-700 mb-2 mx-auto md:mx-0"
                size={50}
              />
            }
            heading="Seamless connection to any API"
            description="Build on a flexible framework that can retrieve data from any API,
              connect with existing systems, and integrate with any current or
              future blockchain."
          />
          <AboutCard
            icon={
              <SiFsecure
                className="bg-primary-blue rounded-full p-3 text-gray-700 mb-2 mx-auto md:mx-0"
                size={50}
              />
            }
            heading="Proven, ready-made solutions"
            description="Integrate pre-built, time-tested oracle solutions that already
              secure tens of billions in smart contract value for market-leading
              decentralized applications."
          />
          <AboutCard
            icon={
              <VscServerProcess
                className="bg-primary-blue rounded-full p-3 text-gray-700 mb-2 mx-auto md:mx-0"
                size={50}
              />
            }
            heading="Secure off-chain computation"
            description="Use a decentralized network of Defi Keeper nodes to automate
              contracts, mitigating risk of manual interventions and centralized
              servers."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
