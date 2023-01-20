import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function card() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4 ,
        autoplay: true,
        autoplaySpeed: 2000
        
      };

   
    
    return (
        <div className='container mx-auto mt-[-130px]'>
            <div className=''>
             <Slider {...settings}>
                <div className='rounded-lg mainSubset mt-4 md:mt-0 h-[350px] overflow-hidden' >
                    <img className='h-full' src="https://www.eminenturetech.com/images/sub-services/eCommerce-Web-Development/more-services-offering/Magento-Website.webp" alt="" />
                    <div className='subset'>
                        <p className='text-white text-[22px] font-semibold '>Shopify Website</p>
                        <p className='text-white text-[18px] mt-3'>Have an online shopping site on Shopify using feasible plugins here for customization. </p>
                    </div>
                </div> 

                <div className='rounded-lg mainSubset mt-4 md:mt-0 h-[350px] overflow-hidden' >
                    <img className='h-full' src="https://www.eminenturetech.com/images/sub-services/eCommerce-Web-Development/more-services-offering/Magento-Website.webp" alt="" />
                   <div className='subset'>
                        <p className='text-white text-[22px] font-semibold '>Shopify Website</p>
                        <p className='text-white text-[18px] mt-3'>Have an online shopping site on Shopify using feasible plugins here for customization. </p>
                    </div>
                </div>

                <div className='rounded-lg mainSubset mt-4 md:mt-0 h-[350px] overflow-hidden' >
                    <img className='h-full' src="https://www.eminenturetech.com/images/sub-services/eCommerce-Web-Development/more-services-offering/Magento-Website.webp" alt="" />
                   <div className='subset'>
                        <p className='text-white text-[22px] font-semibold '>Shopify Website</p>
                        <p className='text-white text-[18px] mt-3'>Have an online shopping site on Shopify using feasible plugins here for customization. </p>
                    </div>
                </div>

                <div className='rounded-lg mainSubset mt-4 md:mt-0 h-[350px] overflow-hidden' >
                    <img className='h-full' src="https://www.eminenturetech.com/images/sub-services/eCommerce-Web-Development/more-services-offering/Magento-Website.webp" alt="" />
                   <div className='subset'>
                        <p className='text-white text-[22px] font-semibold '>Shopify Website</p>
                        <p className='text-white text-[18px] mt-3'>Have an online shopping site on Shopify using feasible plugins here for customization. </p>
                    </div>
                </div>

                <div className='rounded-lg mainSubset mt-4 md:mt-0 h-[350px] overflow-hidden' >
                    <img className='h-full' src="https://www.eminenturetech.com/images/sub-services/eCommerce-Web-Development/more-services-offering/Magento-Website.webp" alt="" />
                   <div className='subset'>
                        <p className='text-white text-[22px] font-semibold '>Shopify Website</p>
                        <p className='text-white text-[18px] mt-3'>Have an online shopping site on Shopify using feasible plugins here for customization. </p>
                    </div>
                </div>


                <div className='rounded-lg mainSubset mt-4 md:mt-0 h-[350px] overflow-hidden' >
                    <img className='h-full' src="https://www.eminenturetech.com/images/sub-services/eCommerce-Web-Development/more-services-offering/Magento-Website.webp" alt="" />
                   <div className='subset'>
                        <p className='text-white text-[22px] font-semibold '>Shopify Website</p>
                        <p className='text-white text-[18px] mt-3'>Have an online shopping site on Shopify using feasible plugins here for customization. </p>
                    </div>
                </div>


                <div className='rounded-lg mainSubset mt-4 md:mt-0 h-[350px] overflow-hidden' >
                    <img className='h-full' src="https://www.eminenturetech.com/images/sub-services/eCommerce-Web-Development/more-services-offering/Magento-Website.webp" alt="" />
                   <div className='subset'>
                        <p className='text-white text-[22px] font-semibold '>Shopify Website</p>
                        <p className='text-white text-[18px] mt-3'>Have an online shopping site on Shopify using feasible plugins here for customization. </p>
                    </div>
                </div>


                <div className='rounded-lg mainSubset mt-4 md:mt-0 h-[350px] overflow-hidden' >
                    <img className='h-full' src="https://www.eminenturetech.com/images/sub-services/eCommerce-Web-Development/more-services-offering/Magento-Website.webp" alt="" />
                   <div className='subset'>
                        <p className='text-white text-[22px] font-semibold '>Shopify Website</p>
                        <p className='text-white text-[18px] mt-3'>Have an online shopping site on Shopify using feasible plugins here for customization. </p>
                    </div>
                </div>

                
                <div className='rounded-lg mainSubset mt-4 md:mt-0 h-[350px] overflow-hidden' >
                    <img className='h-full' src="https://www.eminenturetech.com/images/sub-services/eCommerce-Web-Development/more-services-offering/Magento-Website.webp" alt="" />
                   <div className='subset'>
                        <p className='text-white text-[22px] font-semibold '>Shopify Website</p>
                        <p className='text-white text-[18px] mt-3'>Have an online shopping site on Shopify using feasible plugins here for customization. </p>
                    </div>
                </div>


                
                <div className='rounded-lg mainSubset mt-4 md:mt-0 h-[350px] overflow-hidden' >
                    <img className='h-full' src="https://www.eminenturetech.com/images/sub-services/eCommerce-Web-Development/more-services-offering/Magento-Website.webp" alt="" />
                   <div className='subset'>
                        <p className='text-white text-[22px] font-semibold '>Shopify Website</p>
                        <p className='text-white text-[18px] mt-3'>Have an online shopping site on Shopify using feasible plugins here for customization. </p>
                    </div>
                </div>

            </Slider>
            </div>
        </div>
    )
}

export default card