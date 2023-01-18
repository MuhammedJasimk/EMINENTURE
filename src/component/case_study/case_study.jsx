import React from 'react'
import CardOne from "../case_study_card/cardOne";
import CardTwo from "../case_study_card/cardTwo";

function case_study() {
    return (
        <div className=' py-[70px] container mx-auto'>
            <p className='text-[40px] text-center mb-4'>eCommerce Development Cases</p>
            <p className='text-center text-[28px]  mt-4'>Here are the interesting cases of eCommerce Web Development that you should go through.</p>

            <div className='md:grid md:grid-cols-3 mt-[60px] gap-7'>
                <div className='md:basis-1/3 mt-4 md:mt-0'>  <CardOne /></div>
                <div className='md:basis-1/3 mt-4 md:mt-0'>   <CardTwo /></div>
                <div className='md:basis-1/3 mt-4 md:mt-0'><CardOne /></div>
                <div className='md:basis-1/3 mt-4 md:mt-0'>   <CardTwo /></div>
                <div className='md:basis-1/3 mt-4 md:mt-0'>  <CardOne /></div>
                <div className='md:basis-1/3 mt-4 md:mt-0'>   <CardTwo /></div>
            </div>
        </div>
    )
}

export default case_study