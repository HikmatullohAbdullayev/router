import React from "react";

const planData = [
  {
    id: "1",
    title: "Basic Plan",
    text: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    price: "$9.99",
  },
  {
    id: "2",
    title: "Standard Plan",
    text: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    price: "$12.99",
  },
  {
    id: "3",
    title: "Premium Plan",
    text: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    price: "$14.99",
  },
];

function PlanSection(props) {
  return (
    <section className="container mt-[150px]">
      <div className="flex justify-between items-center">
        <div className="gap-[14px]">
          <h2 className="text-white text-[38px] font-bold leading-[57px] ">
            Choose the plan that's right for you
          </h2>
          <p className="text-neutral-400 text-lg font-normal  leading-[27px">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
        </div>

        <div className="w-[237px] h-[75px] p-2.5 bg-stone-950 rounded-[10px] border border-neutral-800 justify-start items-center inline-flex">
          <div className="px-6 py-3.5 bg-stone-900 rounded-[10px] justify-center items-center gap-2.5 flex">
            <div className="text-white text-lg font-medium font-['Manrope'] leading-[27px]">
              Monthly
            </div>
          </div>
          <div className="px-6 py-3.5 rounded-[100px] justify-center items-center gap-2.5 flex">
            <div className="text-neutral-400 text-lg font-medium font-['Manrope'] leading-[27px]">
              Yearly
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {planData.map((item) =>(
            <div className="">
                <h3 className="w-[412px] text-white text-2xl font-bold  leading-9" >{item.title}</h3>
                <p className="w-[412px] text-neutral-400 text-lg font-normal leading-[27px]">{item.text}</p>
                <p className="text-white text-[40px] font-semibold  leading-[29.20px]">{item.price}<span className="text-neutral-400 text-lg font-medium  leading-[13.14px]">/Month</span></p>
                <div className="buttons flex">
                    <button className=" ">Start Free Trial</button>
                    <button className=" ">Choose Plan</button>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
}
<div className="text-neutral-400 text-lg font-medium font-['Manrope'] leading-[13.14px]">/month</div>

export default PlanSection;
