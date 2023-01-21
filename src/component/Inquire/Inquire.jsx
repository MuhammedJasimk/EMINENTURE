import React from 'react'


function Inquire() {
    return (
        <div className='md:flex md:flex-row'>
            <div className='md:basis-1/2 relative'>
                <img src="https://www.eminenturetech.com/new-images/new-img/005.jpg" alt="" />
                <div className='bg-[#0f151b] md:p-4 md:w-[60%] absolute bottom-0'>
                    <p className='text-white text-[32px] font-semibold'>Join Our Community</p>
                    <p className='text-white text-[17px] font-light'>We’ve opportunities for desirable technology experts. Make your own way to grow. Choose us to fly high & reach heights in your career.</p>
                    <button className="bg-transparent  border-2 text-white font-semibold px-5 text-[18px] py-1 mt-6 border-white ">
                        Join Us
                    </button>
                </div>
            </div>
            <div className='md:basis-1/2  bg-[#0f151b] p-[50px]'>
                <p className='text-white text-[52px] font-semibold'>Inquire for Assistance</p>
                <p className='text-white text-[22px] font-light'>Fill out the form for inquiry. Our domain experts will contact shortly.</p>

                <div className='mt-6'>
                    <div className='flex flex-row gap-6'>
                        <div className='basis-1/2'>
                            <input class="appearance-none block w-full bg-transparent  focus:outline-none text-white border-b border-b-white py-3 px-4 mb-3 leading-tight focus:bg-transparent focus:bg-white" id="grid-first-name" type="text" placeholder="Name"></input>
                        </div>
                        <div className='basis-1/2'>
                            <input class="appearance-none block w-full  bg-transparent focus:bg-transparent text-white border-b border-b-white  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Email"></input>
                        </div>
                    </div>

                    <div >
                        <input class="appearance-none block w-full  bg-transparent focus:bg-transparent text-white border-b border-b-white  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Number"></input>
                    </div>
                    <div >
                        <textarea id="message" rows="4" class="appearance-none block w-full  bg-transparent focus:bg-transparent text-white border-b border-b-white  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="Messsage"></textarea>
                    </div>
                    <button className="bg-transparent  border-2 text-white font-semibold text-[18px] px-3 py-1 mt-6 border-[#ffa93b] ">
                        Submit
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Inquire