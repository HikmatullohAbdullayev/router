import React from "react";
import Accardion from "../../../components/Accardion";

function FAQSection(props) {
  return (
    <div className="container mt-[150px]">
      <div className="top mb-20 flex justify-between items-center">
        <div className="text">
          <h2 className=" text-white text-[38px] font-bold leading-[57px]">Frequently Asked Questions</h2>
          <p className="text-neutral-400 text-lg font-normal  leading-[27px w-[1220px] mt-[14px]">
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>
        </div>
        <button className="py-4 px-8 bg-red-700  rounded-lg cursor-pointer text-white">Ask a Question</button>
      </div>
      <Accardion />
    </div>
  );
}

export default FAQSection;
