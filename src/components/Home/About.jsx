import { AiOutlineArrowDown } from "react-icons/ai";
import SkillsBar from "./SkillsBar";
import Resume from "../../data/resumeSXT.pdf";

const About = ({ fullName, photo, aboutMe, mySkills }) => {
  return (
    <div
      className="max-w-[1440px] mx-auto min-h-screen bg-white px-4 sm:px-8 md:px-12  text-center md:text-left py-12"
      id="about"
    >
      {/* About  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <h3 className="text-2xl text-green text-center font-semibold mt-10 mb-8 md:col-span-2">
          About Me
        </h3>
        <div className="flex justify-center items-center">
          <img src={photo} alt="" className="h-3/4 rounded-lg" />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start">
          <h2 className="text-2xl text-green font-semibold mb-3">
            I'm {fullName} Full Stack Developer
          </h2>
          <p className="text-gray text-lg mb-6">{aboutMe}</p>
          <div className="inline-block">
            <a
              href={Resume}
              className="bg-green flex gap-4 py-2 px-4 rounded-md items-center justify-center text-white hover:text-green hover:bg-gray text-sm sm:text-sm md:text-md hover:scale-105"
              download={"ResumeSXT_Official.pdf"}
            >
              Download Resume <AiOutlineArrowDown />
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <h3 className="text-2xl  text-green text-center font-semibold mt-10 mb-8 md:col-span-2">
          My Skills
        </h3>
        <div className="shadow-lg p-2 hover:scale-105 rounded-xl">
          <h3 className="text-gray font-semibold text-lg text-center md:text-left mb-6 drop-shadow-md ">
            Frontend
          </h3>
          <div className="flex flex-wrap">
            {mySkills?.frontEnd?.map((item, index) => {
              return <SkillsBar key={index} title={item} />;
            })}
          </div>
        </div>
        <div className="shadow-lg p-2 hover:scale-105 rounded-xl">
          <h3 className="text-gray font-semibold text-lg text-center md:text-left mb-6 drop-shadow-md">
            Backend
          </h3>
          <div className="flex flex-wrap">
            {mySkills?.backEnd?.map((item, index) => {
              return <SkillsBar key={index} title={item} />;
            })}
          </div>
        </div>
        <div className="md:col-span-2 shadow-lg p-2 hover:scale-105 rounded-xl">
          <h3 className="text-gray font-semibold text-lg text-center drop-shadow-md">
            Extra
          </h3>
          <div className="flex flex-wrap">
            {mySkills?.extra?.map((item, index) => {
              return <SkillsBar key={index} title={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
