import React from 'react'

const FreelancingSection = () => {
  return (
    <>
        <div
        className='w-full first_bg'
        style={{ backgroundImage: `url('/bg-image-68d543cee40f4.webp')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
        <div className='max-w-7xl mx-auto px-4 py-20 sm:p-8 md:p-45 text-center'>
        <p className='text-4xl second_Text_Color font-semibold'><strong>Let's build <span className='third_Text_Color'> something </span>we're both proud of.</strong></p>
        {/* <p className='text-gray-100 max-w-xl mx-auto mt-4'>I am available for freelancing, offering custom web development solutions tailored to your needs. Let’s work together to build fast, responsive, and user-friendly websites!</p> */}
        </div>
        </div>
    </>
  )
}

export default FreelancingSection
