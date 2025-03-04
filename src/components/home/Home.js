// pages/Home/Home.js
import React from 'react';
import HeroSection from '../../components/home/HeroSection';
import PitCrewSection from '../../components/home/PitCrewSection';
import WelcomeSection from '../../components/home/WelcomeSection';
import WelcomeToCurota from '../../components/home/WelcomeToCurota';

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <PitCrewSection />
      <WelcomeSection />
      <div className="bg-[#203e40] pt-20 pb-20 sm:pt-10 sm:pb-10">
        <WelcomeToCurota />
      </div>
    </div>
  );
};

export default Home;