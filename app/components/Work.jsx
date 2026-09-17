import Image from 'next/image'
import Link from 'next/link'
import {assets, workData } from '@/assets/assets'
import React from 'react'
import { motion } from "motion/react"

const Work = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 0.3, duration: 0.5}}
        className='text-center mb-2 text-lg font-Ovo'>
            My Portfolio</motion.h4>
        <motion.h2 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 0.3, duration: 0.5}}
        className='text-center text-5xl font-Ovo'>
            My Latest Work</motion.h2>

            <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.7, duration: 0.5}}
            className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Welcome to my Development Portfolio! Explore a collection of Projects showcasing my expertise in Full-Stack Development.</motion.p>

            <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.9, duration: 0.6}}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-5'>
                {workData.map((project, index) => (
                    <Link href={`/work/${project.slug}`} key={index}>
                        <motion.div
                        whileHover={{scale: 1.05}}
                        transition={{duration: 0.3}}
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden hover:scale-105 transition-transform duration-300' style={{backgroundImage: `url(${project.bgImage})`}}>

                            {/* Overlay for better text readability */}
                            <div className='absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300'></div>

                            {/* Only shows once a deployed URL is filled into liveUrls in assets.js */}
                            {project.liveUrl && (
                                <span className='absolute top-4 right-4 flex items-center gap-1.5 bg-white/95 text-black rounded-full pl-2.5 pr-3 py-1 text-xs font-medium shadow-md'>
                                    <span className='w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse' />
                                    Live demo
                                </span>
                            )}

                            {/* Project info card */}
                            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-lg'>
                                <div>
                                    <h2 className='font-semibold '>{project.title}</h2>
                                    <p className='text-sm text-gray-700 text-xs sm:text-sm'>{project.description}</p>
                                </div>
                                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                    <Image src={assets.send_icon} alt='Send Icon' className='w-5'/>
                                </div>
                            </div>

                        </motion.div>
                    </Link>
                ))}
            </motion.div>
    </motion.div>
  )
}

export default Work