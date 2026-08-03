import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleLinkClick();
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'services', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }

      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (section) => {
    const isActive = activeSection === section;
    return `font-semibold relative group ${
      isActive ? 'text-yellow-400' : 'text-white hover:text-yellow-400'
    }`;
  };

  // Perfect center expand underline
  const Underline = ({ isActive }) => (
    <span
      className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transition-transform duration-300 origin-center ${
        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
      }`}
    ></span>
  );

  return (
    <div className="w-full bg-black text-white p-4  md:px-20 fixed top-0 z-50">
      <div className="flex justify-between items-center mx-auto">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-yellow-400">
            <strong>VIVEK TANWAR</strong>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-lg">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className={getLinkClass('home')}>
            Home
            <Underline isActive={activeSection === 'home'} />
          </a>

          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className={getLinkClass('about')}
          >
            About
            <Underline isActive={activeSection === 'about'} />
          </a>

          <a
            href="#resume"
            onClick={(e) => scrollToSection(e, 'resume')}
            className={getLinkClass('resume')}
          >
            Resume
            <Underline isActive={activeSection === 'resume'} />
          </a>

          <a
            href="#services"
            onClick={(e) => scrollToSection(e, 'services')}
            className={getLinkClass('services')}
          >
            Services
            <Underline isActive={activeSection === 'services'} />
          </a>

          <a
            href="#skills"
            onClick={(e) => scrollToSection(e, 'skills')}
            className={getLinkClass('skills')}
          >
            Skills
            <Underline isActive={activeSection === 'skills'} />
          </a>

          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            className={getLinkClass('projects')}
          >
            Projects
            <Underline isActive={activeSection === 'projects'} />
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className={getLinkClass('contact')}
          >
            Contact
            <Underline isActive={activeSection === 'contact'} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <i className="bi bi-list" style={{ fontSize: '24px' }}></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black text-white p-4">
          <div className="flex flex-col gap-4">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className={getLinkClass('home')}>
              Home
              <Underline isActive={activeSection === 'home'} />
            </a>

            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className={getLinkClass('about')}
            >
              About
              <Underline isActive={activeSection === 'about'} />
            </a>

            <a
              href="#resume"
              onClick={(e) => scrollToSection(e, 'resume')}
              className={getLinkClass('resume')}
            >
              Resume
              <Underline isActive={activeSection === 'resume'} />
            </a>

            <a
              href="#services"
              onClick={(e) => scrollToSection(e, 'services')}
              className={getLinkClass('services')}
            >
              Services
              <Underline isActive={activeSection === 'services'} />
            </a>

            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, 'skills')}
              className={getLinkClass('skills')}
            >
              Skills
              <Underline isActive={activeSection === 'skills'} />
            </a>

            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className={getLinkClass('projects')}
            >
              Projects
              <Underline isActive={activeSection === 'projects'} />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className={getLinkClass('contact')}
            >
              Contact
              <Underline isActive={activeSection === 'contact'} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;