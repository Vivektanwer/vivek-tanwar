import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <>
        <div className=' w-full  first_bg'>
          <div className='p-4 sm:p-8 md:p-20'>
            <div className='flex flex-wrap md:gap-0 gap-4'>
              <div className='md:w-1/4 p-2'>
              <p className='text-2xl second_Text_Color font-semibold'><strong>About Us</strong></p>
              <p className='text-lg text-gray-400'>Hi, I’m Vivek — a Frontend Developer with 2+ year of experience building responsive and high-performance websites using React.js, JavaScript, HTML, CSS, and Tailwind CSS. I enjoy creating clean UI, reusable components, and optimizing performance to deliver smooth user experiences.</p>
              <div className='flex gap-4 mt-8'>
              <Link to={'https://www.linkedin.com/in/vivek-tanwar-developer/'}><div className='rounded-full p-4 w-17 text-center bg-gray-900'>
                <i className="text-2xl second_Text_Color bi bi-linkedin"></i>
              </div></Link>
              <Link to={'/'}><div className='rounded-full p-4 w-17 text-center bg-gray-900'>
                <i className="text-2xl second_Text_Color bi bi-facebook"></i>
              </div></Link>
              <Link to={'/'}><div className='rounded-full p-4 w-17 text-center bg-gray-900'>
                <i className="text-2xl second_Text_Color bi bi-instagram"></i>
              </div></Link>
              </div>
              </div>
              <div className='md:w-1/4 p-2'>
              <p className='text-2xl second_Text_Color font-semibold'><strong>Links</strong></p>
              <div className='mt-4 flex flex-col gap-2'>
              <a href={'#home'} className='text-lg text-gray-400 '> <i className="  bi bi-arrow-right font-bold"></i> Home</a>
              <a href={'#about'} className='text-lg text-gray-400 '> <i className="  bi bi-arrow-right font-bold"></i> About</a>
              <a href={'#services'} className='text-lg text-gray-400 '> <i className="  bi bi-arrow-right font-bold"></i> Services</a>
              <a href={'#projects'} className='text-lg text-gray-400 '> <i className="  bi bi-arrow-right font-bold"></i> Projects</a>
              <a href={'#contact'} className='text-lg text-gray-400 '> <i className="  bi bi-arrow-right font-bold"></i> Contact</a>
              </div>
              </div>
              <div className='md:w-1/4 p-2'>
              <p className='text-2xl second_Text_Color font-semibold'><strong>Services</strong></p>
              <div className='mt-4 flex flex-col gap-2'>
              <Link to={'/'} className='text-lg text-gray-400 '> <i className="  bi bi-arrow-right font-bold"></i> Web Design </Link>
              <Link to={'/'} className='text-lg text-gray-400 '> <i className="  bi bi-arrow-right font-bold"></i> Web Development </Link>
              <Link to={'/'} className='text-lg text-gray-400 '> <i className="  bi bi-arrow-right font-bold"></i> Social Media Marketing </Link>
              
              </div>
              </div>
              <div className='md:w-1/4 p-2'>
              <p className='text-2xl second_Text_Color font-semibold'><strong>Have a Questions?</strong></p>
              <div className='mt-4 flex flex-col gap-2'>
             <Link to={'/'} className='text-lg text-gray-400 '> <i className="  bi bi-geo-alt-fill font-bold"></i> 	B-4/250 Pocket-1 Sector-20 Rohini Delhi Near Sultanpuri C Block</Link>
             <Link to={'tel:9310479781'} className='text-lg text-gray-400 '> <i className="  bi bi-telephone-fill font-bold"></i> 	+91 9310479781</Link>
             <Link to={'mailto:vivektanwer648@gmail.com'} className='text-lg text-gray-400 '> <i className="  bi bi-envelope-fill font-bold"></i> vivektanwer648@gmail.com</Link>
             </div>
              </div>
            </div>
            <p className='text-center text-gray-400 mt-8 text-lg'>Copyright ©2026 All rights reserved | This Portfolio is made with <i className=" bi bi-heart-fill"></i> by Vivek Tanwar</p>
          </div>
        </div>
    </>
  )
}

export default Footer