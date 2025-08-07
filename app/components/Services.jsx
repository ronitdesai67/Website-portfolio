import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo'>
            What I Offer</motion.h4>
        <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl font-Ovo'>
            My Services</motion.h2>

            <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.7, delay: 0.5}}
            className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I am a Full Stack Developer from Vadodara, India with 2+ years of experience in multiple companies.</motion.p>

            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.9}}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-auto gap-6 my-10'>
                {serviceData.map(({icon,title,description, link}, index)=>(
                    <motion.div 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.6, delay: 0.9}}
                    key={index} 
                    className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 transition-all'>
                        <Image src={icon} alt='' className='w-10'/>
                        <h3 className='text-lg my-4 text-gray-700 font-semibold'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>
                            {description}
                        </p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5 hover:gap-3 transition-all duration-300 text-purple-600 hover:text-purple-800'>
                            Read More <Image src={assets.right_arrow} alt='' className='w-4'/>
                        </a>
                    </motion.div> 
                ))}
            </motion.div>
    </motion.div>
  )
}

export default Services