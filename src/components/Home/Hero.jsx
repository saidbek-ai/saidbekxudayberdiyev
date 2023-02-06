import { AiOutlineArrowRight } from "react-icons/ai";
// import MongoDBSvg from "../../assets/mongodb-logo.svg";
// import ExpressSvg from "../../assets/express-logo.svg";
// import ReactSvg from "../../assets/react-logo.svg";
// import NodeSvg from "../../assets/node-logo.svg";
// import HtmlSvg from "../../assets/html-logo.svg";
// import CssSvg from "../../assets/css-logo.svg";
// import JsSvg from "../../assets/js-logo.svg";
// import TailwindSvg from "../../assets/tailwind-logo.svg";
// import BootstrapSvg from "../../assets/bootstrap-logo.svg";

const Hero = ({ fullName }) => {
  return (
    <div className="bg-black text-gray">
      <div className="max-w-[1440px] mx-auto min-h-[90vh] flex justify-center items-center px-4 sm:px-8 md:px-12 gap-8">
        <div className="flex flex-col justify-center  items-center text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-green font-bold lg:text-5xl">
            {fullName}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-3">
            Full Stack Web Developer
          </h2>
          <p className="text-md sm:text-lg md:text-xl lg:text-2xl mt-2 mb-8 ">
            If you want to boost your bussiness you are in the right way!
          </p>
          <div className="inline-block mb-24">
            <a
              href="#about"
              className="bg-green flex gap-4 py-2 px-4 rounded-md items-center font-semibold justify-center text-black hover:text-gray hover:bg-white sm:text-sm md:text-md hover:scale-105"
            >
              Get Started <AiOutlineArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
