import React from 'react'

const ServiceSection = () => {
  const cards = [
    {
      icons:"bi bi-css",
      title:"Website Design",
    },
    {
      icons:"bi bi-javascript",
      title:"Full Stack Development",
    },
    {
      icons:"bi bi-slack",
      title:"Social Media Marketing",
    },
    // {
    //   icons:"",
    //   title:"",
    // },
    // {
    //   icons:"",
    //   title:"",
    // },
  ]
  return (
    <>
        <div className='w-full first_bg'>
            <div className='max-w-7xl mx-auto p-4 sm:p-8 md:p-20'>
            <div className='text-center'>
                <h2 className='text-8xl font-bold text-gray-900 md:block hidden'><strong>Services</strong></h2>
                <p className='text-6xl second_Text_Color font-bold md:mt-[-100px]' id='services'><strong>Service</strong></p>
                <p className='text-gray-400 text-lg  md:max-w-4xl mx-auto my-4 md:my-8'>Offering frontend development services including React.js applications, responsive web design, UI/UX implementation, and performance optimization.</p>
            </div>

            <div className='flex flex-wrap gap-[2%] '>
              {cards.map((item, index) => (
                <div key={index} className='lg:w-[32%] md:w-[49%] sm:w-full w-full rounded-sm bg-gray-900  py-15 my-4 text-center  '>
                  <p><i className={`third_Text_Color text-5xl ${item.icons}`}></i></p>
                  <p className='text-lg font-bold second_Text_Color  mt-4'>{item.title}</p>
                  <hr className='border w-[15%] mx-auto third_Text_Color mt-4'/>
                </div>
              ))}
            </div>
            </div>
        </div>
    </>
  )
}

export default ServiceSection