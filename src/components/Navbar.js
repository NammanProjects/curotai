// Header.js
import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import MobileNav from './MobileNav';
import NavButton from './NavButton';

const Header = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();
  const navRefs = useRef([]);
  
  const vh = typeof window !== 'undefined' ? window.innerHeight : 0;

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(32, 62, 64, 0.95)', 'rgba(32, 62, 64, 1)']
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY+108;
      if (currentScrollY >= vh) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, vh]);

  const navItems = [
    { text: "Home", to: "/" },
    { text: "Case Study", to: "/case-study" },
    { text: "Services", to: "/services" },
    { text: "About Us", to: "/about" }
  ];

  // Manual positions for each nav item
  const getNavItemPosition = (index) => {
    const positions = [
      0, // Home position (%)
      21, // Case Study position (%)
      54, // Services position (%)
      80.5  // About Us position (%)
    ];
    
    return positions[index] || 0;
  };

  // Get widths for each button
  const getButtonWidth = (index) => {
    const widths = [
      50, // Home width (px)
      100, // Case Study width (px)
      73, // Services width (px)
      78  // About Us width (px)
    ];
    
    return widths[index] || 70;
  };

  const getActiveIndex = () => {
    const activeItem = navItems.findIndex(item => item.to === location.pathname);
    return activeItem !== -1 ? activeItem : 0; // Default to Home if no match
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-5 w-full z-50"
        >
          <nav className="flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-[90%] max-w-[1300px] rounded-[40px] bg-[#203e40] p-6"
              style={{ backgroundColor }}
            >
              <div className="flex justify-between items-center">
                <Link to="/">
                  <motion.div
                    className="flex items-center gap-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="bg-[url('../public/img/Curota_logo_Dark.svg')] bg-cover bg-center h-9 w-9 ml-4"></div>
                    <div className="bg-[url('../public/img/curota-name-icon.png')] bg-cover bg-center h-6 w-[165px] "></div>
                  </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center h-full">
                  <div className="flex items-center justify-between h-full relative w-[400px]">
                    {navItems.map((item, index) => (
                      <div 
                        key={item.to}
                        className="h-full flex items-center justify-center"
                        onMouseEnter={() => setHoveredItem(index)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <NavButton text={item.text} to={item.to} currentPath={location.pathname} />
                      </div>
                    ))}
                    
                    {/* Animated indicator bar with manual positions and widths */}
                    <motion.div
                      className="absolute h-[10px] bg-white rounded-t-lg bottom-[-34px]"
                      animate={{ 
                        left: `${getNavItemPosition(hoveredItem !== null ? hoveredItem : getActiveIndex())}%`,
                        width: `${getButtonWidth(hoveredItem !== null ? hoveredItem : getActiveIndex())}px`
                      }}
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </div>
                  
                  <motion.a
                    href="#contactUS"
                    className="bg-white text-[#203e40] text-lg font-medium rounded-[16px] px-6 py-2.5 ml-8 
                             shadow-[0_0_10px_rgba(255,255,255,0.2)] 
                             hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]
                             transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GET IN TOUCH!
                  </motion.a>
                </div>

                {/* Mobile Navigation */}
                <MobileNav navItems={navItems} />
              </div>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Header;