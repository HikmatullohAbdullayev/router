import React from 'react';
import Banner from "../../../assets/img/banner.png"

function HeroSection(props) {
    return (
        <div className="bg-cover h-screen flex items-center justify-center mt-[-100px]"
        style={{ backgroundImage: `url(${Banner})` }}>
        </div>
    );
}

export default HeroSection;