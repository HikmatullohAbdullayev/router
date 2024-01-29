import React from "react";
import LogoImg from "../../assets/img/Logo_header.png";
import SearchIcon from "../../assets/icon/SearchIcon"
import NotificationIcon from "../../assets/icon/NotificationIcon"

function Header(props) {
  return (
    <div className=" sticky container  flex justify-between items-center py-6 px-6 bg-transparent">
      <img src={LogoImg} alt="logo" />
      <nav className="rounded-xl border-4 border-solid border-[#1A1A1A]">
        <ul className="flex items-center justify-between rounded-lg bg-black py-2 px-9 gap-8">
          <li className="  py-2 px-4 text-white rounded-lg hover:bg-[#1A1A1A]">
            <a href="#"> Home</a>
          </li>
          <li className="  py-2 px-4 text-white rounded-lg hover:bg-[#1A1A1A]">
            <a href="#"> Movies & Shows</a>
          </li>
          <li className=" py-2 px-4 text-white rounded-lg hover:bg-[#1A1A1A]">
            <a href="#">Support</a>
          </li>
          <li className="  py-2 px-4 text-white rounded-lg hover:bg-[#1A1A1A]">
            <a href="#"> Subscriptions</a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-center  gap-7 ">
        <span className="cursor-pointer"><SearchIcon/></span>
        <span className="cursor-pointer"><NotificationIcon/></span>
      </div>
    </div>
  );
}

export default Header;
