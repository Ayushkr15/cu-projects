
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-secondary/80 backdrop-blur-md shadow-sm' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <RouterLink to="/" className="flex items-center text-xl font-bold">
            <span className="text-primary mr-1">CU</span> Projects
          </RouterLink>
          
          <div className="hidden md:flex items-center space-x-8">
            <ScrollLink
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-sm font-medium hover:text-primary cursor-pointer transition-colors"
            >
              Portfolio
            </ScrollLink>
            <ScrollLink
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-sm font-medium hover:text-primary cursor-pointer transition-colors"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="order"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn-premium px-5 py-2 text-sm"
            >
              Order Now
            </ScrollLink>
          </div>
          
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-secondary/95 backdrop-blur-md shadow-md py-4 px-4 animate-slide-down">
          <div className="flex flex-col space-y-3">
            <ScrollLink
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="py-2 text-sm font-medium hover:text-primary cursor-pointer transition-colors"
              onClick={handleNavigation}
            >
              Portfolio
            </ScrollLink>
            <ScrollLink
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="py-2 text-sm font-medium hover:text-primary cursor-pointer transition-colors"
              onClick={handleNavigation}
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="order"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="py-2 text-sm font-medium hover:text-primary cursor-pointer transition-colors"
              onClick={handleNavigation}
            >
              Order Now
            </ScrollLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
