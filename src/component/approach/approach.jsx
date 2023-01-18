import React from 'react'

function approach() {

    const approach_bg = {
        backgroundImage: 'url(https://www.eminenturetech.com/new-images/services/approachh.jpg)',
        // height: '100vh',
        width: '100%',
        backgroundSize: 'cover'
    }

    return (
        <div style={approach_bg}>
            <div className='flex flex-row'>
                <div className='md:basis-1/2'></div>
                <div className='md:basis-1/2  flex  h-full '>
                    <div className='bg-[#ffffffb8] p-6'>
                        <p className='text-[48px] font-semibold'>Our Approach</p>
                        <p className='text-[21px] mt-[10px]'>We define our approach in a statement of work, which covers end-to-end ideology to achieve a benchmarked website.</p>
                        <div className='mt-7'>
                            <div className='flex items-center mt-5'>
                                <img className='w-[60px]' src="https://www.eminenturetech.com/images/sub-services/eCommerce-Web-Development/icons/assess.png" alt="" />
                                <p className='text-[24px]'>Assess</p>
                            </div>
                            <div className='flex items-center mt-5'>
                                <img className='w-[60px]' src="https://www.eminenturetech.com/images/sub-services/eCommerce-Web-Development/icons/define.png" alt="" />
                                <p className='text-[24px]'> Define  </p>
                            </div>
                            <div className='flex items-center mt-5'>
                                <img className='w-[60px]' src="https://www.eminenturetech.com/images/sub-services/eCommerce-Web-Development/icons/execute.png" alt="" />
                                <p className='text-[24px]'> Execute   </p>
                            </div>
                            <div className='flex items-center mt-5'>
                                <img className='w-[60px]' src="https://www.eminenturetech.com/images/sub-services/eCommerce-Web-Development/icons/delivery.png" alt="" />
                                <p className='text-[24px]'> Delivery  </p>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[25%]'></div>
                </div>
            </div>
        </div>
    )
}

export default approach