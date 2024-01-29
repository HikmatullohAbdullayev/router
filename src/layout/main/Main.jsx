import React from 'react';
import HeroSection from './section/HeroSection';
import HeroContentSection from './section/HeroContentSection';
import CategorySection from './section/CategorySection';

function Main(props) {
    return (
        <div>
            <HeroSection/>
            <HeroContentSection/>
            <CategorySection/>
            
        </div>
    );
}

export default Main;