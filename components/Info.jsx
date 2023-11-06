import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'


const Info = () => {
  return (
    <div className='grid grid-cols-2 gap-10 max-w-[1290px] justify-center my-10  z-10'>
        <div className='bg-gradient-to-br flex flex-col gap-4 from-[#31353D] to-[#292929] rounded-xl border border-[#38453F] p-5'>
            <h3 className='font-semibold text-[24px]'>Exclusive Access and Utility</h3>
            <p className='text-[#ABABAB]'>Ai1 holders gain access to a suite of premium <span className='text-white font-semibold'>f</span>eatures on the Ai1 platform. This incl<span className='text-white font-semibold'>u</span>des state-of-the-art trading algori<span className='text-white font-semibold'>t</span>hms, in-depth market analytics, and more, empowering <span className='text-white font-semibold'>u</span>se<span className='text-white font-semibold'>r</span>s to navigat<span className='text-white font-semibold'>e</span> the complexitie<span className='text-white font-semibold'>s</span> of the financial markets with enhanced tools and knowledge.</p>
            <Link className='rounded-full px-4 py-2 w-fit bg-[#676809] duration-100 ease-linear transition-all hover:shadow-[0px_0px_30px_2px_#676809] flex items-center gap-3 shadow-[0px_0px_0px_0px_#676809]' href={'#'}><p>Learn more</p> <ArrowUpRightIcon width={18} h={18}/></Link>
        </div>
        <div className='bg-gradient-to-br flex flex-col gap-4 from-[#31353D] to-[#292929] rounded-xl border border-[#38453F] p-5'>
            <h3 className='font-semibold text-[24px]'>Innovative Reward Mechanism</h3>
            <p className='text-[#ABABAB]'>A unique aspect of holding Ai1 is its integrated lottery system. <span className='text-white font-semibold'>W</span>ith each Ai1 transaction, a lottery event is initiated, giv<span className='text-white font-semibold'>i</span>ng token holders a cha<span className='text-white font-semibold'>n</span>ce to <span className='text-white font-semibold'>win</span> 50% of the trans5tion&apos;s taxes. This reward system of Ai1 adds an element of excitement and engagement for the community.</p>
            <Link className='rounded-full px-4 py-2 w-fit bg-[#676809] duration-100 ease-linear transition-all hover:shadow-[0px_0px_30px_2px_#676809] flex items-center gap-3 shadow-[0px_0px_0px_0px_#676809]' href={'#'}><p>Learn more</p> <ArrowUpRightIcon width={18} h={18}/></Link>
        </div>
        <div className='bg-gradient-to-br col-span-2 flex flex-col gap-4 from-[#31353D] to-[#292929] rounded-xl border border-[#38453F] p-5'>
            <h3 className='font-semibold text-[24px]'>Fair and Transparent Distribution</h3>
            <p className='text-[#ABABAB] text-[20px]'>Ai1 adheres to a principle of 100% fair launch, with no team allocations or private pre-sales. This equitable approach guarantees a level playing field for all investors and underscores our dedication to fairness and transparency.</p>
        </div>
    </div>
  )
}

export default Info