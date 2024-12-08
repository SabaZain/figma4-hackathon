import React from 'react'
import Image from 'next/image';

const LatestProducts = () => {
  return (
    <div className='w-full px-32 mt-8'>
    <div>
      <h1 className='text-2xl text-secondary text-center font-semibold'>Leatest Products</h1>
    </div>
    <div>
        <ul className='flex justify-center align items-center gap-6 mt-4'>
            <li className='text-main'>New Arrival</li>
            <li className='text-secondary'>Best Seller</li>
            <li className='text-secondary'>Featured</li>
            <li className='text-secondary'>Special Offer</li>
        </ul>
    </div>
    <div className='flex flex-col md:flex-row lg:flex-row justify-around'>
    <div>
    <Image src="/Image/LP1.svg" alt="Latest product" width={230} height={230} className='bg-[#F6F7FB] mt-8' /> 
    <div className='flex gap-4 mt-3'>
        <h2 className='text-secondary text-sm'>Comfort Handy Craft</h2>
        <div className='flex'>
        <h3 className='text-secondary text-sm'>$42.00</h3>
        <h4 className='text-main text-sm'>$65.00</h4>
        </div>
    </div>
    </div>

    <div>
    <Image src="/Image/LP22.svg" alt="Latest product" width={300} height={300} className='bg-[#F6F7FB] mt-8' />
    
    <div className='flex gap-4 mt-3'>
        <h2 className='text-secondary text-sm'>Comfort Handy Craft</h2>
        <div className='flex'>
        <h3 className='text-secondary text-sm'>$42.00</h3>
        <h4 className='text-main text-sm'>$65.00</h4>
        </div>
    </div>
    </div>

    <div>
    <Image src="/Image/LP3.svg" alt="Latest product" width={230} height={230} className='bg-[#F6F7FB] mt-8' /> 
    <div className='flex gap-4 mt-3'>
        <h2 className='text-secondary text-sm'>Comfort Handy Craft</h2>
        <div className='flex'>
        <h3 className='text-secondary text-sm'>$42.00</h3>
        <h4 className='text-main text-sm'>$65.00</h4>
        </div>
    </div>
    </div>
    </div> 

    <div className='flex flex-col md:flex-row lg:flex-row justify-around'>
    <div>
    <Image src="/Image/LP4.svg" alt="Latest product" width={230} height={230} className='bg-[#F6F7FB] mt-8' /> 
    <div className='flex gap-4 mt-3'>
        <h2 className='text-secondary text-sm'>Comfort Handy Craft</h2>
        <div className='flex'>
        <h3 className='text-secondary text-sm'>$42.00</h3>
        <h4 className='text-main text-sm'>$65.00</h4>
        </div>
    </div>
    </div>

    <div>
    <Image src="/Image/LP5.svg" alt="Latest product" width={230} height={230} className='bg-[#F6F7FB] mt-8' /> 
    <div className='flex gap-4 mt-3'>
        <h2 className='text-secondary text-sm'>Comfort Handy Craft</h2>
        <div className='flex'>
        <h3 className='text-secondary text-sm'>$42.00</h3>
        <h4 className='text-main text-sm'>$65.00</h4>
        </div>
    </div>
    </div>

    <div>
    <Image src="/Image/LP6.svg" alt="Latest product" width={230} height={230} className='bg-[#F6F7FB] mt-8' /> 
    <div className='flex gap-4 mt-3'>
        <h2 className='text-secondary text-sm'>Comfort Handy Craft</h2>
        <div className='flex'>
        <h3 className='text-secondary text-sm'>$42.00</h3>
        <h4 className='text-main text-sm'>$65.00</h4>
        </div>
    </div>
    </div>
    </div> 
    </div>
  )
}

export default LatestProducts;
