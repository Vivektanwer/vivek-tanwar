import React, { useState } from 'react';
import { Link } from 'react-router';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the mobile menu after clicking a link
  };

  return (
    <div className="w-full bg-black text-white p-4 md:px-20">
      <div className="flex justify-between items-center  mx-auto">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-yellow-400"><strong>VIVEK TANWAR</strong></Link>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-lg">
          <Link to="/" className="font-semibold relative group">
            Home
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
          <a href="#about" className="font-semibold relative group">
            About
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a href="#resume" className="font-semibold relative group">
            Resume
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a href="#services" className="font-semibold relative group">
            Services
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a href="#skills" className="font-semibold relative group">
            Skills
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a href="#projects" className="font-semibold relative group">
            Projects
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a href="#contact" className="font-semibold relative group">
            Contact
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <i className="bi bi-list" style={{ fontSize: '24px' }}></i>
          </button>
        </div>
      </div>
      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-black text-white p-4">
          <div className="flex flex-col gap-4">
            <Link to="/" onClick={handleLinkClick} className="font-semibold relative group">
              Home
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
            <a href="#about" onClick={handleLinkClick} className="font-semibold relative group">
              About
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#resume" onClick={handleLinkClick} className="font-semibold relative group">
              Resume
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#services" onClick={handleLinkClick} className="font-semibold relative group">
              Services
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#skills" onClick={handleLinkClick} className="font-semibold relative group">
              Skills
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#projects" onClick={handleLinkClick} className="font-semibold relative group">
              Projects
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#contact" onClick={handleLinkClick} className="font-semibold relative group">
              Contact
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;