import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import HomeCard from "./HomeCard";
import ProjectData from "../../data/projects.js";

const Container = () => {
  return (
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-black my-12 px-4 sm:px-8 md:px-12">
      <h3 className="text-2xl text-green text-center font-semibold mt-10 mb-8 sm:col-span-2 md:col-span-3 lg:col-span-4">
        Projects
      </h3>
      {ProjectData?.slice(0, 4).map((item) => {
        const { id, title, coverImage, description, srcCode, liveDemo } = item;
        return (
          <HomeCard
            key={id}
            id={id}
            image={coverImage}
            title={title}
            description={description}
            srcCode={srcCode}
            liveDemo={liveDemo}
          />
        );
      })}

      <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 flex justify-center items-center mt-8">
        <Link
          to={"/projects"}
          className="bg-green flex gap-4 py-2 px-4 mb-4 rounded-md  items-center justify-center text-white hover:text-green hover:bg-gray text-sm sm:text-sm md:text-md hover:scale-105"
        >
          More Projects{" "}
          <AiOutlineArrowRight className="text-lg font-semibold" />
        </Link>
      </div>
    </div>
  );
};

export default Container;
