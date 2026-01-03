import React from 'react'
import { Link } from 'react-router'

const ProjectSection = () => {
  return (
    <>
        <div className='w-full first_bg'>
            <div className='max-w-7xl mx-auto p-4 sm:p-8 md:p-20'>
                <div className='text-center'>
                        <h2 className='text-8xl font-bold text-gray-900 md:block hidden'><strong>Projects</strong></h2>
                        <p className='text-5xl second_Text_Color font-bold md:mt-[-95px]' id='projects'><strong>Our Projects</strong></p>
                        <p className='text-gray-400 text-lg  md:max-w-4xl mx-auto my-4 md:my-9'>We have delivered multiple responsive and performance-optimized websites using React.js and modern frontend technologies, focusing on clean UI, scalability, and user experience.</p>
                    </div>

                    <div className='flex flex-wrap gap-8 my-8'>
                        <div className='lg:flex-2 w-full  '>
                            <Link to='https://cloudgateway.in/'>
                            <img src='/cloud-gateway.webp' className='w-full lg:h-80 object-cover  bg-gray-900 third_bg_hover'/>
                        </Link></div>
                        
                        <div className='lg:flex-1 w-full  bg-gray-900'>
                        <Link to='https://rcsbrandrise.com/'>
                            <img src='/rcs-brand-rise.webp' className='w-full lg:h-80 object-cover bg-gray-900 third_bg_hover'/>
                        </Link></div>
                    </div>
                    <div className='flex flex-wrap gap-8 my-8'>
                        <div className='lg:flex-2 w-full  bg-gray-900'>
                            <Link to='https://sdgmtech.in/'>
                            <img src='/sdgm-technologies.webp' className='w-full lg:h-80 object-cover bg-gray-900 third_bg_hover'/>
                        </Link></div>
                        <div className='lg:flex-1 w-full  bg-gray-900'>
                            <Link to='https://www.brightpathschool.com/'>
                            <img src='/rcs-brand-rise.webp' className='w-full lg:h-80 object-cover bg-gray-900 third_bg_hover'/>
                        </Link></div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default ProjectSection