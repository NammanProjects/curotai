import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const AnnotationServices = () => {
  const services = [
    { 
      title: "Segmentation", 
      image: "/img/box1.png",
      title2:"Precision for Object Separation"
    },
    { 
      title: "Keypoint", 
      image: "/img/box2.png",
      title2:"Precision Mapping for Details"
    },
    { 
      title: "Polygon", 
      image: "/img/box3.png",
      title2:"Custom Shapes For Irregularity"
    },
    { 
      title: "Bounding Box", 
      image: "/img/box4.png",
      title2:"Versatility in Object Detection"
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
    <div className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-[46px] bg-[url('../public/img/background-image-0.png')] bg-cover bg-center overflow-hidden min-h-[76vh]">
      <div className="md:max-w-screen-xl w-auto lg:px-[25px] xl:px-0 mx-auto text-center mb-6 sm:mb-[30px]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.5, 
            ease: "easeOut"
          }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#203e40]"
        >
          Our Services
        </motion.h1>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-y-[50px]  mt-8 sm:mt-10 md:mt-[60px] justify-items-center"
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