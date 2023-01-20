import React from 'react'
import { IoCallOutline,IoMailOutline,IoLogoWhatsapp ,IoLogoInstagram,IoLogoTwitter,IoLogoLinkedin,IoLogoYoutube} from "react-icons/io5";

function sidemenu() {
  return (
    <div className='hidden md:block fixed top-[200px] left-0'>
        <div className='bg-[#0000009e] p-2'>
            <p className='text-white mb-3'><IoCallOutline className='text-[23px]'/></p>
            <p className='text-white mb-3'><IoMailOutline className='text-[23px]'/></p>
            <p  className='text-white mb-3'><IoLogoWhatsapp className='text-[23px]'/></p>
            <p className='text-white mb-3 text-center font-semibold text-[27px]'>f</p>
            <p className='text-white mb-3'><IoLogoInstagram className='text-[23px]'/></p>
            <p  className='text-white mb-3'><IoLogoTwitter className='text-[23px]'/></p>
            <p  className='text-white mb-3'><IoLogoLinkedin className='text-[23px]'/></p>
            <a href='https://www.youtube.com/@Eminenture/playlists' target='blank' className='text-white '><IoLogoYoutube className='text-[23px]'/></a>
        </div>
    </div>
  )
}

export default sidemenu