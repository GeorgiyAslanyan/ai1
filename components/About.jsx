'use client'
import React from 'react'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div className='grid grid-cols-3 max-w-[1290px] mt-10 w-full'>
        <motion.div initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay:0.7 }}
      variants={{
        visible: { opacity: 1, translateX: '12px' },
        hidden: { opacity: 0, translateX: '100px' }
      }} className='bg-gradient-to-r col-span-1 flex flex-col gap-4 translate-x-3 from-[#31353D] to-[#292929] rounded-xl border border-[#38453F] p-5'>
            <h3 className='font-bold text-[24px] upperase bg-clip-text text-transparent bg-gradient-to-r from-white to-[#AFAFAF]'>TOTAL SUPPLLY</h3>
            <p className='text-[#ABABAB] text-[20px]'>100.000.000 Ai1 tokens</p>
        </motion.div>
        <motion.div  initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay:0.35 }}
      variants={{
        visible: { opacity: 1, translateX: '-12px' },
        hidden: { opacity: 0, translateX: '100px' }
      }}  className='bg-gradient-to-r col-span-1 flex flex-col -translate-x-3 from-[#31353D] to-[#292929] rounded-xl border border-[#38453F] p-5'>
            <h3 className='font-bold text-[24px] upperase mb-4 bg-clip-text text-transparent  bg-gradient-to-r from-white to-[#AFAFAF]'>TAXES</h3>
            <p className='text-[#ABABAB] text-[20px]'>Transfer, Buy and Sell: 6%</p>
            <p className='text-[#ABABAB] text-[20px]'>3% development</p>
            <p className='text-[#ABABAB] text-[20px]'>3% holder rewards (lottery <br/>mechanism)</p>
        </motion.div>
        <motion.div  initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay:0 }}
      variants={{
        visible: { opacity: 1, translateX: '-24px' },
        hidden: { opacity: 0, translateX: '100px' }
      }} className='bg-gradient-to-r col-span-1 flex flex-col -translate-x-6 gap-4 from-[#31353D] to-[#292929] rounded-xl border border-[#38453F] p-5'>
            <h3 className='font-bold text-[24px] upperase bg-clip-text text-transparent  bg-gradient-to-r from-white to-[#AFAFAF]'>LIQUIDITY</h3>
            <p className='text-[#ABABAB] text-[20px]'>Locked on Uncrypt</p>
        </motion.div>
    </div>
  )
}

export default About