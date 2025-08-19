import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiSearch2Line } from "react-icons/ri";

const Navbar = () => {
    return (
        <>
            <div className="h-[83px] w-full bg-white flex">
                <img src="https://storage-asset.msi.com/frontend/imgs/logo.png" className='h-[80px] w-auto pt-3 pl-4 hover:cursor-pointer' />
                <ul className='flex pt-9 pl-5 gap-6 font-pop text-[16px] font-semibold text-[#696969]'>
                    <li className='hover:border-b-solid hover:border-b-[4px] hover:border-black hover:text-black hover:cursor-pointer transition-all duration-300'>Products</li>
                    <li className='hover:border-b-solid hover:border-b-[4px] hover:border-black hover:text-black hover:cursor-pointer transition-all duration-300'>AIoT Solutions</li>
                    <li className='hover:border-b-solid hover:border-b-[4px] hover:border-black hover:text-black hover:cursor-pointer transition-all duration-300'>Business</li>
                    <li className='hover:border-b-solid hover:border-b-[4px] hover:border-black hover:text-black hover:cursor-pointer transition-all duration-300'>Community</li>
                    <li className='hover:border-b-solid hover:border-b-[4px] hover:border-black hover:text-black hover:cursor-pointer transition-all duration-300'>What's New</li>
                    <li className='hover:border-b-solid hover:border-b-[4px] hover:border-black hover:text-black hover:cursor-pointer transition-all duration-300'>Support</li>
                </ul>
                <div className='flex gap-5 pt-8 pl-90 text-[20px] text-[#696969]'>
                    <IoPersonOutline className='hover:text-black hover:cursor-pointer' />
                    <FaMapLocationDot className='hover:text-black hover:cursor-pointer' />
                    <RiSearch2Line className='hover:text-black hover:cursor-pointer' />
                </div>
            </div>
        </>
    )
}

export default Navbar