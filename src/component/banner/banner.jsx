import React from 'react'
import Nav from '../navbar/navbar'
import BannerContent from '../banner_content/banner_content'

function banner() {

    const banner_bg = {
        backgroundImage: 'url(https://www.eminenturetech.com/images/em-mainbanner/ecommerce-website-design-development-india.webp)',
        height: '100vh',
        width: '100%',
        backgroundSize: 'cover'
    }


    return (
        <div style={banner_bg}>
            <Nav />
            <BannerContent />
        </div>
    )
}

export default banner