import React from 'react'
import { Link } from 'react-router'

const AboutSection = () => {
    const aboutInfo = [
    { label: 'Name', value: 'Vivek Tanwar' },
    { label: 'Date of birth', value: 'November 30, 2001' },
    { label: 'Address', value: 'B-4/250 Pocket-1 Sector-20 Rohini Delhi' },
    { label: 'Zip code', value: '110086' },
    { label: 'Email', value: 'vivektanwer648@gmail.com' },
    { label: 'Phone', value: '+91 9310479781' },
  ];
  return (
    <>
    <div className='w-full first_bg' id='about'>
        <div className='max-w-7xl mx-auto p-4 sm:p-8 md:p-20 '>
            <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className='flex-1 mb-6 md:mb-0 hidden md:block'>
                    <img src='vivek-2.webp' className='w-full md:w-[80%] mx-auto'/>
                </div>
                <div className='w-full md:w-1/2 flex flex-col'>
                    <h1 className="text-5xl sm:text-6xl md:text-8xl text-gray-900 hidden md:block" ><strong>About</strong></h1>
                    <div className='md:px-4'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl second_Text_Color mt-2 md:mt-[-90px]' ><strong>About Me</strong></h2>
                    <p className='text-gray-400 my-4 md:my-8 text-justify text-sm sm:text-base'>Hi, I’m Vivek — a Frontend Developer with 2+ year of experience building responsive and high-performance websites using React.js, JavaScript, HTML, CSS, and Tailwind CSS. I enjoy creating clean UI, reusable components, and optimizing performance to deliver smooth user experiences.</p>
                    
                    <div>
                        <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                            {aboutInfo.map((item, index) => (
                                <li key={index} className="flex">
                                    <span className="second_Text_Color font-bold w-1/3">{item.label}:</span>
                                    <span className='w-1/2'>{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='my-10 md:my-10'>
                        <a
                            href="/VivekV2.pdf"
                            download="Vivek_Tanwar_CV.pdf" 
                            className='text-sm rounded-full third_bg px-6 py-4 font-semibold border border-gray-300'>
                            Download CV
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default AboutSection
