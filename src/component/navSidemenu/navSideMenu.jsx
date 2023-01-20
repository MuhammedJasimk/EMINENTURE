import React,{useContext} from 'react'
import { IoCallOutline, IoMailOutline, IoLogoWhatsapp, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io5";
import { FaStreetView,FaTimes } from "react-icons/fa";
import { AppContext } from '../../context/appContext';
import { motion,AnimatePresence } from "framer-motion"
function NavSideMenu() {

    const [isService, setIsService, isPricing, setIsPricing,sidebar, setSidebar]= useContext(AppContext)
    return (
        <AnimatePresence>
        {sidebar &&<motion.div 
         initial={{x:100,opacity:0,}}
         animate={{right:100,opacity:1}}
         exit={{x:200,opacity:0,}}
         transition={{duration:0.3,ease:'easeOut'}}
        className='bg-[#000000a8] text-white w-[27%] z-50 p-6 fixed top-0 bottom-0 right-0'>
            <div className='flex justify-between'>
                <img src="https://www.eminenturetech.com/new-images/logo-new-2.png" alt="" />
                <div className='rounded-full cursor-pointer  p-3 bg-white' onClick={()=>{setSidebar(false)}}>
                <FaTimes className='text-black'/>
                </div>
            </div>

            <p className='mt-6'>Eminenture Technologies lets you discover advanced digital technologies for your business.
                Our web suite, internet marketing, digital creatives, and managed IT services offer end-to-end support,
                which is required for NEXT BUSINESS.</p>

            <button class="bg-transparent  border-2 text-white  font-light text-[14px] px-3 py-1 mt-6 border-white ">
                Discover More
            </button>

            <p className='text-[20px] mt-4 text-[#ffa93b]'>Connect With Us</p>

            <div>
                <div className='flex mt-2  items-center'>
                    <p className='mr-1 text-[#ffa93b]'><IoCallOutline /></p>
                    <p>:  01147093787</p>
                </div>
                <div className='flex mt-2  items-center'>
                    <p className='mr-1 text-[#ffa93b]'><IoMailOutline /></p>
                    <p>: eminfo@eminenture.com</p>
                </div>
                <div className='flex mt-2  '>
                    <p className='mr-1 text-[#ffa93b]'><FaStreetView /></p>
                    <p>: 1506, RG Trade Tower, NSP, Pitampura, New Delhi - 110034</p>
                </div>
            </div>

            <div className='flex items-center mt-6'>
                <p className='text-[26px] mr-4'>f</p>
                <IoLogoInstagram className='text-[26px] mr-4' />
                <IoLogoTwitter className='text-[26px] mr-4' />
                <IoLogoLinkedin className='text-[26px] mr-4' />
                <a href='https://www.youtube.com/@Eminenture/playlists' target='blank'><IoLogoYoutube className='text-[26px] mr-4' /></a>
            </div>
        </motion.div>
}
</AnimatePresence>
    )
}

export default NavSideMenu 