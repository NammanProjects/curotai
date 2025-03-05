// Header.js
import React, { useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import MobileNav from './MobileNav';
import NavButton from './NavButton';

const Header = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showCaseStudyDropdown, setShowCaseStudyDropdown] = useState(false);
  const location = useLocation();
  
  const vh = typeof window !== 'undefined' ? window.innerHeight : 0;

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(32, 62, 64, 0.95)', 'rgba(32, 62, 64, 1)']
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY+170;
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
    { text: "Case Study", to: "/case-study", hasDropdown: true },
    { text: "Services", to: "/services" },
    { text: "About Us", to: "/about" }
  ];

  const caseStudyItems = [
    { text: "Case Study 1", to: "/case-study/1" },
    { text: "Case Study 2", to: "/case-study/2" },
    { text: "Case Study 3", to: "/case-study/3" },
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

  const handleNavItemHover = (index) => {
    setHoveredItem(index);
    // Only show dropdown for Case Study (index 1)
    if (index === 1) {
      setShowCaseStudyDropdown(true);
    } else {
      setShowCaseStudyDropdown(false);
    }
  };

  const handleNavItemLeave = () => {
    setHoveredItem(null);
    // Add a slight delay before hiding dropdown to make it easier to move cursor to dropdown
    setTimeout(() => {
      setShowCaseStudyDropdown(false);
    }, 300);
  };

  // Dropdown variants for animation
  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 }
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
              className="w-[90%] max-w-[1300px] rounded-[40px] px-5 bg-[#203e40]"
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
                    <div className="bg-[url('../public/img/Curota_logo_Dark.svg')] bg-cover bg-center h-8 w-8 ml-4"></div>
                    <div className="bg-[url('../public/img/curota-name-icon.png')] bg-cover bg-center h-5 w-[130px] md:h-6 md:w-[165px]  m-5 ml-0 "></div>
                  </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center h-[84px]">
                  <div className="flex items-center justify-between h-full relative w-[400px]">
                    {navItems.map((item, index) => (
                      <div 
                        key={item.to}
                        className="h-full flex items-center justify-center relative"
                        onMouseEnter={() => handleNavItemHover(index)}
                        onMouseLeave={handleNavItemLeave}
                      >
                        <NavButton text={item.text} to={item.to} currentPath={location.pathname} />
                        
                        {/* Case Study Dropdown */}
                        {item.hasDropdown && showCaseStudyDropdown && (
                          <AnimatePresence>
                            <motion.div
                              className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-lg overflow-hidden w-48 z-50"
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              variants={dropdownVariants}
                            >
                              {caseStudyItems.map((dropdownItem, idx) => (
                                <motion.div
                                  key={dropdownItem.to}
                                  variants={itemVariants}
                                  className="border-b border-gray-100 last:border-b-0"
                                >
                                  <Link 
                                    to={dropdownItem.to}
                                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#203e40] transition-colors duration-200 text-sm font-medium"
                                  >
                                    {dropdownItem.text}
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          </AnimatePresence>
                        )}
                      </div>
                    ))}
                    
                    {/* Animated indicator bar with manual positions and widths */}
                    <motion.div
                      className="absolute h-[10px] bg-white rounded-t-lg bottom-[-0px]"
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
                <MobileNav navItems={navItems} caseStudyItems={caseStudyItems} />
              </div>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Header;