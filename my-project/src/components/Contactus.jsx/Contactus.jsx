import React from 'react';
import FormImage from "../../assets/form.png";
import {motion} from "framer-motion";

const Contactus = () => {
  return <div className='container my-20'>
            <div className='flex sm:grid-cols-3 justify-evenly'>
                {/* form section */}
                <div className='space-y-8 '>
                    <motion.h1
                        initial={{ opacity: 0, y: -100 }} 
                        animate={{ opacity: 1, y: 0}} 
                        transition={{ 
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: .2,
                        }} 
                        className='text-3xl font-bold'>Ready To Transform Your Workspace?</motion.h1>
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: -100 }} 
                            animate={{ opacity: 1, y: 0}} 
                            transition={{ 
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: .6,
                            }}  
                            className='font-semibold'>Get in Touch! Fill out the form below to enquire about our products or to request a personalized consultation.
                        </motion.p>
                    </div>
                    <div className='grid items-center gap-5'>
                        <motion.input 
                            initial={{ opacity: 0, y: -100 }} 
                            animate={{ opacity: 1, y: 0}} 
                            transition={{ 
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: .8,
                            }}  
                            type="text" placeholder='name' className='input-style w-full lg:w-[250px]'/>
                        <motion.input
                             initial={{ opacity: 0, y: -100 }} 
                             animate={{ opacity: 1, y: 0}} 
                             transition={{ 
                                 type: "spring",
                                 stiffness: 100,
                                 damping: 10,
                                 delay: .8,
                             }} 
                             type="mail" placeholder='Email Address' className='input-style w-full lg:w-[250px]'/>
                        <motion.input
                             initial={{ opacity: 0, y: -100 }} 
                             animate={{ opacity: 1, y: 0}} 
                             transition={{ 
                                 type: "spring",
                                 stiffness: 100,
                                 damping: 10,
                                 delay: .8,
                             }}  type="number" placeholder='Phone' className='input-style w-full lg:w-[250px]'/>
                        <motion.input
                             initial={{ opacity: 0, y: -100 }} 
                             animate={{ opacity: 1, y: 0}} 
                             transition={{ 
                                 type: "spring",
                                 stiffness: 100,
                                 damping: 10,
                                 delay: .8,
                             }}  type="text" placeholder='Company' className='input-style w-full lg:w-[250px]'/>
                        <motion.input
                             initial={{ opacity: 0, y: -100 }} 
                             animate={{ opacity: 1, y: 0}} 
                             transition={{ 
                                 type: "spring",
                                 stiffness: 100,
                                 damping: 10,
                                 delay: .8,
                             }}  type="text" placeholder='Message' className='input-style w-full lg:w-[250px]'/>
                    </div>
                    <motion.button
                             initial={{ opacity: 0, y: -100 }} 
                             animate={{ opacity: 1, y: 0}} 
                             transition={{ 
                                 type: "spring",
                                 stiffness: 100,
                                 damping: 10,
                                 delay: 1.5,
                             }} className='primary-btn'>Get In Touch</motion.button>
                </div>
                {/* image section */}
                <div className='col-span-3'>
                    <motion.img
                    initial={{ opacity: 0, y: -100 }} 
                    animate={{ opacity: 1, y: 0}} 
                    transition={{ 
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: .6,
                    }}  
                    src={FormImage} alt="" className='w-full sm:w-[400px] mx-auto'/>
                </div>
            </div>
            <div>
                <h3 className='text-center font-bold italic text-3xl darkGrey'>Experience Smart Desk Today!</h3>
            </div>
        </div>
}

export default Contactus