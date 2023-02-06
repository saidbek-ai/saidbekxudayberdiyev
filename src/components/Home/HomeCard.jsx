import { BiCode } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import Redirect from "../Redirect";
import defaultImage from "../../assets/icons/default-image.svg";

const HomeCard = ({ id, title, image, description, srcCode, liveDemo }) => {
  return (
    <div className=" shadow-2xl p-4 rounded-lg bg-white hover:scale-105 relative">
      <div className="image">
        <img
          src={image ? image : defaultImage}
          alt=""
          className="rounded-md object-fit mx-auto h-48 w-96 mb-2"
        />
      </div>

      <h3 className="text-lg text-center text-green font-semibold mb-14">
        {title}
      </h3>

      <div className="flex justify-center align-center gap-4 absolute bottom-4 right-2 left-2">
        {liveDemo ? (
          <Redirect
            icon={<AiOutlineEye />}
            link={liveDemo}
            btnStyle="text-2xl bg-green py-2 px-4 flex justify-center items-center rounded-lg text-white hover:cursor-pointer hover:scale-105 hover:bg-gray hover:text-white"
          />
        ) : (
          ""
        )}
        {srcCode ? (
          <Redirect
            icon={<BiCode />}
            link={srcCode}
            btnStyle="text-2xl bg-black text-green py-2 px-4 flex justify-center items-center rounded-lg hover:cursor-pointer hover:scale-105 hover:bg-gray hover:text-white"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default HomeCard;
