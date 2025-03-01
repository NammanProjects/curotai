// pages/Home/Home.js
import React from 'react';
import HeroSection from '../../components/home/HeroSection';
import PitCrewSection from '../../components/home/PitCrewSection';
import WelcomeSection from '../../components/home/AnnotationServices';
import WelcomeToCurota from '../../components/home/WelcomeToCurota';
import Cast from '../../components/home/Cast';
import CaseStudies from '../../components/home/CaseStudies';
import FeaturedArticles from '../../components/home/FeaturedArticles';

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <PitCrewSection />
      <WelcomeSection />
      <div className="bg-[#203e40] pt-20 sm:pt-10 sm:pb-10">
        <WelcomeToCurota />
        <Cast/>
        <FeaturedArticles/>
        <CaseStudies/>
      </div>
    </div>
  );
};

export default Home;