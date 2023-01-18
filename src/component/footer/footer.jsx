import React from 'react'
import { IoLogoTwitter ,IoLogoInstagram,IoLogoLinkedin,IoLogoYoutube} from "react-icons/io5";

function footer() {
    return (
        <div className='bg-[#1c1c1c] py-[50px] '>
            <div className='container border-b border-solid pb-5 border-gray-500  mx-auto md:flex'>
                <div class="flex-auto ">
                    <p className='text-white text-[18px] mb-7'>Services We Provide</p>
                    <div className='md:flex'>
                        <ul className='border-solid flex-1 border-r px-3  border-gray-500'>
                            <li className='text-[#ffa800] text-[14px] pt-2'>DIGITAL MARKETING</li>
                            <li className='text-white text-[14px] pt-2'>Search Engine Optimization</li>
                            <li className='text-white text-[14px] pt-2'>Pay Per Click</li>
                            <li className='text-white text-[14px] pt-2'>Search Engine Marketing</li>
                            <li className='text-white text-[14px] pt-2'>Content Marketing   </li>
                            <li className='text-white text-[14px] pt-2'>Online Reputation Management</li>
                            <li className='text-white text-[14px] pt-2'>Social Media</li>
                            <li className='text-white text-[14px] pt-2'>Email Marketing</li>
                            <li className='text-white text-[14px] pt-2'>Web Analytics</li>
                            <li className='text-white text-[14px] pt-2'>    Facebook Marketing</li>
                            <li className='text-white text-[14px] pt-2'>Keyword Research</li>
                            <li className='text-white text-[14px] pt-2'>Lead Generation</li>
                            <li className='text-white text-[14px] pt-2'>Link Building</li>
                        </ul>
                        <ul className='border-solid flex-1 border-r px-3  border-gray-500'>
                            <li className='text-[#ffa800] text-[14px] pt-2'>WEB SUITE</li>
                            <li className='text-white text-[14px] pt-2'>Website Designing</li>
                            <li className='text-white text-[14px] pt-2'>Website Development</li>
                            <li className='text-white text-[14px] pt-2'>E-Commerce</li>
                            <li className='text-white text-[14px] pt-2'>Loyalty Program</li>
                            <li className='text-white text-[14px] pt-2'>Marketplace</li>
                            <li className='text-white text-[14px] pt-2'>Platform Ready</li>
                            <li className='text-white text-[14px] pt-2'>Customer Relationship</li>
                            <li className='text-white text-[14px] pt-2'>Management</li>
                            <li className='text-[#ffa800] text-[14px] mt-5 pt-2'>MOBILE APPS</li>
                            <li className='text-white text-[14px] pt-2'>Native App</li>
                            <li className='text-white text-[14px] pt-2'>Lead Generation</li>
                            <li className='text-white text-[14px] pt-2'>Hybrid App</li>
                        </ul>
                        <ul className='border-solid flex-1 border-r px-3  border-gray-500'>
                            <li className='text-[#ffa800] text-[14px] pt-2'>DIGITAL CREATIVES</li>
                            <li className='text-white text-[14px] pt-2'>Logo Design</li>
                            <li className='text-white text-[14px] pt-2'>Email Design Management</li>
                            <li className='text-white text-[14px] pt-2'>Image Edit</li>
                            <li className='text-white text-[14px] pt-2'>Brochure Design   </li>
                            <li className='text-white text-[14px] pt-2'>Portfolio Flipbook</li>
                            <li className='text-white text-[14px] pt-2'>Banner Design</li>
                            <li className='text-white text-[14px] pt-2'>Info Graphic Creation & Distribution</li>
                        </ul>
                    </div>
                </div>
                <div class="flex-1 ">
                    <p className='text-white text-[18px] mb-7'> Quick Links </p>
                    <div>
                        <ul className='border-solid border-r px-3  border-gray-500'>
                            <li className='text-white text-[14px] pt-2'>Trademark</li>
                            <li className='text-white text-[14px] pt-2'>Refund Policy</li>
                            <li className='text-white text-[14px] pt-2'>Privacy Policy</li>
                            <li className='text-white text-[14px] pt-2'>Terms of Use</li>
                            <li className='text-white text-[14px] pt-2'>Case Study</li>
                            <li className='text-white text-[14px] pt-2'>Sitemap</li>
                            <li className='text-white text-[18px] mb-7 mt-5'> Secured & Trusted</li>
                            <li className='text-white text-[14px] pt-2'>
                                <img src="https://www.eminenturetech.com/new-images/nasscom-1.png" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex-1">
                    <p className='text-white text-[18px] mb-7'>Connect With Us</p>
                    <div>
                        <ul className=' px-3  border-gray-500'>
                            <li className='text-white text-[14px] pt-2'>Contact Us</li>
                            <li className='text-white text-[14px] pt-2'>Resources  </li>
                            <li className='text-white text-[14px] pt-2'>Support</li>
                            <li className='text-white text-[14px] pt-2'>Request For CallBack</li>
                            <li className='text-white text-[14px] pt-2'>FAQs</li>
                            <li className='text-[#ffa800] text-[18px]  mt-4 pt-2'>Our Portfolios</li>
                            <li className='text-white text-[14px] pt-2'>
                                Admire some really beautiful portfolios of eCommerce, logo, banner, static website, flyer, loyalty, and EDM that represent our expertise
                            </li>
                            <li className='text-white text-[14px] pt-2'>
                                <button className="bg-transparent  border-2 text-white font-semibold px-3 py-1 mt-6 border-white ">
                                    Discover More
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container mx-auto flex justify-between'>
                <div className='mt-3'>
                    <div className='flex'>
                        <div className='px-2 py-1 justify-center items-center flex mr-4   border-solid border text-white  border-white'>
                            f
                        </div>
                        <div className='px-2 py-1 justify-center items-center flex  mr-4  border-solid border text-white  border-white'>
                            <IoLogoTwitter/>
                        </div>
                        <div className='px-2 py-1 justify-center items-center flex mr-4   border-solid border text-white  border-white'>
                           <IoLogoInstagram/>
                        </div>
                        <div className='px-2 py-1 justify-center items-center flex mr-4   border-solid border text-white  border-white'>
                           <IoLogoLinkedin/>
                        </div>
                        <div className='px-2 py-1 justify-center items-center flex  border-solid border text-white  border-white'>
                           <IoLogoYoutube/>
                        </div>
                    </div>
                    <p className='text-white mt-3'>Eminenture Technologies Copyright © 2023. All Rights Reserved.</p>
                </div>
                <div>
                    <img src="https://www.eminenturetech.com/new-images/em-logo1.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default footer