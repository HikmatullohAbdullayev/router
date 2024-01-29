import React from 'react';
import HeroSection from './section/HeroSection';
import HeroContentSection from './section/HeroContentSection';
import CategorySection from './section/CategorySection';
import ProvideSection from './section/ProvideSection';
import FAQSection from './section/FAQSection';
import PlanSection from './section/PlanSection';
import FreeTrialSection from './section/FreeTrialSection';
import Footer from '../footer/Footer';

function Main(props) {
    return (
        <div className=' flex flex-col justify-between '>
            <div className="wrapper">
            <HeroSection/>
            <main >
            <HeroContentSection/>
            <CategorySection/>
            <ProvideSection/>
            <FAQSection/>
            <PlanSection/>
            <FreeTrialSection/>
            </main>
            </div>
            <Footer/>
            
        </div>
    );
}

export default Main;