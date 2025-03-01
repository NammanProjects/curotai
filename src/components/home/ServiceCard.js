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
      className="w-[340px] bg-white rounded-[24px] shadow-lg transform transition-all duration-300 hover:shadow-2xl relative overflow-hidden cursor-pointer"
    >
      {/* Default State */}
      <motion.div
        animate={{ opacity: isActive ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="px-4 pt-4"
      >
        <motion.h2 
          variants={contentVariants}
          className="text-2xl font-bold text-[#203e40] mb-4"
        >
          {title}
        </motion.h2>
        <motion.div 
          variants={contentVariants}
          className="overflow-hidden rounded-[24px] mb-4"
        >
          <div 
            style={{ backgroundImage: `url(${image})` }} 
            className="w-full h-[385px] md:h-[485px] bg-cover bg-center rounded-[24px]"
          />
        </motion.div>
      </motion.div>

      {/* Active State (Hover on Desktop, Click on Mobile) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-[#e8f4f3] rounded-[24px] flex flex-col items-center justify-start p-8"
      >
        <h2 className="text-2xl font-bold text-[#DAA520] mb-6">{title}</h2>
        <p className="text-[#203e40] text-lg leading-relaxed mb-8 text-center">
          Our annotators focus on specific use cases and perfect their craft. This ensures greater accuracy and deeper understanding for every project.
        </p>
        <div className="mt-auto">
          <button className="bg-[#203e40] text-white text-lg font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#162b2d] inline-flex items-center group">
            Read More 
            <span className="ml-3 text-2xl transform transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;