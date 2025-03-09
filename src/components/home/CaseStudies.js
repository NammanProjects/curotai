import React, { useRef, useState, useEffect } from 'react';

const CaseStudies = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const caseStudies = [
    {
      id: 1,
      title: "Drone Imaging",
      image: "/img/case-study-1.jpg",
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
      hoverColor: "bg-[#c9d6f0]", // Light blue
      textColor: "text-[#5f85c9]",
      bannerColor: "bg-[#c9d6f0]",
      bulletPoints: [
        "Lorem Ipsum Lorem Ipsum",
        "50% Addition"
      ]
    }
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const scrolled = container.scrollLeft;
      const progress = (scrolled / scrollWidth) * 100;
      setScrollProgress(progress);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-cover bg-[url('../public/img/background-image-0.png')] bg-center pb-20 relative">
      {/* Grid background pattern */}
    
      
      <div className="relative mx-auto px-4 min-h-[48vh] pt-[7vh]">
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-[60px]">Blogs</h2>
        
        <div className="relative">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[37px] flex justify-center items-center bg-white/90 border-[1.5px] border-gray-300 rounded-2xl p-3 px-5 shadow-lg"
            aria-label="Previous testimonial"
          >
            <span className="sr-only">Previous</span>
            <div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="22px" width="16px" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg></div>
          </button>

          <div 
            ref={containerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar mb-12 px-10"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none'
            }}
          >
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className="min-w-[300px] md:min-w-[350px] flex-none snap-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card */}
                <div className="rounded-3xl overflow-hidden h-48 md:h-56 relative">
                  {/* Default state - with logo and title band at bottom */}
                  {hoveredIndex !== index && (
                    <div className="h-full bg-[#dbe7e7] flex flex-col">
                      {/* Logo container - 75% height */}
                      <div className="h-[75%] flex items-center justify-center">
                        <img
                          src="/img/Curota_logo_Dark.svg" 
                          alt="Logo"
                          className="w-16 h-16 opacity-20"
                        />
                      </div>
                      
                      {/* Title band - 25% height */}
                      <div className={`${study.bannerColor} h-[25%] w-full flex items-center justify-center`}>
                        <h3 className={`text-base md:text-lg ${study.textColor} font-medium px-4 text-center`}>
                          {study.title}
                        </h3>
                      </div>
                    </div>
                  )}
                  
                  {/* Hover state - content */}
                  {hoveredIndex === index && (
                    <div className={`${study.hoverColor} p-6 h-full`}>
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
                      
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[37px] flex justify-center items-center bg-white/90 border-[1.5px] border-gray-300 rounded-2xl p-3 px-5 shadow-lg"
            aria-label="Next testimonial"
          >
            <span className="sr-only">Next</span>
            <div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="22px" width="16px" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></div>
          </button>
        </div>

        
        {/* Scroll-bar style progress indicator */}
        <div className="mt-8 w-48 h-2 mx-auto bg-gray-200 rounded-full relative">
          <div 
            className="h-full bg-teal-400 rounded-full absolute transition-all duration-300"
            style={{ 
              width: '25px',
              left: `calc(${scrollProgress}% - 25px * ${scrollProgress / 100})` 
            }}
          />
        </div>
      </div>
    </div>
  );
};

// Add custom styles to hide scrollbar
const style = document.createElement('style');
style.textContent = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
`;
document.head.appendChild(style);

export default CaseStudies;