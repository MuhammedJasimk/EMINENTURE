import React from 'react'
import { IoCartSharp } from "react-icons/io5";
import { IoMdList } from "react-icons/io";


function navbar() {
    return (
        <div className='fixed w-full z-50'>
            <div className='mx-auto bg-gradient-to-b from-black to-transparent '>
                <nav class="container m-auto flex  z-50 items-center justify-between flex-wrap py-7">
                    <div class="flex items-center z-50 flex-shrink-0 text-white mr-6">
                        <img src="https://www.eminenturetech.com/new-images/logo-new-2.png" alt="" />
                    </div>
                    <div class="block lg:hidden">
                        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                        </button>
                    </div>
                    <div class="hidden md:block  w-full  flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className='flex justify-end  font-semibold text-[17px] items-center	w-full'>
                            <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-white mr-8">
                                Services
                            </a>
                            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white mr-8">
                                Pricing
                            </a>
                            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white mr-8">
                                Company
                            </a>
                            <a href="#responsive-header" class="block mt-4  lg:inline-block lg:mt-0 text-white mr-8">
                                Portfolio
                            </a>
                            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white mr-8">
                                Login
                            </a>
                            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white mr-8">
                                <IoCartSharp className='text-[25px]' />
                            </a>
                            <a href="#responsive-header" class="block text-[#ffa93b] mt-4 lg:inline-block lg:mt-0 border-solid border-2 border-[#ffa93b] p-1 mr-8">
                                Free Website Audit Form
                            </a>
                            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white mr-8">
                                <IoMdList className='text-[35px]' />
                            </a>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default navbar