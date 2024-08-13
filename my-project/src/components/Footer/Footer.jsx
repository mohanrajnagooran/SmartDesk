import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import {
  FaFacebook,
  FaLinkedinIn ,
  FaInstagram
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { delay } from 'framer-motion';
import {motion} from "framer-motion";

const Footer = () => {
  return (
    <div className='bg-orange-400 from-primary to-primaryDark pt-12 pb-8 text-white'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company detail section */}
          <motion.div 
            initial={{ opacity: 0, y:100 }}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true, amount: 0.5}}
            transition={{
              delay:0.2,
              duration:0.3,
            }}
          className='space-y-3 space-x-2'>
            <h1 className='text-3xl font-bold uppercase'><span className='text-darkGrey'>Smart</span> Desk.</h1>
            <p className='text-1xl font-bold max-w-[300px]'>Your WorkSpace, Your Way</p>
          </motion.div>
         
          {/* social media link section */}
          <motion.div 
            initial={{ opacity: 0, y:100 }}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true, amount: 0.5}}
            transition={{
              delay:0.2,
              duration:0.3,
            }}
              className='space-y-6'>
                <h4 className='text-2xl font-semibold'>Follow Us</h4>
                <div className='flex items-center gap-4'>
                  <p className='text-2xl hover:scale-105 duration-300'><FaFacebook /></p>
                  <p className='text-2xl hover:scale-105 duration-300'><FaLinkedinIn /></p>
                  <p className='text-2xl hover:scale-105 duration-300'><FaInstagram /></p>
                  <p className='text-2xl hover:scale-105 duration-300'><FaXTwitter /></p>
              </div>
            
          </motion.div>

          {/* help link section */}
          <motion.div
          initial={{ opacity: 0, y:100 }}
          whileInView={{ opacity: 1, y: 0}}
          viewport={{ once: true, amount: 0.5}}
          transition={{
            delay:0.2,
            duration:0.3,
          }}
              className='space-y-2 '>
                <h4 className='text-2xl font-semibold'>Our Customer Team Is Ready To Help</h4>
                <p className='flex items-center gap-4'><FaPhone /><span>+91 98450 00176</span> </p>
                <p className='flex items-center gap-4'><IoIosMail />sales@smartdesk.in</p>
          </motion.div>
        </div>
        
        {/* copyright section */}
        <motion.div
        initial={{ opacity: 0, y:60 }}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true, amount: 0.5}}
        transition={{
          delay:0.1,
          duration:0.6,
        }}
        >

          <p className='text-white text-center mt-2 pt-4 border-t-2'>Copyright &copy; 2024 Smart Desk. All Rights Reserved</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Footer