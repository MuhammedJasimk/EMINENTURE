import React, { useState } from 'react'
import { motion } from "framer-motion"



function Service() {

    const ballStyle = {
        display: "block",
        width: "1rem",
        height: "1rem",
        backgroundColor: "black",
        borderRadius: "0.5rem"
    };

    const bounceTransition = {
        y: {
            duration: 1.3,
            repeat: Infinity,
            repeatType: 'reverse'
        },
        backgroundColor: {
            duration: 3,
            yoyo: Infinity,
            ease: "easeOut",
            repeatDelay: 1.8
        }
    };

    const [service, setService] = useState(false)
    return (
        <div className='bg-[rgba(0,0,0,0.09)] py-[70px]'>
            <div className='container mx-auto'>
                <p className='text-[40px] text-center mb-4'>eCommerce Web Development</p>
                <p className='text-[26px] text-center'>Get an e-Store Developed for Guaranteed 10x Faster TAT & Maximized Leads</p>
                <div className='block md:flex mt-[40px]'>
                    <div className='md:w-2/4 text-[23px] p-3 md:pl-[30px] md:pr-[60px]'>
                        <p className='font-light'>Starting up an online storefront is easy now. You can have lots of professional web development
                            companies to help with a turn-key solution. They need little to no assistance in developing an
                            eCommerce web site. We are one of the leading technology-based companies. Our experts can let
                            you have the most stunning eCommerce web site for retailing, distributorship or wholesale from India.
                            You may expand it easily without hassles. We create the one with lots of possibilities & a great scope
                            of customization</p>

                        <p className='font-light mt-5'><span className='text-[#ffa93b]'>Eminenture Technologies</span> provide cutting-edge e-commerce website solutions.
                            With these, you can have a superior, robust and scalable online storefront. It undergoes a rigorous
                            testing upon completion. Thereafter, you get a completely secure, impressive and smoothly functioning
                            shopping site for making high returns.</p>








                    </div>
                    <div className='md:w-2/4'>
                        <motion.img transition={bounceTransition}
                            animate={{
                                y: ["2%", "-0%"],
                                // backgroundColor: ["#ff6699", "#6666ff"]
                            }}
                           src="https://www.eminenturetech.com/images/em-maininfographics/eCommerce-Development-Solutions.png" alt="" />
                    </div>
                </div>
                {
                    service && <div className='mt-8 p-3 md:pl-[30px] text-[23px]'>

                        <p className='bg-black text-white service_Head'>Maintenance and Support</p>
                        <p className='mt-4 font-light'>Our e-commerce website development services include the integration of the latest
                            state-of-the-art technologies, monitoring and continued maintenance. With these,
                            you hardly face such time when your web site runs out of service. Our value additions
                            and support for assured service excellence keep it agile, error free and active.
                            We ensure it through periodic maintenance and frequent updates</p>


                        <p className='bg-black text-white service_Head'> Seamless Order Management     </p>
                        <p className='mt-4 font-light'>Our experts design superior order management and carting solutions.
                            With their smooth functionality, you see your customers get a great web experience. They maximize
                            satisfaction upon experiencing the robust and reliable shopping cart solution. We test it seriously
                            before making it live. It ensures an error-free order management, no matter how many orders are
                            aligned at a time</p>


                        <p className='bg-black text-white service_Head'>Cross-Browser Compatibility</p>
                        <p className='mt-4 font-light'>The technology updates itself every day. The static one can never
                            survive in the digital environment. We come with fast and mobile solutions. These are the essential
                            ones that make your eCommerce journey amazing. With some really quick and seamless responsive designs,
                            your online store works efficiently. We make it adaptive to cross-browsers. It means that your user's
                            web journey does not have any interference from any browsers. Our web products have strong security
                            protocols and encryption. These ensure that no hacking attempt can disturb your user's web experience
                            during account creation, transaction & browsing.</p>



                        <p className='bg-black text-white service_Head'>Great Shopping Possibilities</p>
                        <p className='mt-4 font-light'>Our e-commerce website solutions are smooth because of search engine
                            optimization strategy integration. It means that we make it the right-fit to run in accordance with
                            Google or other search engine guidelines. It lets us deliver a seamless and impressive shopping
                            experience to your users. We employ the latest trends and technologies to make a big difference
                            to your returns. Our experts create a possibility to merge CRM and CMS with it. With these two
                            tools, you can discover the secret of engaging, onboarding and converting leads in no time.
                            You can provide content as per the content marketing strategy. Your CRM & CMS can let you
                            analyze and prepare the best customer experience in no time. As a result, you get more customers
                            and maximize returns.</p>
                    </div>}
                <div className='pl-[30px]'>
                    <button onClick={() => { setService(!service) }} class="bg-transparent  border-2 text-black font-semibold text-[18px] px-3 py-1 mt-6 border-black ">
                        {!service ? "Read More" : "close"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Service