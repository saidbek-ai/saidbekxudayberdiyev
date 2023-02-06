import { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const Accordion = ({ title, text }) => {
  const [open, setOpen] = useState(false);

  const handleAccordion = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      className="border-b border-white bg-white pt-4 px-4 rounded-lg"
      onClick={handleAccordion}
    >
      <button
        className={
          "relative flex items-center justify-between gap-4 pb-2 text-left w-full  text-black text-lg font-normal outline-0 hover:cursor-pointer hover:text-green hover:border-green border-b border-black"
        }
        aria-expanded={false}
      >
        <span className="">{title}</span>
        <span className="text-xl font-bold">
          <AiOutlineMinusCircle className={!open ? "hidden" : "inline"} />
          <AiOutlinePlusCircle className={open ? "hidden" : "inline"} />
        </span>
      </button>
      <div className={open ? "text-black text-md" : "hidden"}>
        <p className="mt-4 font-light">{text}</p>
      </div>
    </div>
  );
};

export default Accordion;
