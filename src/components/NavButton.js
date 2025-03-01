// NavButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavButton = ({ text, to = '/', currentPath }) => {
  const isActive = currentPath === to || 
                  (currentPath.startsWith(to) && to !== '/');
                  
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Link
        to={to}
        className={`relative text-white text-lg font-normal h-full transition-all duration-300 
                   hover:drop-shadow-white group ${isActive ? 'font-medium' : ''}`}
      >
        {text}
        <span 
          className={`absolute -bottom-1 left-1/2 h-[2px] bg-white`} 
        />
      </Link>
    </motion.div>
  );
};

export default NavButton;