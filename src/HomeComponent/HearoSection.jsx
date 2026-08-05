import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { name: "Vivek Tanwar", desc: "A Freelance Web Designer", image: "/vivek.webp" },
    { name: "web designer based in India", desc: "", image: "/vivek.webp" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full first_bg' id='home'>
    <div className='max-w-7xl mx-auto p-4 md:p-20 '>
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <div className='flex-1 text-center md:text-left' >
          <p className='text-lg third_Text_Color mt-20 md:mt-0' >HELLO!</p>
          <h1 className='text-4xl md:text-7xl font-semibold second_Text_Color my-2 md:my-4 leading-tight'>
            <strong>I'm <span className='third_Text_Color'>{slides[currentSlide].name}</span></strong>
          </h1>
          <p className='text-2xl md:text-4xl second_Text_Color my-2 md:my-4'>{slides[currentSlide].desc}</p>
          <div className='flex gap-4 justify-center md:justify-start my-4'>
            <a href="#contact"> <button type='button' className='text-sm my-4 rounded-full third_bg px-4 py-2 font-semibold border border-gray-300'>
              Contact
            </button></a>
            <a href="#projects"> <button type='button' className='text-sm my-4 rounded-full second_Text_Color border border-gray-300 px-4 py-2 font-semibold'>
              MY WORKS
            </button></a>
          </div>
        </div>
        <div className='flex-1 mt-4 md:mt-0'>
          <img src={slides[currentSlide].image} alt='Vivek Tanwar' className='w-full md:w-[82%] md:h-160 mx-auto hidden md:block' />
        </div>
      </div>
      <div className='flex justify-center mt-4'>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
