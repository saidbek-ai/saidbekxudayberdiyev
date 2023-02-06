import { useState } from "react";
import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { BsTelegram, BsInstagram } from "react-icons/bs";
import Redirect from "../Redirect";
import ContactItem from "./ContactItem";

const Contact = ({ contacts }) => {
  const [userInform, setUserInform] = useState({
    NAME: "",
    EMAIL: "",
    PROJECT: "",
    MESSAGE: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserInform((prevValue) => ({ ...prevValue, [name]: value }));
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 my-12 grid gap-4 md:grid-cols-2 md:gap-6 ">
      <h3 className="text-2xl text-green text-center font-semibold mt-10 mb-8 md:col-span-2">
        Contact Me
      </h3>
      <div className="flex justify-center">
        <form
          action="mailto:saidbekxudayberdiyevs@gmail.com"
          method="post"
          encType="text/plain"
          className="w-full"
        >
          <label
            htmlFor="usName"
            className="flex flex-col text-sm text-[#999] mb-2"
          >
            Name
            <input
              type="text"
              id="usName"
              name="NAME"
              onChange={handleChange}
              value={userInform.NAME}
              className="w-full p-2 rounded-md border border-[#999] text-black mt-1 outline-none"
            />
          </label>

          <label
            htmlFor="usEmail"
            className="flex flex-col text-sm text-[#999] mb-2"
          >
            Email
            <input
              type="email"
              id="usEmail"
              name="EMAIL"
              onChange={handleChange}
              value={userInform.EMAIL}
              className="w-full p-2 rounded-md border border-[#999] text-black mt-1 outline-none"
            />
          </label>
          <label
            htmlFor="filedForProject"
            className="flex flex-col text-sm text-[#999] my-2"
          >
            Your Project
            <input
              type="text"
              id="filedForProject"
              name="PROJECT"
              onChange={handleChange}
              value={userInform.PROJECT}
              className="w-full p-2 rounded-md border border-[#999] text-black mt-1 outline-none"
            />
          </label>

          <label
            htmlFor="usMessage"
            className="flex flex-col text-sm text-[#999] my-2"
          >
            Message
            <textarea
              className="w-full p-2 rounded-md border border-[#999] text-black  mt-1 outline-none"
              cols="30"
              id="usMessage"
              name="MESSAGE"
              onChange={handleChange}
              value={userInform.MESSAGE}
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-green flex gap-4 py-2 px-4 rounded-md items-center justify-center text-white hover:text-green hover:bg-gray text-sm sm:text-sm md:text-md hover:scale-105"
          >
            Send
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-0">
        <ul className="flex flex-col gap-4 mt-4 leading-10 sm:col-span-2 lg:col-span-2">
          {contacts?.map((item, index) => {
            return (
              <ContactItem
                key={index}
                title={Object.keys(item)}
                value={Object.values(item)}
              />
            );
          })}
        </ul>
        <div className="flex sm:flex-col md:flex-row lg:flex-col sm:justify-center md:mt-2 lg:mt-0 justify-around items-center gap-2">
          <Redirect
            link={"https://github.com/saidbek-ai"}
            icon={<AiFillGithub />}
            btnStyle="p-4 bg-black hover:scale-105 hover:bg-green hover:cursor-pointer shadow-lg text-white rounded-md text-xl"
          ></Redirect>
          <Redirect
            link={"https://api.whatsapp.com/send?phone=998940230155"}
            icon={<AiOutlineWhatsApp />}
            btnStyle="p-4 bg-black hover:scale-105 hover:bg-green hover:cursor-pointer shadow-lg text-white rounded-md text-xl"
          />
          <Redirect
            link={"https://t.me/saidbekxudayberdiyev"}
            icon={<BsTelegram />}
            btnStyle="p-4 bg-black hover:scale-105 hover:bg-green hover:cursor-pointer shadow-lg text-white rounded-md text-xl"
          />
          <Redirect
            link={"http://www.instagram.com/saidbekkhudayberdiev"}
            icon={<BsInstagram />}
            btnStyle="p-4 bg-black hover:scale-105 hover:bg-green hover:cursor-pointer shadow-lg text-white rounded-md text-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
