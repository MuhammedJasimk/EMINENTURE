import React from 'react'
import { IoCallOutline,IoMailOutline,IoLogoWhatsapp ,IoLogoInstagram,IoLogoTwitter,IoLogoLinkedin,IoLogoYoutube} from "react-icons/io5";

function sidemenu() {
  return (
    <div className='hidden md:block fixed top-[200px] left-0'>
        <div className='bg-[#0000009e] p-2'>
            <p className='text-white mb-2'><IoCallOutline/></p>
            <p className='text-white mb-2'><IoMailOutline/></p>
            <p  className='text-white mb-2'><IoLogoWhatsapp/></p>
            <p className='text-white mb-2 text-center font-semibold'>f</p>
            <p className='text-white mb-2'><IoLogoInstagram/></p>
            <p  className='text-white mb-2'><IoLogoTwitter/></p>
            <p  className='text-white mb-2'><IoLogoLinkedin/></p>
            <p className='text-white mb-2'><IoLogoYoutube/></p>
        </div>
    </div>
  )
}

export default sidemenu