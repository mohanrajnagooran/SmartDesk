import React from "react";
import BgImage from "../../assets/bg-slate.png";
import DeskMain from "../../assets/home.png";
import Navbar from "../Navbar/Navbar";
import {motion} from "framer-motion"; 
import {FaFacebookF,FaTwitter,FaInstagram} from "react-icons/fa"

const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
};

const Hero = () => {
    const[sidebar, setSidebar] = React.useState(false);
  return (
    <main style={bgImage}>
        <section className='relative min-h-[730px] w-full'>
            <div className="container">
                {/* navbar section */}
                <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
                {/* hero section */}
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 place-items-center min-h-[720px]">
                {/* text content section */}
                    <div className= "text-lightOrange mt-[100px] md:mt-15 p-1 space-y-28">
                        <div className="relative z-10 space-y-4">
                            <motion.h2 
                                initial={{ opacity: 0, y: -100 }} 
                                animate={{ opacity: 1, y: 0}} 
                                transition={{ 
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: .5,
                                }}
                                className="text-5xl font-bold leading-tight">Welcome To Smart Desk</motion.h2>
                            <motion.h5 
                            initial={{ opacity: 0, y: -100 }} 
                            animate={{ opacity: 1, y: 0}} 
                            transition={{ 
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 1,
                            }}
                                className=" text-2xl opacity-155 leading-loose"> - Redefining Workspace Solutions</motion.h5>
                        </div>
                    </div>
                {/* image section */}
                    <div className="relative">
                        <motion.img 
                        initial={{ opacity: 0, scale: 0 }} 
                        animate={{ opacity: 1, scale:1 }} 
                        transition={{ 
                            type: "spring",
                            stiffness: 100,
                            damping: 5,
                            delay: 0,
                        }}
                        src={DeskMain} alt="" className="relative z-40 h-[500px] md:h-[500px] img-shadow"/>
                        {/* orange circle ring */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0 }} 
                            animate={{ opacity: 1, scale:1 }} 
                            transition={{ 
                                type: "spring",
                                stiffness: 100,
                                damping: 5,
                                delay: 0,
                            }}
                        className="h-[180px] w-[400px] absolute top-14 -right-4 border-primary border-[20px] rounded-full z-10"></motion.div>

                        {/* big text section */}
                        <motion.div 
                            initial={{ opacity:0 , x: -100}}
                            animate={{opacity: 1, x: 0}}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 0.8,
                            }}
                            className="absolute -top-20 left-[200px] z-[1]">
                                <h1 className="text-[70px] scale-140 font-bold text-darkGrey/70 leading-none">
                                    Smart Desk
                                </h1>
                            </motion.div>
                    </div>
                </div>
            </div>
            {/* side menu section */}
            {
                sidebar && (
                <motion.div 
                    initial={{ x:"100%"}}
                    whileInView={{x:0}}
                    className="absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10 ">
                    <div className="w-full h-full flex justify-center items-center">
                        <div className=" flex flex-col justify-center items-center gap-6 text-white">
                            {/* line */}
                            <div className="w-[1px] h-[70px] bg-white"></div>
                            {/* social icons */}
                                <div className="inline-block p-2 rounded-full curser-pointer border border-white">
                                    <FaFacebookF className="text-2xl" />
                                </div>
                                <div className="inline-block p-2 rounded-full curser-pointer border border-white">
                                    <FaTwitter className="text-2xl" />   
                                </div>
                                <div className="inline-block p-2 rounded-full curser-pointer border border-white">
                                    <FaInstagram className="text-2xl" />
                                </div>
                            <div className="w-[1px] h-[70px] bg-white"></div>
                        </div>
                    </div>
            </motion.div>
                )
            }
            
        </section>
    </main>
  );
};

export default Hero;