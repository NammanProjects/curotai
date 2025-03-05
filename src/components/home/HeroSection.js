import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const [dashOffset, setDashOffset] = useState(0);
  
  // Animation for the dotted frame - making the dots flow in different directions
  useEffect(() => {
    let animationTimer;
    let currentPhase = 'initial'; // 'initial', 'clockwise', 'counterclockwise', 'pause'
    let startTime = null;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      
      // Animation phases based on elapsed time (modulo 9000ms for looping)
      const loopTime = elapsedTime % 9000;
      
      // Phase 1: Initial pause (0-4s)
      if (loopTime < 3700) {
        if (currentPhase !== 'initial') {
          currentPhase = 'initial';
        }
        // No animation during initial pause
      } 
      // Phase 2: Clockwise flow (4-6s)
      else if (loopTime < 5700) {
        if (currentPhase !== 'clockwise') {
          currentPhase = 'clockwise';
        }
        setDashOffset(prev => prev - 1); // Negative for clockwise (SVG default direction)
      } 
      // Phase 3: Counterclockwise flow (6-7.5s)
      else if (loopTime < 7200) {
        if (currentPhase !== 'counterclockwise') {
          currentPhase = 'counterclockwise';
        }
        setDashOffset(prev => prev + 1); // Positive for counterclockwise
      }
      // Phase 4: Pause (7.5-9s)
      else {
        if (currentPhase !== 'pause') {
          currentPhase = 'pause';
        }
        // No animation during final pause
      }
      
      animationTimer = requestAnimationFrame(animate);
    };
    
    animationTimer = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationTimer);
    };
  }, []);

  // Main frame navigation component
  const FrameNav = ({ title }) => (
    <div className="h-8 sm:h-10 md:h-12 border-b flex items-center px-4 justify-between bg-gray-50/90 backdrop-blur-sm">
      <div className="flex space-x-2">
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
      </div>
      <span className="text-gray-500 text-xs sm:text-sm font-medium">{title}</span>
      <span className="text-gray-400">•••</span>
    </div>
  );
  
  // Empty frame navigation (no buttons) for layered windows
  const EmptyFrameNav = ({ title }) => (
    <div className="h-8 sm:h-10 md:h-12 border-b flex items-center px-4 justify-between bg-gray-100/70 backdrop-blur-sm border-[1.5px] border-b-gray-300">
      <div></div>
      <span className="text-gray-500 text-xs sm:text-sm font-medium">{title}</span>
      <span className="text-gray-400">•••</span>
    </div>
  );

  return (
    <section className="relative min-h-screen md:min-h-[calc(100vh-64px)] lg:h-[calc(100vh-64px)] w-full bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-[url('../public/img/background-image-1.png')] bg-center z-0" />
      
      {/* Main Content Container */}
      <div className="flex items-center justify-center relative z-10 w-screen min-h-screen xs:mx-0 md:mt-0 mt-[60px] pb-[50px] md:pb-[60px] sm:pb-[20px] md:mb-0">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[50px] md:gap-15 lg:gap-15 h-full px-0 sm:px-1 lg:px-2 mr-[20px] sm:mr-0">
          {/* Left Content Column */}
          <motion.div 
            className="w-full lg:w-2/5 pt-10 lg:pt-0 order-2 lg:order-1 pl-4 sm:pl-6 lg:pl-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-lg mx-[30px] xs:mx-[35px] sm:mx-auto">
            <motion.button
                className="inline-flex items-center justify-center  py-[5px] pr-3 border-[1.5px] border-teal-500 text-black text-sm font-semibold rounded-xl mb-[30px]
                          transform transition-all duration-300 shadow-lg font-sans text-center active:scale-95 sm:text-lg"
              >
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400 mr-2 ml-3"></div>
                Zero Trust-Security
              </motion.button>
              <motion.h1 
                className="text-2xl sm:text-3xl lg:text-[30px] xl:text-[45px] font-bold text-black mb-6 leading-tight"
                {...fadeInUp}
              >
                Secure, Scalable{' '}
                <br></br>
                <div className="md:mt-5">Annotations for AI</div>
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
              <div className='flex flex-row gap-2'>
              <motion.button
                className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 text-white text-md font-semibold rounded-xl w-full
                          hover:bg-teal-600 transform transition-all duration-300 shadow-lg font-sans text-center 
                          hover:shadow-xl active:scale-95 sm:text-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Know More
              </motion.button>
              <motion.button
                className="inline-flex items-center justify-center px-6 py-3 bg-[#C1DBD8] text-[#284A4E] font-semibold rounded-xl w-full
                          transform transition-all duration-300 shadow-lg font-sans text-center 
                          hover:shadow-xl active:scale-95 text-md sm:text-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Contact us
              </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Content Column - Stacked Frames */}
          <motion.div 
            className="w-full lg:w-3/5 h-1/2 flex items-center justify-center sm:pt-0 lg:pt-0 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="ml-[100px] mt-[45px] lg:mt-0 relative w-[90vw] h-[35.7vh] sm:w-[90vw] sm:h-[43vw] md:w-[65vw] md:h-[37.2vw] lg:w-[55vw] lg:h-[31.5vw] xl:w-[733px] xl:h-[487px] "
                 style={{ maxWidth: '850px', maxHeight: '487px' }}>
              
              {/* Bottom Frame (Most protrusion, lowest z-index) */}
              <div 
                className="absolute top-[20px] -left-[60px] xs:top-[44px] xs:-left-[84px] w-full h-full rounded-2xl overflow-hidden border-[1.5px] border-gray-300 max-h-[440px] max-w-[733px]"
                style={{
                  transform: 'scale(0.98)',
                  zIndex: 10,
                  background: 'rgba(255, 255, 255, 0.35)',
                  backdropFilter: 'blur(5px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}
              >
                <EmptyFrameNav title="Layer_003" />
                <div className="relative h-[calc(100%-2rem)] sm:h-[calc(100%-2.5rem)]">
                </div>
              </div>

              {/* Middle Frame (Medium protrusion, middle z-index) */}
              <div 
                className="absolute top-[10px] -left-[50px] xs:top-[22px] xs:-left-[62px] w-full h-full rounded-2xl border-[1.5px] border-gray-300 overflow-hidden max-h-[440px] max-w-[733px]"
                style={{
                  transform: 'scale(0.99)',
                  zIndex: 20,
                  background: 'rgba(255, 255, 255, 0.55)',
                  backdropFilter: 'blur(5px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)'
                }}
              >
                <EmptyFrameNav title="Layer_002" />
                <div className="relative h-[calc(100%-2rem)] sm:h-[calc(100%-2.5rem)]">
                </div>
              </div>

              {/* Main Frame (Top level, highest z-index) */}
              <div 
                className="absolute top-0 -left-[20px] xs:-left-[40px] w-full h-full rounded-2xl overflow-hidden max-h-[440px] max-w-[733px]"
                style={{ 
                  zIndex: 30,
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
                }}
              >
                <FrameNav title="Drone_001" />
                <div className="relative h-[calc(100%-2rem)] sm:h-[calc(100%-2.5rem)] max-h-[400px] max-w-[793px]">
                  {/* Dotted frame using SVG for better dash animation control */}
                  <div 
                    className="absolute inset-0 p-4 pt-3 sm:pb-5 z-20"
                    style={{ pointerEvents: 'none' }}
                  >
                    <svg 
                      width="100%" 
                      height="100%" 
                      className="rounded-lg"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="none"
                        stroke="rgba(231, 246, 244, 0.9)"
                        strokeWidth="5"
                        strokeDasharray="15 10"
                        strokeDashoffset={dashOffset}
                        rx="10"
                        ry="10"
                      />
                    </svg>
                  </div>
                  
                  {/* Video content */}
                  <video 
                    className="w-full h-full object-cover"
                    src="/img/Annotation.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
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