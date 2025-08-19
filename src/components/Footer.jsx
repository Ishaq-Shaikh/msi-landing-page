import React from 'react'
import { RiCustomerService2Line } from "react-icons/ri";
import { ImAirplane } from "react-icons/im";
import { GiConsoleController } from "react-icons/gi";
import { SiDragonframe } from "react-icons/si";

const Footer = () => {
    return (
        <>
            <div className='w-full bg-[#ECECEC] h-[60px] flex justify-evenly'>
                <div className='flex pt-2 pl-7 font-pop hover:cursor-pointer'>
                    <RiCustomerService2Line className='pt-2 text-[40px]' />
                    <h1 className='text-2xl pt-2 h-[36px] hover:border-b-[1px] border-black '>MSI Center</h1>
                </div>
                <div className='flex pt-2 pl-7 font-pop hover:cursor-pointer'>
                    <ImAirplane className='pt-2 text-[40px]' />
                    <h1 className='text-2xl pt-2 h-[36px] hover:border-b-[1px] border-black '>Afterburner</h1>
                </div>
                <div className='flex pt-2 pl-7 font-pop hover:cursor-pointer'>
                    <GiConsoleController className='pt-2 text-[40px]' />
                    <h1 className='text-2xl pt-2 h-[36px] hover:border-b-[1px] border-black '>MSI App Player</h1>
                </div>
                <div className='flex pt-2 pl-7 font-pop hover:cursor-pointer'>
                    <SiDragonframe className='pt-2 text-[40px]' />
                    <h1 className='text-2xl pt-2 h-[36px] hover:border-b-[1px] border-black '>My MSI App</h1>
                </div>
            </div>
        </>
    )
}

export default Footer