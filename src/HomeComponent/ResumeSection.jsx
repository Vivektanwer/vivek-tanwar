import React from 'react'

const ResumeSection = () => {
const cards = [
    {
        date:"2023-2024",
        stream:"Full Stack Developer ",
        branch:"DSSD (Delhi School of Skill Development)",
        description:"I completed my Full Stack Developer course in 2024 from DSSD (Delhi School of Skill Development). This course enhanced my skills in front-end and back-end development, making me a more versatile web developer.",
    },
    {
        date:"2021-2024",
        stream:"Bachelor’s in Arts (Program)",
        branch:"Delhi University",
        description:"I graduated with a Bachelor’s in Arts (Program) in 2024. My studies have helped me develop strong problem-solving and creative thinking skills, which I apply to web development.",
    },
    {
        date:"2019-2020",
        stream:"12th (Arts)",
        branch:"Govt. Co-Ed Sarvodaya Vidyalaya",
        description:"I completed my 12th (Arts) in 2020 from Govt. Co-Ed Sarvodaya Vidyalaya under the CBSE board.",
    },
    {
        date:"2017-2018",
        stream:"10th class",
        branch:"INDRAPRASTHA CONVENT SCHOOL BEGUMPUR DELHI",
        description:"I completed my 10th in 2018 from INDRAPRASTHA CONVENT SCHOOL BEGUMPUR DELHI under the CBSE board.",
    },
]

  return (
    <>
        <div className='w-full first_bg'>
            <div className='max-w-7xl mx-auto p-4 sm:p-8 md:p-20'>
            <div className='text-center'>
                <h2 className='text-8xl font-bold text-gray-900 md:block hidden'>Resume</h2>
                <p className='text-6xl second_Text_Color font-bold md:mt-[-100px]' id='resume'>Resume</p>
                <p className='text-gray-400 text-lg  md:max-w-4xl mx-auto my-4 md:my-8'>Results-driven Frontend Developer with 2+ year of experience building responsive, high-performance web
applications using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS. Proven track record of delivering
4+ production websites with focus on performance optimization, SEO, and user experience. Strong problem-
solving abilities with expertise in component-based architecture and modern web development practices.</p>
            </div>

            <div className='flex flex-wrap gap-[2%]'> 
            {cards.map((item, index) => (
                <div className='md:w-[49%] rounded-lg bg-gray-900 px-10 py-8 my-4' key={index}>
                <p className='text-3xl font-bold third_Text_Color'>{item.date}</p>
                <p className='text-3xl second_Text_Color mt-4'>{item.stream}</p>
                <p className='text-gray-400 font-bold'>{item.branch}</p>
                <p className='text-lg text-gray-400 mt-6'>{item.description}</p>
                </div>
            ))}
            </div>

            
        </div>
        </div>
    </>
  )
}

export default ResumeSection