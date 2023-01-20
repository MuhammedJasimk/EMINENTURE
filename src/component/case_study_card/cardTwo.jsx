import React from 'react'

function cardTwo() {
  return (
    <div className='relative overflow-hidden'>
         <div >
            <img className='rounded-md case_study_card' src="https://www.eminenturetech.com/images/sub-services/eCommerce-Web-Development/case-study/Beauty-Clinic-Ranked.webp" alt="" />
        </div>
        <div className='absolute bottom-4 px-4'>
            <p className='text-[25px]  font-semibold text-white'>SEO Ranked Up Beauty Clinic</p>
            <button className='mt-7 text-white underline'>Discover More</button>
        </div>
    </div>
  )
}

export default cardTwo