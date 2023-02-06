import { useState } from "react";
import faq from "../data/faq.js";
import Accordion from "../components/Support/Accordion";

const Support = () => {
  const [question, setQuestion] = useState({});

  const handleInput = (e) => {
    const { value } = e.target;
    setQuestion({ question: value });
  };

  return (
    <div className="bg-black">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 py-12 min-h-[85vh]">
        <div className="md:w-3/4 mx-auto">
          <h3 className="text-2xl text-green text-center font-semibold my-6">
            Support Center
          </h3>
          <form
            action="mailto:saidbekxudayberdiyevs@gmail.com"
            method="post"
            encType="text/plain"
            className="flex justify-left mx-auto"
          >
            <label htmlFor="question" className="w-full">
              <input
                type="text"
                id="question"
                value={question.question}
                onChange={handleInput}
                name="question"
                placeholder="Do you have a Question?"
                className="w-full p-3 rounded-l-lg drop-shadow-xl outline-0 "
              />
            </label>
            <button
              type="submit"
              className=" text-white text-xl bg-green rounded-r-lg hover:bg-gray hover:scale-105 px-4 sm:px-8"
            >
              Send
            </button>
          </form>
          <div className="mb-8 mt-2 flex flex-col">
            <h3 className="text-2xl text-green text-center font-semibold my-6">
              Frequently Asked Questions
            </h3>

            <div className="bg-white rounded-lg py-6">
              {faq?.map((item) => {
                const { id, title, text } = item;
                return <Accordion key={id} title={title} text={text} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
