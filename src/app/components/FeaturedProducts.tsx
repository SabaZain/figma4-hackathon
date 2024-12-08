import React from 'react'
import Image from 'next/image';
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";

const FeaturedProducts = () => {
  return (
    <div className='w-full px-32 mt-8'>
    <div>
      <h1 className='text-2xl text-secondary text-center font-semibold'>Featured Products</h1>
    </div>
    <div className='flex flex-col md:flex-row lg:flex-row gap-6 mt-8'>
    <div>
    <Image src="/Image/product1.svg" alt="product 1" width={230} height={230} className='bg-[#F6F7FB]' /> 
    <h2 className='text-[18px] text-main font-bold px-12'>Cantilever chair</h2>
    <h3>
        <ul className='flex gap-1 px-20'>
        <Image src="/Image/green.svg" alt="green" width={10} height={10} /> 
        <Image src="/Image/pink.svg" alt="pink" width={10} height={10} /> 
        <Image src="/Image/blue.svg" alt="blue" width={10} height={10} /> 
        </ul>
    </h3>
    <h4 className='text-secondary text-[14px] px-16'>Code - Y523201</h4>
    <h5 className='text-secondary text-[14px] px-20'>$42.00</h5>

    </div>

    <div>
      <div className='bg-[#F6F7FB]'>
    <div className='flex justify-start align items-center gap-3 p-1 bg-[#F6F7FB]'>
    <IoCartOutline size={20} className='text-secondary'/>
    <FaRegHeart size={15} className='text-secondary'/>
    <FaSearchPlus size={15} className='text-secondary' />
    </div>
    <Image src="/Image/product2.svg" alt="product 1" width={200} height={200} /> 
    </div>
    <h2 className='text-[18px] text-main font-bold px-12'>Cantilever chair</h2>
    <h3>
        <ul className='flex gap-1 px-20'>
        <Image src="/Image/green.svg" alt="green" width={10} height={10} /> 
        <Image src="/Image/pink.svg" alt="pink" width={10} height={10} /> 
        <Image src="/Image/blue.svg" alt="blue" width={10} height={10} /> 
        </ul>
    </h3>
    <h4 className='text-secondary text-[14px] px-16'>Code - Y523201</h4>
    <h5 className='text-secondary text-[14px] px-20'>$42.00</h5>

    </div>

    <div>
    <Image src="/Image/product3.svg" alt="product 1" width={230} height={230} className='bg-[#F6F7FB]'/> 
    <h2 className='text-[18px] text-main font-bold px-12'>Cantilever chair</h2>
    <h3>
        <ul className='flex gap-1 px-20'>
        <Image src="/Image/green.svg" alt="green" width={10} height={10} /> 
        <Image src="/Image/pink.svg" alt="pink" width={10} height={10} /> 
        <Image src="/Image/blue.svg" alt="blue" width={10} height={10} /> 
        </ul>
    </h3>
    <h4 className='text-secondary text-[14px] px-16'>Code - Y523201</h4>
    <h5 className='text-secondary text-[14px] px-20'>$42.00</h5>

    </div>

    <div>
    <Image src="/Image/product4.svg" alt="product 1" width={230} height={230} className='bg-[#F6F7FB] p-8' /> 
    <h2 className='text-[18px] text-main font-bold px-12'>Cantilever chair</h2>
    <h3>
        <ul className='flex gap-1 px-20'>
        <Image src="/Image/green.svg" alt="green" width={10} height={10} /> 
        <Image src="/Image/pink.svg" alt="pink" width={10} height={10} /> 
        <Image src="/Image/blue.svg" alt="blue" width={10} height={10} /> 
        </ul>
    </h3>
    <h4 className='text-secondary text-[14px] px-16'>Code - Y523201</h4>
    <h5 className='text-secondary text-[14px] px-20'>$42.00</h5>
    </div>
    </div>
    </div>
  )
}

export default FeaturedProducts;
