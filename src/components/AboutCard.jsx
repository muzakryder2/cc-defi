const AboutCard = ({ icon, heading, description }) => {
  return (
    <div className="border-[1px] border-white rounded-xl flex flex-col p-7 space-y-4 hover:scale-105">
      {icon}
      <h3 className="font-bold text-lg md:text-left">{heading}</h3>
      <p className="md:text-left">{description}</p>
    </div>
  );
};

export default AboutCard;
