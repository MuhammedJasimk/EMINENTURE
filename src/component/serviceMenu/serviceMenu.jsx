import React, { useContext } from 'react'
import {AppContext} from '../../context/appContext'
import { motion,AnimatePresence } from "framer-motion"



function ServiceMenu() {

    const [isService, setIsService, isPricing, setIsPricing] = useContext(AppContext)


    return (
        <AnimatePresence>
        {isService &&
        <motion.div 
        initial={{y:0,opacity:0,}}
        animate={{y:'10%',opacity:1}}
        exit={{y:0,opacity:0,}}
        transition={{duration:0.3,ease:'easeOut'}}

        className='bg-zinc-800 fixed top-[12%] w-full ' onMouseLeave={()=>{setIsService(!isService)}}>
            <div className='container mx-auto py-7 '>
                <p className='text-white text-[30px]'>Services We Provide</p>
                <p className='text-white mt-3 font-light'>
                    Eminenture Technologies comes with services that are actually the right fit for your business and are capable of making
                    a difference in your operations in real time. We offer on-request or tailor-made technology solutions together with
                    package-based offerings in a wide range.
                </p>

                <div>
                    <div className='md:flex mt-4'>
                        <ul className=' flex-1 '>
                            <li className='text-[#ffa800] text-[16px] font-semibold pt-2'>Digital Marketing</li>
                            <li className='text-white text-[14px] pt-2'>Search Engine Optimization</li>
                            <li className='text-white text-[14px] pt-2'>Pay Per Click</li>
                            <li className='text-white text-[14px] pt-2'>Search Engine Marketing</li>
                            <li className='text-white text-[14px] pt-2'>Content Marketing   </li>
                            <li className='text-white text-[14px] pt-2'>Online Reputation Management</li>
                            <li className='text-white text-[14px] pt-2'>Social Media</li>
                            <li className='text-white text-[14px] pt-2'>Email Marketing</li>
                            <li className='text-white text-[14px] pt-2'>Email Marketing</li>

                        </ul>
                        <ul className='border-solid flex-1  px-3 '>
                            <li className='text-[#ffa800] text-[16px] font-semibold pt-2'>Web Suite</li>
                            <li className='text-white text-[14px] pt-2'>Website Designing</li>
                            <li className='text-white text-[14px] pt-2'>Website Development</li>
                            <li className='text-white text-[14px] pt-2'>E-Commerce</li>
                            <li className='text-white text-[14px] pt-2'>Loyalty Program</li>
                            <li className='text-white text-[14px] pt-2'>Marketplace</li>
                            <li className='text-white text-[14px] pt-2'>Platform Ready</li>
                            <li className='text-white text-[14px] pt-2'>CRM Development</li>

                        </ul>
                        <ul className=' flex-1 px-3 '>
                            <li className='text-[#ffa800] text-[16px] font-semibold pt-2'>Mobile Apps</li>
                            <li className='text-white text-[14px] pt-2'>Native App</li>
                            <li className='text-white text-[14px] pt-2'>Hybrid App</li> 

                        </ul>
                        <ul className=' flex-1 px-3 '>
                            <li className='text-[#ffa800] text-[16px] font-semibold  pt-2'>Digital Creatives</li>
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
            </div>
        </motion.div>
}
</AnimatePresence>
    
    )
}

export default ServiceMenu