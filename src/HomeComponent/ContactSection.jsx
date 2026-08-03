import React, { use } from 'react'
import { Link, useNavigate } from 'react-router'

const ContactSection = () => {

    const navigation = useNavigate();

    const contact = [
        {
            icons:"bi bi-geo-alt-fill",
            title:"ADDRESS",
            description:"B-4/250 Pocket-1 Sector-20 Rohini Delhi Near Sultanpuri C Block",
            url:"https://maps.app.goo.gl/fVpypuuFfYc4ZBfw8",
        },
        
        {
            icons:"bi bi-telephone-fill",
            title:"CONTACT NUMBER",
            description:"+91 9310479781",
            url:"tel:+919310479781",
        },
        {
            icons:"bi bi-envelope-fill",
            title:"EMAIL ADDRESS",
            description:"vivektanwer648@gmail.com",
            url:"mailto:vivektanwer648@gmail.com",
        },
        {
            icons:"bi bi-linkedin",
            title:"LINKEDIN",
            description:"Vivek Tanwar",
            url:"https://www.linkedin.com/in/vivek-tanwar-developer/",
        },
    ]
    
  return (
    <>
        <div className='w-full first_bg' id='contact'>
            <div className='max-w-7xl mx-auto p-4 sm:p-8 md:p-20'>
            <div className='text-center'>
            <h2 className='text-8xl font-bold text-gray-900 md:block hidden'><strong>Contact</strong></h2>
            <p className='text-5xl second_Text_Color font-bold md:mt-[-95px]' ><strong>Contact Me</strong></p>
            <p className='text-gray-400 text-lg  md:max-w-2xl mx-auto my-4 md:my-9'>Feel free to reach out for project discussions, collaborations, or any frontend development opportunities. I’m always open to new ideas and challenges.</p>
            </div>

            
            
            
            <div className='flex flex-wrap gap-2 '>
            {contact.map((item, index) => (
                <div key={index} className='text-center lg:w-[23.5%] md:w-[32%] sm:w-[49%] w-full py-4 px-8'>
                    <div className='rounded-full bg-gray-900 p-8 w-26 mx-auto' >
                        <i className={`third_Text_Color text-4xl ${item.icons}`} ></i>
                    </div>
                    <p className='text-xl my-8 second_Text_Color'>{item.title}</p>
                    <Link to={item.url} >
                    <p className='second_Text_Color text-lg  mx-auto' 
                    // onClick={() => navigation(item.url)}
                    >{item.description}</p>
                    </Link>
                </div>
                ))}
                </div>
          

                <div className='flex flex-wrap mt-20    '>
                    <div className='md:flex-1 w-full  bg-orange-200 '>
                    <div className='max-w-sm mx-auto'>
                        <img src="/vivek.webp" alt="Contact" className='w-full  mx-auto' style={{backgroundSize:'cover', backgroundRepeat:'no-repeat',}} />
                        </div>
                    </div>
                    <div className='md:flex-1 w-full bg-gray-200 '>
                    <div className=' md:p-15 p-8 flex flex-col gap-6 max-w-lg mx-auto '>
                        <input className=' second_bg p-4 rounded-md w-[100%]  border-2 border-gray-300' placeholder='Your Name ' type='name' />
                        <input className=' second_bg p-4  rounded-md w-[100%]  border-2 border-gray-300' placeholder='Your Email ' type='email' />
                        <input className=' second_bg p-4 rounded-md w-[100%]  border-2 border-gray-300' placeholder='Your Subject ' type='subject'/>
                        <textarea className=' second_bg p-4  rounded-md w-[100%] h-45  border-2 border-gray-300' placeholder='Your Message '  type='message' />
                        <button className='third_bg first_Text_Color p-4 rounded-full md:w-[40%] border-2 border-gray-300 hover:scale-105 duration-300' >Send Message</button>
                    </div>

                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default ContactSection
