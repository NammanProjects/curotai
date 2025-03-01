import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Common navigation component for all frames
  const FrameNav = ({ title }) => (
    <div className="h-8 sm:h-10 md:h-12 border-b flex items-center px-4 justify-between bg-gray-50">
      <div className="flex space-x-2">
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
      </div>
      <span className="text-gray-500 text-xs sm:text-sm font-medium">{title}</span>
      <span className="text-gray-400">•••</span>
    </div>
  );

  return (
    <section className="relative min-h-screen  w-full bg-white overflow-hidden">
      {/* Background Image */}

      <div className="absolute inset-0 bg-cover bg-[url('../public/img/background-image-1.png')] bg-center z-0 " />
      
      {/* Main Content Container */}
      <div className="flex items-center justify-center relative lg:mt-[50px] z-10 w-screen min-h-screen mt-[72px] xs:mt-0  sm:mx-0 mb-[10px] md:mb-0">
        
          <div className="flex flex-col lg:flex-row items-center justify-between gap-[80px] md:gap-15 lg:gap-7 h-full px-0 sm:px-1 lg:px-2 mr-[20px] sm:mr-0">
            {/* Left Content Column */}
            <motion.div 
              className="w-full lg:w-2/5 pt-10 lg:pt-0 order-2 lg:order-1 pl-4 sm:pl-6 lg:pl-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-lg mx-[40px] xs:mx-20 sm:mx-auto">
                <motion.h1 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight"
                  {...fadeInUp}
                >
                  Secure, Scalable and Specialized{' '}
                  <br></br>
                  <span className="">Annotations for AI</span>
                </motion.h1>
                
                <motion.p 
                  className="text-base sm:text-md text-gray-800 mb-8 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  We provide training data annotation to help you build consistent,
                  accurate, and efficient AI models. We combine zero-trust security
                  and compliance with cost-efficient volume scaling approaches to
                  provide specialized annotation services, delivered through our team
                  of domain subject experts.
                </motion.p>
                
                <motion.button
                  className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 text-white font-semibold rounded-xl w-full
                            hover:bg-teal-600 transform transition-all duration-300 shadow-lg font-sans text-center 
                            hover:shadow-xl active:scale-95 text-lg sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  GET IN TOUCH!
                </motion.button>
              </div>
            </motion.div>

            {/* Right Content Column - Stacked Frames */}
            <motion.div 
              className="w-full lg:w-3/5 h-1/2 flex items-center justify-center sm:pt-0 lg:pt-0 order-1 lg:order-2 "
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="ml-[100px] mt-[45px] lg:mt-0 relative w-[85vw] h-[48.7vw] sm:w-[75vw] sm:h-[43vw] md:w-[65vw] md:h-[37.2vw] lg:w-[55vw] lg:h-[31.5vw] xl:w-[850px] xl:h-[487px]"
                   style={{ maxWidth: '850px', maxHeight: '487px' }}>
                
                {/* Main Frame (Top level, least protrusion) */}
                <div 
                  className="absolute top-0 -left-[40px] w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[440px] max-w-[793px]"
                  style={{ zIndex: 30 }}
                >
                  <FrameNav title="Drone_001" />
                  <div className="relative h-[calc(100%-2rem)] sm:h-[calc(100%-2.5rem)] max-h-[400px] max-w-[793px]">
                    <div className="absolute inset-4 border-2 border-dashed border-white/50 rounded-xl z-20" />
                    <video 
                      className="w-full h-full object-cover"
                      src="/img/Annotation.mp4"
                      autoPlay
                      muted
                      loop
                    />
                  </div>
                </div>

                {/* Middle Frame (Medium protrusion) */}
                <div 
                  className="absolute top-[35px] -left-[60px] w-full h-full bg-green-200/50 rounded-2xl shadow-xl overflow-hidden max-h-[440px] max-w-[793px]"
                  style={{
                    transform: 'scale(0.99)',
                    zIndex: 20
                  }}
                >
                  <FrameNav title="Layer_002" />
                  <div className="relative h-[calc(100%-2rem)] sm:h-[calc(100%-2.5rem)]">
                    <div className="absolute inset-4 border-2 border-dashed border-white/40 rounded-xl" />
                  </div>
                </div>

                {/* Bottom Frame (Most protrusion) */}
                <div 
                  className="absolute top-[70px] -left-[80px] w-full h-full bg-green-100/40 rounded-2xl shadow-lg overflow-hidden max-h-[440px] max-w-[793px]"
                  style={{
                    transform: 'scale(0.98)',
                    zIndex: 10
                  }}
                >
                  <FrameNav title="Layer_003" />
                  <div className="relative h-[calc(100%-2rem)] sm:h-[calc(100%-2.5rem)]">
                    <div className="absolute inset-4 border-2 border-dashed border-white/30 rounded-xl" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        
      </div>
    </section>
  );
};

export default HeroSection;