import React from 'react'

const SkillSection = () => {
    const skill = [
        {
            gaps:"md:gap-[80%] gap-[70%]",
            skills:"HTML5",
            percentage:"95%",
            width:"w-[95%]",
        },
        {
            gaps:"md:gap-[50%] gap-[40%]",
            skills:"CSS3",
            percentage:"60%",
            width:"w-[60%]",
        },
        {
            gaps:"md:gap-[40%] gap-[30%]",
            skills:"JavaScript",
            percentage:"60%",
            width:"w-[60%]",
        },
        {
            gaps:"md:gap-[50%] gap-[35%]",
            skills:"Bootstrap5",
            percentage:"70%",
            width:"w-[70%]",
        },
        {
            gaps:"md:gap-[70%] gap-[60%]",
            skills:"ReactJS",
            percentage:"85%",
            width:"w-[85%]",
        },
        {
            gaps:"md:gap-[50%] gap-[40%]",
            skills:"TailwindCSS",
            percentage:"75%",
            width:"w-[75%]",
        },
        // {
        //     skills:"",
        //     percentage:"",
        //     width:"",
        // },
        
    ]

    return (
        <>
            <div className='w-full first_bg'>
                <div className='max-w-7xl mx-auto p-4 sm:p-8 md:p-20'>
                    <div className='text-center'>
                        <h2 className='text-8xl font-bold text-gray-900 md:block hidden'><strong>Skills</strong></h2>
                        <p className='text-5xl second_Text_Color font-bold md:mt-[-95px]' id='skills'><strong>My Skills</strong></p>
                        <p className='text-gray-400 text-lg  md:max-w-4xl mx-auto my-4 md:my-9'>Skilled in React.js and modern frontend technologies, focused on building responsive, high-performance, and user-friendly web applications.</p>
                    </div>
                    <div className='flex flex-wrap gap-[2%] animate-box'>
                        {skill.map((item, index) => (
                            <div className='md:w-[49%] w-full px-6  progress-wrap ftco-animate' key={index}>
                            <div className= {`flex  ${item.gaps}`}>
                                <h3 className='second_Text_Color'><strong>{item.skills}</strong></h3>
                                <p className='second_Text_Color'><strong>{item.percentage}</strong></p>
                                </div>
                                <div className=" w-full h-3 my-2  bg-gray-900 rounded-sm">
                                    <div className={`third_bg  h-3 rounded-sm ${item.width}`} >
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillSection