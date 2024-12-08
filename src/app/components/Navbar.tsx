import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import Link from 'next/link';



const Navbar = () => {
  
    {/*Navbar*/}
  return (
    <div className=' flex justify-between align items-center w-full p-2 px-40'>
      <div className='flex items-center gap-12'>
        <h1 className='text-[34px] font-bold text-secondary'>Hekto</h1>
        <ul className='flex flex-col md:flex-row lg:flex-row items-center gap-2 md:gap-6 lg:gap-6'>
           <div className='flex items-center'> 
           <li className='text-[16px] font-normal text-main'><Link href="/">Home</Link></li>
           <RiArrowDropDownLine size={30} className='text-main'/>
           </div>
            <li className='text-[16px] font-normal text-secondary'>Pages</li>
            <li className='text-[16px] font-normal text-secondary'>Products</li>
            <li className='text-[16px] font-normal text-secondary'>Blog </li>
            <li className='text-[16px] font-normal text-secondary'><Link href="/Shop">Shop</Link></li>
            <li className='text-[16px] font-normal text-secondary'>Contact</li>
        </ul>
      </div>
      <div className='hidden md:flex lg:flex'>
        <input 
        type="text"
        placeholder=''
        className='border border-slate-400'
        />
        <IoIosSearch size={30} className='bg-main text-[#F1F1F1]' />
      </div>
    </div>
    
  )
}

export default Navbar;
