import React from 'react'
import Image from 'next/image';

const ShopexOffer = () => {
  return (
    <div>
      <div className='mt-8'>
      <h1 className='text-2xl text-secondary text-center font-semibold'>What Shopex Offer!</h1>
    </div>
    <div className='flex justify-evenly items-center px-3.5 md:px-6 lg:px-6 mt-8'>
    <div className='border border-slate-500 shadow-lg p-3 text-center'>
    <Image src="/Image/freedelivery.svg" alt="free delivery" width={50} height={50} className='bg-[#F6F7FB] mt-8 ml-6 md:ml-14 lg:ml-14' /> 
    <h1 className='text-secondary'>24/7 Support</h1>
    <p className='font-extralight text-sm'>Lorem ipsum dolor sit amet,
    <br/> consectetur adipiscing elit.
    <br /> Massa purus gravida.</p>
    </div>

    <div className='border border-slate-500 shadow-lg p-3 text-center'>
    <Image src="/Image/cashback.svg" alt="cash back" width={50} height={50} className='bg-[#F6F7FB] mt-8 ml-6 md:ml-14 lg:ml-14' /> 
    <h1 className='text-secondary'>24/7 Support</h1>
    <p className='font-extralight text-sm'>Lorem ipsum dolor sit amet,
    <br/> consectetur adipiscing elit.
    <br /> Massa purus gravida.</p>
    </div>

    <div className='border border-slate-500 shadow-lg p-3 text-center'>
    <Image src="/Image/premiumquality.svg" alt="premium quality" width={50} height={50} className='bg-[#F6F7FB] mt-8 ml-6 md:ml-14 lg:ml-14' /> 
    <h1 className='text-secondary'>24/7 Support</h1>
    <p className='font-extralight text-sm'>Lorem ipsum dolor sit amet,
    <br/> consectetur adipiscing elit.
    <br /> Massa purus gravida.</p>
    </div>

    <div className='border border-slate-500 shadow-lg p-3 text-center'>
    <Image src="/Image/24-hours.svg" alt="24-hours" width={50} height={50} className='bg-[#F6F7FB] mt-8 ml-6 md:ml-14 lg:ml-14' /> 
    <h1 className='text-secondary'>24/7 Support</h1>
    <p className='font-extralight text-sm'>Lorem ipsum dolor sit amet,
    <br/> consectetur adipiscing elit.
    <br /> Massa purus gravida.</p>
    </div>
    </div>
    </div>
  )
}

export default ShopexOffer;
