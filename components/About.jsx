'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";


const About = () => {
  return (
    <>
    <div className='hidden lg:grid grid-cols-1 lg:grid-cols-3 max-w-[1290px] z-10 mt-10 w-[96%] lg:w-full'>
        <motion.div initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay:0.7 }}
      variants={{
        visible: { opacity: 1, translateX: '12px' },
        hidden: { opacity: 0, translateX: '100px' }
      }} className='bg-[#3b3b3b]  bg-opacity-60 col-span-1 flex flex-col gap-4 translate-x-3 backdrop-blur-lg rounded-xl border border-[#3b3b3b] p-5'>
            <h3 className='font-bold text-[24px] upperase bg-clip-text text-transparent bg-gradient-to-r from-white to-[#AFAFAF]'>TOTAL SUPPLLY</h3>
            <p className='text-[#ABABAB]'>100.000.000 Ai1 tokens</p>
        </motion.div>
        <motion.div  initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay:0.35 }}
      variants={{
        visible: { opacity: 1, translateX: '-12px' },
        hidden: { opacity: 0, translateX: '100px' }
      }}  className='bg-[#3b3b3b]  bg-opacity-60 col-span-1 flex flex-col -translate-x-3 backdrop-blur-lg  rounded-xl border border-[#3b3b3b] p-5'>
            <h3 className='font-bold text-[24px] upperase mb-4 bg-clip-text text-transparent  bg-gradient-to-r from-white to-[#AFAFAF]'>TAXES</h3>
            <p className='text-[#ABABAB]'>Transfer, Buy and Sell: 6%</p>
            <p className='text-[#ABABAB]'>3% development</p>
            <p className='text-[#ABABAB]'>3% holder rewards (lottery <br/>mechanism)</p>
        </motion.div>
        <motion.div  initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay:0 }}
      variants={{
        visible: { opacity: 1, translateX: '-24px' },
        hidden: { opacity: 0, translateX: '100px' }
      }} className='bg-[#3b3b3b]  bg-opacity-60 col-span-1 flex flex-col -translate-x-6 gap-4 backdrop-blur-lg  rounded-xl border border-[#3b3b3b] p-5'>
            <h3 className='font-bold text-[24px] upperase bg-clip-text text-transparent  bg-gradient-to-r from-white to-[#AFAFAF]'>LIQUIDITY</h3>
            <p className='text-[#ABABAB]'>Locked on Uncrypt</p>
        </motion.div>
        <motion.a initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay:0.8 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0}
      }} 
          className="rounded-full ml-3 sm:self-start z-10 mt-5 px-4 py-2 w-fit bg-[#676809] duration-100 ease-linear transition-all hover:shadow-[0px_0px_30px_2px_#676809] flex items-center gap-3 shadow-[0px_0px_0px_0px_#676809]"
          href={"#"}>
          <p>Documentation</p> <ArrowUpRightIcon width={18} h={18} />
        </motion.a>
    </div>
    <div className='grid lg:hidden grid-cols-1 gap-4 lg:grid-cols-3 max-w-[1290px] mt-10 w-[96%] lg:w-full'>
        <motion.div initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay:0 }}
      variants={{
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: '40px' }
      }} className='bg-[#3b3b3b]  bg-opacity-60 col-span-1 flex flex-col gap-4   backdrop-blur-lg  rounded-xl border border-[#3b3b3b] p-[10px] sm:p-5'>
            <h3 className='font-bold text-[24px] upperase bg-clip-text text-transparent bg-gradient-to-r from-white to-[#AFAFAF]'>TOTAL SUPPLLY</h3>
            <p className='text-[#ABABAB]'>100.000.000 Ai1 tokens</p>
        </motion.div>
        <motion.div  initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay:0.35 }}
      variants={{
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: '40px' }
      }}  className='bg-[#3b3b3b]  bg-opacity-60 col-span-1 flex flex-col    backdrop-blur-lg  rounded-xl border border-[#3b3b3b] p-[10px] sm:p-5'>
            <h3 className='font-bold text-[24px] upperase mb-4 bg-clip-text text-transparent  bg-gradient-to-r from-white to-[#AFAFAF]'>TAXES</h3>
            <p className='text-[#ABABAB]'>Transfer, Buy and Sell: 6%</p>
            <p className='text-[#ABABAB]'>3% development</p>
            <p className='text-[#ABABAB]'>3% holder rewards (lottery <br/>mechanism)</p>
        </motion.div>
        <motion.div  initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay:0.7 }}
      variants={{
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: '40px' }
      }} className='bg-[#3b3b3b]  bg-opacity-60 col-span-1 flex flex-col gap-4  backdrop-blur-lg  rounded-xl border border-[#3b3b3b] p-[10px] sm:p-5'>
            <h3 className='font-bold text-[24px] upperase bg-clip-text text-transparent  bg-gradient-to-r from-white to-[#AFAFAF]'>LIQUIDITY</h3>
            <p className='text-[#ABABAB]'>Locked on Uncrypt</p>
        </motion.div>
        <motion.a initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay:0.8 }}
      variants={{
        visible: { opacity: 1},
        hidden: { opacity: 0 }
      }} 
          className="rounded-full justify-self-center z-10 mt-5 px-4 py-2 w-fit bg-[#676809] duration-100 ease-linear transition-all hover:shadow-[0px_0px_30px_2px_#676809] flex items-center gap-3 shadow-[0px_0px_0px_0px_#676809]"
          href={"#"}>
          <p>Documentation</p> <ArrowUpRightIcon width={18} h={18} />
        </motion.a>
    </div>
    </>
    
  )
}

export default About