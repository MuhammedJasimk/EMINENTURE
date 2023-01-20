import React from 'react'

function cardOne() {
    return (
        <div>
            <div className='overflow-hidden'>
                <img className='rounded-t-md case_study_card' src="https://www.eminenturetech.com/images/sub-services/eCommerce-Web-Development/case-study/B-Chain-Hotels.webp" alt="" />
            </div>
            <div className='p-4'>
                <p className='text-[25px] font-semibold mt-7'>E-Distributorship Recreated</p>
                <p className='text-[18px] font-light mt-3'>We refined the old version into a seamless distributorship app, where retailers and mechanics
                    got registered in thousands.</p>
                <button className='mt-7 underline'>Discover More</button>
            </div>
        </div>
    )
}

export default cardOne