import React from 'react';
import content from '../../assets/content.png';
import { motion } from 'framer-motion';

const Deskcontent = () => {
  return (
    <div className='w-fll bg-orange-100 container grid grid-cols-1 md:grid-cols-2 space-y-6 space-x-9 md:space-y-0 py-14'>
      <div className='flex justify-center items-center'>
        <motion.img 
          initial={{ opacity: 0, y: -100 }} 
          animate={{ opacity: 1, y: 0}} 
          transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: .2,
          }}
          src={content} alt="" className='w-[900px] md:max-w-[700px] h-full object-cover'/>
      </div>

      <div className='flex flex-col justify-center'>
        <div className='text-center md:text-left space-y-4 lg:max-w-[550px]'>
          <motion.h1
            initial={{ opacity: 0, y: -100 }} 
            animate={{ opacity: 1, y: 0}} 
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: .4,
            }}
             className='text-3xl font-bold '>Discover the Future of Office Furniture</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -100 }} 
            animate={{ opacity: 1, y: 0}} 
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: .8,
            }}
            className='font-semibold'>At Smart Desk, we believe your workspace should be as dynamic and innovative as your work. Our modular office tables are designed to adapt, evolve, and elevate your professional environment. Whether you're a startup, a large corporation, or a home office enthusiast, Smart Desk offers the perfect solution for your needs.</motion.p>
        </div>
      </div>

    </div>
  )
          
  
}

export default Deskcontent