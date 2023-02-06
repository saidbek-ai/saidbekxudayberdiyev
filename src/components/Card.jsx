import defaultImage from "../assets/icons/default-image.svg";
import { BiCode } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import Redirect from "./Redirect";

const Card = ({ id, title, image, description, srcCode, liveDemo }) => {
  return (
    <div className="p-3 shadow-lg hover:scale-105 relative rounded-lg">
      <div className="img-container">
        <img
          src={image ? image : defaultImage}
          alt=""
          className="rounded-t-lg object-fit mx-auto h-48 w-96"
        />
        <h3 className="text-xl font-semibold my-2 text-green">{title}</h3>
        <p className="text-md text-black mb-16">{description}</p>
        <div className="flex justify-center items-center gap-4 absolute bottom-4 right-0 left-0">
          {srcCode ? (
            <Redirect
              icon={<BiCode />}
              link={srcCode}
              btnStyle="text-xl p-3 bg-black rounded-lg text-white cursor-pointer shadow-lg hover:scale-105 hover:bg-gray hover:text-white"
            />
          ) : (
            ""
          )}
          {liveDemo ? (
            <Redirect
              icon={<AiOutlineEye />}
              link={liveDemo}
              btnStyle="text-xl p-3 bg-green rounded-lg text-white cursor-pointer shadow-lg hover:scale-105 hover:bg-gray hover:text-white"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
