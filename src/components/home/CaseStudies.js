import React, { useRef, useState, useEffect } from 'react';

const CaseStudies = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const caseStudies = [
    {
      id: 1,
      title: "Case Study 1",
      image: "/img/case-study-1.jpg",
    },
    {
      id: 2,
      title: "Case Study 2",
      image: "/img/case-study-2.jpg",
    },
    {
      id: 3,
      title: "Case Study 3",
      image: "/img/case-study-3.jpg",
    },
    {
      id: 4,
      title: "Case Study 4",
      image: "/img/case-study-4.jpg",
    },
    {
      id: 4,
      title: "Case Study 4",
      image: "/img/case-study-4.jpg",
    },
    {
      id: 4,
      title: "Case Study 4",
      image: "/img/case-study-4.jpg",
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
    <div className="bg-[url('../public/img/background-image-0.png')] py-16">
      <div className="mx-auto px-4 min-h-[58vh] pt-[4vh]">
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-[60px]">Case Studies</h2>
        
        <div className="relative">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[37px] bg-white rounded-xl p-3 mx-auto shadow-lg"
            aria-label="Previous case study"
          >
            <span className="sr-only">Previous</span>
            ❮
          </button>

          <div 
            ref={containerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none'
            }}
          >
            {caseStudies.map((study) => (
              <div 
                key={study.id}
                className="min-w-[300px] sm:min-w-[350px] flex-none snap-center"
              >
                <div className="bg-[#dbe7e7] rounded-lg overflow-hidden h-64 sm:h-72">
                  <div className="flex items-center justify-center h-full p-4">
                    <img
                      src={study.image || "/img/placeholder-logo.png"}
                      alt={study.title}
                      className="max-w-[70%] max-h-[70%] object-contain opacity-30"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[37px] bg-white rounded-xl p-3 mx-auto shadow-lg"
            aria-label="Next case study"
          >
            <span className="sr-only">Next</span>
             ❯
          </button>
        </div>
        
        {/* Progress bar */}
        <div className="mt-6 max-w-[140px] md:max-w-md  mx-auto h-1 bg-gray-300 rounded-full overflow-hidden">
          <div 
            className="h-full bg-teal-400 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
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