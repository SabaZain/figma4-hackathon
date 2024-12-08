import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { TbPhoneRinging } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiAccountBoxFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
    {/*Topbar*/}
  return (
    
    <div className='bg-primary hidden md:flex lg:flex justify-between align items-center w-full p-2 px-40'>
        <div className='flex gap-6'>
        <div className='flex justify-start align items-center gap-2'>
        <IoMailOutline className='text-[#F1F1F1]'/>
        <h2 className='text-[#F1F1F1]'>mhhasanul@gmail.com</h2>
        </div>
        <div className='flex items-center gap-2'>
        <TbPhoneRinging className='text-[#F1F1F1]'/>
        <span className='text-[#F1F1F1]'>(12345)67890</span>
        </div>
        </div>
        <div>
            <ul className='flex gap-4'>
            <div className='flex items-center'>
            <li className='text-[#F1F1F1]'>English </li>
            <RiArrowDropDownLine size={30} className='text-[#F1F1F1]'/>
            </div>
            <div className='flex items-center'>
            <li className='text-[#F1F1F1]'>USD</li>
            <RiArrowDropDownLine size={30} className='text-[#F1F1F1]'/>
            </div>
            <div className='flex items-center gap-1'>
            <li className='text-[#F1F1F1]'>Login</li>
            <RiAccountBoxFill size={20} className='text-[#F1F1F1]'/>
            </div>
            <div className='flex items-center gap-1'>
            <li className='text-[#F1F1F1]'>Wishlist</li>
            <FaRegHeart size={15} className='text-[#F1F1F1]'/>
            </div>
            <IoCartOutline size={25} className='text-[#F1F1F1]'/>
            </ul>
        </div>
      </div>
);
};

export default Navbar;
