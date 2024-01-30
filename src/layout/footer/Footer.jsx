import React from "react";
import FacebookIcon from "../../assets/icon/FacebookIcon"
import TwiterIcon from "../../assets/icon/TwitterIcon"
import LinkdenIcon from "../../assets/icon/LinkdenIcon"

function Footer(props) {
  return (
    <footer className=" pt-24 bg-[#262626] p-16">
     <div className="container flex justify-between items-stretch gap-8 ">
     <ul className=" flex flex-col gap-4">
        <h2 className="w-[241px] text-white text-xl font-semibold  leading-[30px]">Home</h2>
        <li>
          <p className="w-[241px] text-neutral-400 text-lg font-medium font-['Manrope'] leading-[27px]">Categories</p>
        </li>
        <li>
          <p className="w-[241px] text-neutral-400 text-lg font-medium font-['Manrope'] leading-[27px]">Devices</p>
        </li>
        <li>
          <p className="w-[241px] text-neutral-400 text-lg font-medium font-['Manrope'] leading-[27px]">Pricing</p>
        </li>
        <li>
          <p className="w-[241px] text-neutral-400 text-lg font-medium font-['Manrope'] leading-[27px]">FAQ</p>
        </li>
      </ul>
     <ul className="flex flex-col gap-4">
        <h2 className="w-[241px] text-white text-xl font-semibold  leading-[30px]">Home</h2>
        <li>
          <p className="w-[241px] text-neutral-400 text-lg font-medium font-['Manrope'] leading-[27px]">Categories</p>
        </li>
        <li>
          <p className="w-[241px] text-neutral-400 text-lg font-medium font-['Manrope'] leading-[27px]">Devices</p>
        </li>
        <li>
          <p className="w-[241px] text-neutral-400 text-lg font-medium font-['Manrope'] leading-[27px]">Pricing</p>
        </li>
        <li>
          <p className="w-[241px] text-neutral-400 text-lg font-medium font-['Manrope'] leading-[27px]">FAQ</p>
        </li>
      </ul>
     <ul className="flex flex-col gap-4">
        <h2 className="w-[241px] text-white text-xl font-semibold  leading-[30px]">Home</h2>
        <li>
          <p className="w-[241px] text-neutral-400 text-lg font-medium font-['Manrope'] leading-[27px]">Categories</p>
        </li>
        <li>
          <p className="w-[241px] text-neutral-400 text-lg font-medium font-['Manrope'] leading-[27px]">Devices</p>
        </li>
        <li>
          <p className="w-[241px] text-neutral-400 text-lg font-medium font-['Manrope'] leading-[27px]">Pricing</p>
        </li>
        <li>
          <p className="w-[241px] text-neutral-400 text-lg font-medium font-['Manrope'] leading-[27px]">FAQ</p>
        </li>
      </ul>
     <ul className="flex flex-col gap-4">
        <h2 className="w-[241px] text-white text-xl font-semibold  leading-[30px]">Home</h2>
        <li>
          <p className="w-[241px] text-neutral-400 text-lg font-medium font-['Manrope'] leading-[27px]">Categories</p>
        </li>
       
       
      </ul>
      <ul>
        <h2 className="w-[241px] text-white text-xl font-semibold  leading-[30px]">Connect With Us</h2>
        <li className="gap-4 flex items-center mt-5">
            <span className="p-4 rounded-lg bg-slate-900"><FacebookIcon/></span>
            <span className="p-4 rounded-lg bg-slate-900"><TwiterIcon/></span>
            <span className="p-4 rounded-lg bg-slate-900"><LinkdenIcon/></span>
            </li>
      </ul>

     </div>
    </footer>
  );
}

export default Footer;
