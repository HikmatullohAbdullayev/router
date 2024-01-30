import React from 'react';

import SmartphoneIcon from "../../../assets/icon/SmartphoneIcon"
import SmartTVIcon from "../../../assets/icon/SmartTVIcon"
import TableIcon from "../../../assets/icon/TabletIcon"
import LaptopIcon from "../../../assets/icon/LaptopIcon"
import GamingIcon from "../../../assets/icon/GamingIcon"
import VRIcon from "../../../assets/icon/VRIcon"

const dataList = [
    {
        id:"1",
        title: "Smarartphone",
        img: <SmartphoneIcon/>,
        text: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
    {
        id:"2",
        title: "Table",
        img: <TableIcon/>,
            text: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
    {
        id:"3",
        title: "Smart TV",
        img: <SmartTVIcon/>,
            text: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
    {
        id:"4",
        title: "Laptop",
        img: <LaptopIcon/>,
            text: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
    {
        id:"5",
        title: "Gaming console",
        img: <GamingIcon/>,
            text: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
    {
        id:"6",
        title: "VR ",
        img: <VRIcon/>,
        text: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
]

function ProvideSection(props) {
    return (
        <section className='container mt-[150px] gap-[80px]'>
            <div className="">
                <h2 className='text-white text-[38px] font-bold leading-[57px]'>We Provide you streaming experience across various devices.</h2>
                <p className='text-neutral-400 text-lg font-normal  leading-[27px w-[1220px]'> With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
            </div>
            <div className=" grid grid-cols-3  gap-8 mt-20">
            {dataList.map((item) =>(
                <div className=" w-full rounded-lg border border-[#151414] p-[30px] bg-[#1F1F1F]">
                    <div className="flex  items-center">
                    <span className='p-4 bg-[#141414] rounded-lg '>{item.img}</span>
                    <h3 className='ml-2 text-white text-2xl font-semibold'>{item.title}</h3>
                </div>
                <p className='w-[412px] mt-8 text-[#999999]'>{item.text}</p>
                </div>
            ))}
            </div>
        </section>
    );
}

export default ProvideSection;