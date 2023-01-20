import React, { useContext } from 'react'
import { AppContext } from '../../context/appContext'
import { motion,AnimatePresence } from "framer-motion"



function PricingMenu() {

    const [isService, setIsService, isPricing, setIsPricing] = useContext(AppContext)


    return (
        <AnimatePresence>
        {isPricing &&
        <motion.div
        initial={{y:0,opacity:0,}}
        animate={{y:'10%',opacity:1}}
        exit={{y:0,opacity:0,}}
        transition={{duration:0.3,ease:'easeOut'}}
         className='bg-zinc-800 fixed top-[12%] w-full ' onMouseLeave={() => { setIsPricing(!isPricing) }}>
            <div className='container mx-auto py-7 '>
                <p className='text-white text-[30px]'>Packages</p>
                <p className='text-white mt-3 font-light'>
                    Discover the most cost-effective and all trending services for your online business or products.
                    Our all offerings are available at a competitive price that can let you afford them easily.
                    For customized services, we are here to talk and discuss pricing corresponding to selected technology
                    solutions.
                </p>

                <div className='mt-7'>
                    <div className='grid grid-cols-4 gap-4 '>
                        <div className='p-5 border-solid border-2 border-white'>
                            <img className='w-[60px]' src="https://www.eminenturetech.com/new-images/nav-icon/SEO-Packages.png" alt="" />
                            <p className='text-white textt-[18px] mt-3 font-semibold'>SEO Packages</p>
                            <p className='text-white text-[14px] font-light mt-3'>Maximize the benefits of tailored SEO packages for quick leads and visibility.</p>
                            <button className='mt-3 underline text-[#ffa93b]'>Discover More</button>
                        </div>
                        <div className='p-5 border-solid border-2 border-white'>
                            <img className='w-[60px]' src="https://www.eminenturetech.com/new-images/nav-icon/web-hosting-packages.png" alt="" />
                            <p className='text-white textt-[18px] mt-3 font-semibold'>Web Hosting Packages</p>
                            <p className='text-white text-[14px] font-light mt-3'>Choose the right fit web hosting packages for a secure & leveraging website.</p>
                            <button className='mt-3 underline text-[#ffa93b]'>Discover More</button>
                        </div>
                        <div className='p-5 border-solid border-2 border-white'>
                            <img className='w-[60px]' src="https://www.eminenturetech.com/new-images/nav-icon/SEO-Packages.png" alt="" />
                            <p className='text-white textt-[18px] mt-3 font-semibold'>PPC Packages</p>
                            <p className='text-white text-[14px] font-light mt-3'>Access really cost-effective packages for end-to-end tailored PPC campaigns.</p>
                            <button className='mt-3 underline text-[#ffa93b]'>Discover More</button>
                        </div>
                        <div className='p-5 border-solid border-2 border-white'>
                            <img className='w-[60px]' src="https://www.eminenturetech.com/new-images/nav-icon/web-hosting-packages.png" alt="" />
                            <p className='text-white textt-[18px] mt-3 font-semibold'>Website Design Packages</p>
                            <p className='text-white text-[14px] font-light mt-3'>Have completely personalized web design packages for your own presence.</p>
                            <button className='mt-3 underline text-[#ffa93b]'>Discover More</button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
}
        </AnimatePresence>

    )
}

export default PricingMenu