import React from 'react'
import CardOne from "../case_study_card/cardOne";
import CardTwo from "../case_study_card/cardTwo";
import { motion } from "framer-motion"

function case_study() {
    return (
        <div className=' py-[70px] container mx-auto'>
            <motion.p className='text-[40px] text-center mb-4'>eCommerce Development Cases</motion.p>
            <p className='text-center text-[28px]  mt-4'>Here are the interesting cases of eCommerce Web Development that you should go through.</p>

            <div className='md:grid md:grid-cols-3 mt-[60px] gap-7'>
                <motion.div className='md:basis-1/3 mt-4 md:mt-0' initial={{ x: "30%" }}
                    whileInView={{ x: 0 }}  transition={{duration:0.6,ease:'easeOut'}}>  <CardOne /></motion.div>
                <motion.div className='md:basis-1/3 mt-4 md:mt-0' initial={{ x: "30%" }}
                    whileInView={{ x: 0 }}  transition={{duration:0.6,ease:'easeOut'}}>   <CardTwo /></motion.div>
                <motion.div className='md:basis-1/3 mt-4 md:mt-0' initial={{ x: "30%" }}
                    whileInView={{ x: 0 }}  transition={{duration:0.6,ease:'easeOut'}}><CardOne /></motion.div>
                <motion.div className='md:basis-1/3 mt-4 md:mt-0' initial={{ x: "-30%" }}
                    whileInView={{ x: 0 }}  transition={{duration:0.6,ease:'easeOut'}}>   <CardTwo /></motion.div>
                <motion.div className='md:basis-1/3 mt-4 md:mt-0' initial={{ x: "-30%" }}
                    whileInView={{ x: 0 }}  transition={{duration:0.6,ease:'easeOut'}}>  <CardOne /></motion.div>
                <motion.div className='md:basis-1/3 mt-4 md:mt-0' initial={{ x: "-30%" }}
                    whileInView={{ x: 0 }}  transition={{duration:0.6,ease:'easeOut'}}>   <CardTwo /></motion.div>
            </div>
        </div>
    )
}

export default case_study