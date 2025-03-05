import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, image, index }) => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.9,
      rotate: -2
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
        delay: index * 0.1
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.2 + index * 0.1,
        duration: 0.5
      }
    }
  };

  const handleInteraction = () => {
    if (isMobile) {
      setIsActive(!isActive);
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      whileHover={!isMobile ? { y: -10 } : {}}
      onHoverStart={() => !isMobile && setIsActive(true)}
      onHoverEnd={() => !isMobile && setIsActive(false)}
      onClick={handleInteraction}
      className="w-full sm:w-[160px] md:w-[280px] lg:w-[320px] lg:min-h-[500px] bg-white rounded-[24px] shadow-lg transform transition-all duration-300 hover:shadow-2xl relative overflow-hidden cursor-pointer"
    >
      {/* Default State */}
      <motion.div
        animate={{ opacity: isActive ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="px-3 sm:px-4 pt-3 sm:pt-4"
      >
        <motion.h2 
          variants={contentVariants}
          className="text-xl sm:text-xl md:text-2xl font-bold text-[#203e40] mb-3 sm:mb-4 px-1"
        >
          {title}
        </motion.h2>
        <motion.div 
          variants={contentVariants}
          className="overflow-hidden rounded-[20px] sm:rounded-[24px] mb-3 sm:mb-4"
        >
          <div 
            style={{ backgroundImage: `url(${image})` }} 
            className="w-full h-[215px] sm:h-[200px] md:h-[320px] lg:h-[425px] bg-cover bg-center rounded-[20px] sm:rounded-[24px]"
          />
        </motion.div>
      </motion.div>

      {/* Active State (Hover on Desktop, Click on Mobile) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-[#e8f4f3] rounded-[24px] flex flex-col items-center justify-start p-3 sm:p-4 md:p-6 lg:p-8"
      >
        <h2 className="text-xl sm:text-xl md:text-2xl font-bold text-[#DAA520] mb-2 sm:mb-3 md:mb-6">{title}</h2>
        <p className="text-[#203e40] text-sm sm:text-sm md:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-center">
          Our annotators focus on specific use cases and perfect their craft. This ensures greater accuracy and deeper understanding for every project.
        </p>
        <div className="mt-auto">
          <button className="bg-[#203e40] text-white text-sm sm:text-sm md:text-base lg:text-lg font-medium px-3 sm:px-4 md:px-5 lg:px-6 py-2 md:py-3 rounded-lg transition-all duration-300 hover:bg-[#162b2d] inline-flex items-center group">
            Read More 
            <span className="ml-2 sm:ml-2 md:ml-3 text-lg sm:text-xl md:text-2xl transform transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;