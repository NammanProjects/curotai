import React, { useRef, useState, useEffect } from 'react';

const FeaturedArticles = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredArticle, setHoveredArticle] = useState(null);
  
  const articles = [
    {
      id: 1,
      title: "Stylus-Based Annotation Leads to Superior AI Training Data",
      image: "/img/handshake.png",
      readingTime: 5
    },
    {
      id: 2,
      title: "Why Stylus-Based Annotation Leads to Superior AI Training Data",
      image: "/img/stylus.png",
      readingTime: 5
    },
    {
      id: 3,
      title: "Why Stylus-Based Annotation Leads to Superior AI Training Data",
      image: "/img/office.png",
      readingTime: 5
    },
    {
      id: 4,
      title: "Why Stylus-Based Annotation Leads to Superior AI Training Data",
      image: "/img/ai-transform.jpg",
      readingTime: 5
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
      <div className="mx-auto px-2">
        <h2 className="text-4xl md:text-5xl font-bold text-[#C6E7E2] text-center mb-16">Featured Articles</h2>
        
        <div className="relative">
          <button 
            onClick={scrollLeft}
            className="absolute left-[10px] top-1/2 -translate-y-1/2 z-10 w-[37px] flex justify-center items-center bg-white/90 border-[1.5px] border-gray-300 rounded-2xl p-3 px-5 shadow-lg"
            aria-label="Previous testimonial"
          >
            <span className="sr-only">Previous</span>
            <div><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="22px" width="16px" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg></div>
          </button>

          <div 
            ref={containerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar mb-14 py-4 px-10"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none'
            }}
          >
            {articles.map((article) => (
              <div 
                key={article.id}
                className="w-[85vw] sm:w-[91vw] md:w-[460px] flex-none snap-center cursor-pointer"
                onMouseEnter={() => setHoveredArticle(article.id)}
                onMouseLeave={() => setHoveredArticle(null)}
              >
                <div className="rounded-2xl overflow-hidden h-[300px] shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <div className="relative h-[75%] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover brightness-[0.85] filter"
                    />
                    {/* Reading time badge - changes to white on hover */}
                    <div className={`absolute top-4 right-4 ${hoveredArticle === article.id ? 'bg-white' : 'bg-[#C6E7E2]'} backdrop-blur-sm rounded-full flex items-center px-[11px] py-[6px] transition-colors duration-300`}>
                      <svg className="w-4 h-4 mr-1 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span className="text-sm font-medium text-gray-700">{article.readingTime} min</span>
                    </div>
                  </div>
                  {/* Title area - changes to white on hover */}
                  <div 
                    className={`text-[#284A4E] h-[25%] flex ${hoveredArticle === article.id ? 'bg-white' : 'bg-[#C6E7E2]'} transition-colors duration-300 items-center p-5`}
                  >
                    <h3 className="text-base md:text-[18px] font-medium leading-tight">{article.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={scrollRight}
            className="absolute right-[10px] top-1/2 -translate-y-1/2 z-10 w-[37px] flex justify-center items-center bg-white/90 border-[1.5px] border-gray-300 rounded-2xl p-3 px-5 shadow-lg"
            aria-label="Next testimonial"
          >
            <span className="sr-only">Next</span>
            <div><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="22px" width="16px" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></div>
          </button>
        </div>
        
        {/* Progress indicator */}
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