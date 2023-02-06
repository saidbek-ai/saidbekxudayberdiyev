import devData from "../data/devData.js";

const Footer = () => {
  const { firstName, lastName } = devData;
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="bg-black text-gray text-center py-6">
      <p className="px-4">
        {fullName} © {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
