import React, { useRef, useState, useEffect } from 'react';

const FeaturedArticles = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const articles = [
    {
      id: 1,
      title: "Data Security in AI: How Curota Ensures Privacy and Compliance",
      image: "/img/handshake.png",
    },
    {
      id: 2,
      title: "Why Stylus-Based Annotation Leads to Superior AI Training Data",
      image: "/img/stylus.png",
    },
    {
      id: 3,
      title: "How Specialized Data Annotation is Transforming AI Applications",
      image: "/img/office.png",
    },
    {
      id: 4,
      title: "How AI Transforms Business Operations",
      image: "/img/ai-transform.jpg",
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
    <div className="bg-[#1e3536] py-16">
      <div className="mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#C6E7E2] text-center mb-16">Featured Articles</h2>
        
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
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 px-10"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none'
            }}
          >
            {articles.map((article) => (
              <div 
                key={article.id}
                className="w-[91vw] md:w-[469px] flex-none snap-center"
              >
                <div className="rounded-3xl overflow-hidden h-[318px] border-2 border-[#2c4547]">
                  <div className="relative h-[70%] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-2 text-white h-[30%] flex items-center">
                    <h3 className="text-base md:text-lg font-medium leading-tight">{article.title}</h3>
                  </div>
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

export default FeaturedArticles;