import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const SkillsBar = ({ title }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 p-4 flex gap-4 items-center">
      <AiFillCheckCircle className="text-2xl text-gray" />
      <h3 className="font-bold mx-2 mb-2 text-green text-left ">{title}</h3>
    </div>
  );
};

export default SkillsBar;
