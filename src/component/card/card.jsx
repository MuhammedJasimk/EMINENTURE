import React from 'react'

function card() {
    const bg = {
        backgroundImage: 'url(https://www.eminenturetech.com/images/sub-services/eCommerce-Web-Development/more-services-offering/Magento-Website.webp)',
        width: '100%',
        backgroundSize: 'cover'
    }
    return (
        <div className='container mx-auto mt-[-130px]'>
            <div className='md:grid grid-col-4 grid-flow-col gap-4'>

                <div className='rounded-lg mainSubset mt-4 md:mt-0 h-[350px] overflow-hidden' style={bg}>
                    <div className='subset'>
                        <p className='text-white text-[22px] font-semibold '>Shopify Website</p>
                        <p className='text-white text-[18px] mt-3'>Have an online shopping site on Shopify using feasible plugins here for customization. </p>
                    </div>
                </div>

                <div className='rounded-lg mainSubset mt-4 md:mt-0 h-[350px] overflow-hidden' style={bg}>
                   <div className='subset'>
                        <p className='text-white text-[22px] font-semibold '>Shopify Website</p>
                        <p className='text-white text-[18px] mt-3'>Have an online shopping site on Shopify using feasible plugins here for customization. </p>
                    </div>
                </div>


                <div className='rounded-lg mainSubset mt-4 md:mt-0 h-[350px] overflow-hidden' style={bg}>
                   <div className='subset'>
                        <p className='text-white text-[22px] font-semibold '>Shopify Website</p>
                        <p className='text-white text-[18px] mt-3'>Have an online shopping site on Shopify using feasible plugins here for customization. </p>
                    </div>
                </div>


                <div className='rounded-lg mainSubset mt-4 md:mt-0 h-[350px] overflow-hidden' style={bg}>
                   <div className='subset'>
                        <p className='text-white text-[22px] font-semibold '>Shopify Website</p>
                        <p className='text-white text-[18px] mt-3'>Have an online shopping site on Shopify using feasible plugins here for customization. </p>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default card