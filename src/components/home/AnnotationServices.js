import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const AnnotationServices = () => {
  const services = [
    { 
      title: "Segmentation", 
      image: "/img/box1.png",
    },
    { 
      title: "Keypoint", 
      image: "/img/box2.png",
    },
    { 
      title: "Polygon", 
      image: "/img/box3.png",
    },
    { 
      title: "Bounding Box", 
      image: "/img/box4.png",
    }
  ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-20 px-[46px] bg-[url('../public/img/background-image-0.png')] bg-cover bg-center overflow-hidden min-h-[81vh]">
      <div className="max-w-screen mx-auto text-center mb-[30px]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.5, 
            ease: "easeOut"
          }}
          className="text-4xl md:text-5xl font-bold text-[#203e40]"
        >
          Our Services
        </motion.h1>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-6 mt-[60px]"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AnnotationServices;