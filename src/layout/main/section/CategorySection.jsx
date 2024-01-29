import React from "react";
import ArrowRigthIcon from "../../../assets/icon/ArrowRigthIcon";
import ArrowLeftIcon from "../../../assets/icon/ArrowLeftIcon";

import Img1 from "../../../assets/img/action.png"
import Img2 from "../../../assets/img/adventure.png"
import Img3 from "../../../assets/img/comedy.png"
import Img4 from "../../../assets/img/drama.png"
import Img5 from "../../../assets/img/horror.png"

const cardData = [
  {
    id: 1,
    img: Img1,
    title: "Action",
  },
  {
    id: 2,
    img: Img2,
    title: "Adventure",
  },
  {
    id: 3,
    img: Img3,
    title: "Comedy",
  },
  {
    id: 4,
    img: Img4,
    title: "Drama",
  },
  {
    id: 5,
    img: Img5,
    title: "Horror",
  },
];

function CategorySection (props) {
  return (
    <section className="container  mt-[200px]">
      <div className="flex justify-between items-center">
        <div className=" gap-3">
          <h2 className="text-white text-[38px] font-bold leading-[57px] ">
            Explore our wide variety of categories
          </h2>
          <p className="text-neutral-400 text-lg font-normal  leading-[27px">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
        <div className="icons flex items-center justify-between gap-1 bg-[#0F0F0F] p-4 rounded-lg">
          <span className=" cursor-pointer">
            <ArrowRigthIcon />
          </span>
          <span className="w-6 h-[2px] bg-[#333333] cursor-pointer  hover:bg-red-600 "></span>
          <span className="w-6 h-[2px] bg-[#333333] cursor-pointer  hover:bg-red-600 "></span>
          <span className="w-6 h-[2px] bg-[#333333] cursor-pointer  hover:bg-red-600 "></span>
          <span className="w-6 h-[2px] bg-[#333333] cursor-pointer  hover:bg-red-600 "></span>
          <span className=" cursor-pointer">
            <ArrowLeftIcon />
          </span>
        </div>
      </div>
      
     <div className="flex justify-between items-center gap-7 mt-20">
      {cardData.map((item) => (
        <div key={item.id} className=" p-8 cursor-pointer gap-2 bg-[#1A1A1A] rounded-lg hover:bg-[#262626]">
          <img className="w-full" src={item.img} alt="img" />
          <div className="flex justify-between items-center pt-2 ">
            <h3 className="text-white text-[18px] font-semibold leading-[27px]">{item.title}</h3>
            <span className="">
              <ArrowLeftIcon />
            </span>
            {console.log("sss")}
          </div>
        </div>
      ))}
      </div>
    </section>
  );
}

export default CategorySection;
