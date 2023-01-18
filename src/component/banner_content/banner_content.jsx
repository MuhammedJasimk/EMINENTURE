import React from 'react'
import Navbar from "../navbar/navbar";

function Banner() {

    const banner_bg = {
        backgroundImage: 'url(https://www.eminenturetech.com/images/em-mainbanner/ecommerce-website-design-development-india.webp)',
        height: '100vh',
        width: '100%',
        backgroundSize: 'cover'
    }


    return (
        <div className='p-4 md:p-0 container m-auto h-full '>
            <div className='md:w-[50%] h-full '>
                <div className=' text-white flex-col h-full flex justify-center '>
                    <p className=' md:text-[20px] font-semibold text-[#ffa93b]'>ECommerce Web Development</p>
                    <p className='text-[36px] md:text-[75px] font-bold leading-[1.1]'>Get Cutting-Edge e-Storefront</p>
                    <p className=' md:text-[20px] font-light'>Have your own eCommerce platform to maximize sales and returns. Eminenture Technologies offer an easy chance to retailers, distributors, and wholesalers to increase their reach to customers, rank up and generate leads quickly.</p>
                </div>
            </div>
        </div>
    )
}

export default Banner