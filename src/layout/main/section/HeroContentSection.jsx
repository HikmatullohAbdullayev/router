import React from 'react';
import PlayIcon from "../../../assets/icon/PlayIcon"

function HeroContentSection(props) {
    return (
        <section className='container  text-center max-w-[1096px]'>
            <h1 className='text-white text-6xl font-bold '>The Best Streaming Experience</h1>
            <p className='text-[#999999] mt-4 mb-12 '>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
            <button className='text-white px-6 py-4 bg-[#E50000] flex items-center justify-between gap-1 rounded-lg mx-auto '><span><PlayIcon/> </span> Start Watching Now </button>
            
        </section>
    );
}

export default HeroContentSection;