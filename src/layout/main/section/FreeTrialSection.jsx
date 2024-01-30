import React from 'react';
import Banner_2 from "../../../assets/img/BackgroundImages.png"

function FreeTrialSection(props) {
    return (
        <section className= "container mt-[50px] flex justify-around items-center bg-cover w-full h-[334px]  mb-[134px] "
        style={{ backgroundImage: `url(${Banner_2})` }} >
            <div className="">
                <h2 className='w-[412px] text-white text-3xl font-bold  leading-9'>Start your free trial today!</h2>
                <p className=" text-neutral-400 text-xl font-normal leading-[27px] mt-[16px]">This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
            </div>
            <button className=' rounded-lg text-white text-lg font-semibold leading-[27px] py-[18px] px-6 bg-red-600 '>Start a Free Trail</button>
        </section>
    );
}

export default FreeTrialSection;