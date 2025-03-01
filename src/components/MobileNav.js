// MobileNav.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const navItems = [
    { text: "Home", to: "/" },
    { text: "Case Study", to: "/case-study" },
    { text: "About Us", to: "/about" }
  ];

  const isActive = (path) => {
    return location.pathname === path || 
           (location.pathname.startsWith(path) && path !== '/');
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-[#2d5254] transition-colors duration-300"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-[#203e40] z-50"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <div className="h-[60px] w-[120px] bg-[('../public/img/backbutton.svg')] bg-cover bg-center"></div>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-[#2d5254] transition-colors duration-300"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <nav className="flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <motion.div key={index} whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                    <Link
                      to={item.to}
                      className={`text-white text-xl relative group ${
                        isActive(item.to) ? 'font-medium' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.text}
                      <span className={`absolute -bottom-1 left-0 h-[2px] bg-white 
                                    transition-all duration-300 group-hover:w-full ${
                                      isActive(item.to) ? 'w-full' : 'w-0'
                                    }`} />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div className="mt-8">
                <motion.a
                  href="#contactUS"
                  className="block w-full text-center bg-white text-[#203e40] font-medium 
                           rounded-[16px] px-6 py-3 shadow-[0_0_10px_rgba(255,255,255,0.2)]
                           hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]
                           transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GET IN TOUCH!
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;