import React, { useRef, useState, useEffect } from 'react';

const TestimonialCarousel = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: "Johnathon Dome",
      title: "Data Engineer, DJI",
      image: "/api/placeholder/80/80",
      country: "de",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante."
    },
    {
      id: 2,
      name: "Johnathon Dome",
      title: "Data Engineer, DJI",
      image: "/api/placeholder/80/80",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante."
    },
    {
      id: 3,
      name: "Johnathon Dome",
      title: "Data Engineer, DJI",
      image: "/api/placeholder/80/80",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante."
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
      containerRef.current.scrollBy({ left: -700, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 700, behavior: 'smooth' });
    }
  };

  return (
    <div className="h-[72vh] bg-cover bg-[url('../public/img/background-image-0.png')] bg-center  ">
      <div className="mb-auto px-4 h-full flex flex-col justify-center ">
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#203e40]">
            Why Trust us?
          </h1>
        </div>
        <div className="relative">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg"
            aria-label="Previous testimonial"
          >
            ❮
          </button>

          <div 
            ref={containerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              marginLeft: '30px',
              marginRight:"30px",
              margin: '0 auto'
            }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="max-w-[450px] md:max-w-[700px] h-[300px] flex-none snap-center bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      {testimonial.country === 'de' && (
                        <span className="text-2xl">🇩🇪</span>
                      )}
                    </div>
                    <p className="text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed line-clamp-6">{testimonial.text}</p>
              </div>
            ))}
          </div>

          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg"
            aria-label="Next testimonial"
          >
            ❯
          </button>

          {/* Continuous Progress Bar */}
          <div className="mt-8 w-48 h-1 mx-auto bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-teal-500 transition-all duration-300"
              style={{ 
                width: `${scrollProgress}%`
              }}
            />
          </div>
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

export default TestimonialCarousel;