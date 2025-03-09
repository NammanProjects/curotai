import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CaseStudiesPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Case studies data
  const caseStudies = [
    {
      id: 1,
      title: "Drone Imaging",
      image: "/img/case-study-1.jpg",
      logo: "/img/Curota_logo_Dark.svg",
      hoverColor: "bg-[#f0e0a2]", // Yellow
      textColor: "text-[#c97948]",
      bannerColor: "bg-[#f0e0a2]",
      bulletPoints: [
        "Lorem Ipsum Lorem Ipsum",
        "50% improvement"
      ]
    },
    {
      id: 2,
      title: "Drone Imaging",
      image: "/img/case-study-2.jpg",
      logo: "/img/Curota_logo_Dark.svg",
      hoverColor: "bg-[#e4c0e4]", // Purple
      textColor: "text-[#9c4498]",
      bannerColor: "bg-[#e4c0e4]",
      bulletPoints: [
        "Lorem Ipsum Lorem Ipsum",
        "50% Addition"
      ]
    },
    {
      id: 3,
      title: "Drone Imaging",
      image: "/img/case-study-3.jpg",
      logo: "/img/Curota_logo_Dark.svg",
      hoverColor: "bg-[#ffcaba]", // Salmon
      textColor: "text-[#e86a4d]",
      bannerColor: "bg-[#ffcaba]",
      bulletPoints: [
        "Lorem Ipsum Lorem Ipsum",
        "50% Addition"
      ]
    },
    {
      id: 4,
      title: "Drone Imaging",
      image: "/img/case-study-4.jpg",
      logo: "/img/Curota_logo_Dark.svg",
      hoverColor: "bg-[#c9d6f0]", // Light blue
      textColor: "text-[#5f85c9]",
      bannerColor: "bg-[#c9d6f0]",
      bulletPoints: [
        "Lorem Ipsum Lorem Ipsum",
        "50% Addition"
      ]
    },
    {
      id: 5,
      title: "Drone Imaging",
      image: "/img/case-study-5.jpg", 
      logo: "/img/Curota_logo_Dark.svg",
      hoverColor: "bg-[#f0e0a2]", // Yellow (reusing colors)
      textColor: "text-[#c97948]",
      bannerColor: "bg-[#f0e0a2]",
      bulletPoints: [
        "Lorem Ipsum Lorem Ipsum",
        "50% Addition"
      ]
    },
    {
      id: 6,
      title: "Drone Imaging",
      image: "/img/case-study-6.jpg",
      logo: "/img/Curota_logo_Dark.svg",
      hoverColor: "bg-[#e4c0e4]", // Purple
      textColor: "text-[#9c4498]",
      bannerColor: "bg-[#e4c0e4]",
      bulletPoints: [
        "Lorem Ipsum Lorem Ipsum",
        "50% Addition"
      ]
    },
    {
      id: 7,
      title: "Drone Imaging",
      image: "/img/case-study-7.jpg",
      logo: "/img/Curota_logo_Dark.svg",
      hoverColor: "bg-[#ffcaba]", // Salmon
      textColor: "text-[#e86a4d]",
      bannerColor: "bg-[#ffcaba]",
      bulletPoints: [
        "Lorem Ipsum Lorem Ipsum",
        "50% Addition"
      ]
    },
    {
      id: 8,
      title: "Drone Imaging",
      image: "/img/case-study-8.jpg",
      logo: "/img/Curota_logo_Dark.svg",
      hoverColor: "bg-[#c9d6f0]", // Light blue
      textColor: "text-[#5f85c9]",
      bannerColor: "bg-[#c9d6f0]",
      bulletPoints: [
        "Lorem Ipsum Lorem Ipsum",
        "50% Addition"
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Section with Logo and Title */}
      <div className="py-20 relative bg-[url('../public/img/background-image-0.png')] flex flex-col items-center">
      <div className='m-[11vh]'></div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-20 h-20 mb-6"
        >
          <img src="/img/logo-icon-transparent.png" alt="Logo icon" className="w-full h-full" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-black text-center mb-4"
        >
          CASE STUDIES
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/60 backdrop-blur-sm py-2 px-6 rounded-full font-semibold text-[#203e40]"
        >
        <img src='/img/vector.png' alt='vector' className='h-5 w-5 mr-1 mb-1 inline'></img>
          NOS: 10
        </motion.div>
      </div>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-7 mt-[80px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="rounded-3xl overflow-hidden h-64 relative bg-[#e3e3e3]">
                {/* Default state - with logo and title band at bottom */}
                {hoveredIndex !== index && (
                  <div className="h-full flex flex-col">
                    {/* Logo container - 75% height */}
                    <div className="h-[75%] flex items-center justify-center">
                      <img
                        src={study.logo}
                        alt="Logo"
                        className="w-20 h-20 opacity-20"
                      />
                    </div>
                    
                    {/* Title band - 25% height */}
                    <div className={`${study.bannerColor} h-[25%] w-full flex items-center justify-center`}>
                      <h3 className={`text-lg ${study.textColor} font-medium px-4 text-center`}>
                        {study.title}
                      </h3>
                    </div>
                  </div>
                )}
                
                {/* Hover state */}
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`${study.hoverColor} p-6 h-full`}
                  >
                    <h3 className={`text-xl font-semibold mb-4 ${study.textColor}`}>
                      {study.title}
                    </h3>
                    <ul className={`${study.textColor} list-disc pl-5`}>
                      {study.bulletPoints.map((point, i) => (
                        <li key={i} className="mb-2">{point}</li>
                      ))}
                    </ul>
                    
                    {/* Arrow button */}
                    <div className={`absolute bottom-4 right-4 ${study.textColor} bg-white/20 rounded-full p-2`}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
                      </svg>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <div className="flex justify-center mt-[400px]">
        <Link 
          to="/"
          className="flex items-center "
        >
        <button className="bg-[#d1e5e1] text-[#203e40] rounded-full shadow-xl px-16 py-5 flex items-center gap-6 hover:bg-[#c0d9d4] transition-colors duration-300">
          <span className="text-2xl font-semibold">Go Back</span>
          <svg stroke="currentColor" fill="[#203e40]" stroke-width="0" viewBox="0 0 16 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clip-rule="evenodd"></path></svg>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default CaseStudiesPage;