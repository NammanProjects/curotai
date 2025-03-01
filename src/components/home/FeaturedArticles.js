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
      <div className=" mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#C6E7E2] text-center mb-16">Featured Articles</h2>
        
        <div className="relative">
          <button 
            onClick={scrollLeft}
            className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg h-12 w-12 flex items-center justify-center"
            aria-label="Previous article"
          >
            <span className="sr-only">Previous</span>
            ❮
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
                className="w-[469px] flex-none snap-center"
              >
                <div className="rounded-3xl overflow-hidden h-[318px] border-2 border-[#2c4547]">
                  <div className="relative h-[70%] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-2  text-white h-[30%] flex items-center">
                    <h3 className="text-base md:text-lg font-medium leading-tight">{article.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={scrollRight}
            className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg h-12 w-12 flex items-center justify-center"
            aria-label="Next article"
          >
            <span className="sr-only">Next</span>
            ❯
          </button>
        </div>
        
        {/* Progress bar */}
        <div className="mt-8 max-w-[140px] lg:max-w-md mx-auto h-1.5 bg-gray-400 rounded-full overflow-hidden flex">
          <div 
            className="h-full bg-teal-400 rounded-full transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          ></div>
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