import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import profileImage from '../public/photo.jpg'

const SideBar = () => {
    return (
        <div className='fixed w-16 md:w-20'>
            <div className='flex flex-col justify-between  h-screen bg-white border-r-[1px] p-2 pt-5 md:p-4 '>
                <div className='flex flex-col items-center'>
                    <Link href='/'>
                        <div className='bg-purple-800 text-white rounded-lg font-bold p-3 inline-block '>
                            <RxSketchLogo size={20} />
                        </div>
                    </Link>
                    <span className='border-b-[2px] border-gray-200 w-full p-1'></span>
                    <Link href='/'>
                        <div className='bg-gray-100 hover:bg-gray-200 rounded-lg font-bold p-3 my-4 inline-block cursor-cursor-pointer '>
                            <RxDashboard size={20} />
                        </div>
                    </Link>
                    <Link href='/customers'>
                        <div className='bg-gray-100 hover:bg-gray-200 rounded-lg font-bold p-3 my-4 inline-block cursor-cursor-pointer '>
                            <RxPerson size={20} />
                        </div>
                    </Link>
                    <Link href='/orders'>
                        <div className='bg-gray-100 hover:bg-gray-200 rounded-lg font-bold p-3 my-4 inline-block cursor-cursor-pointer '>
                            <MdOutlineShoppingBag size={20} />
                        </div>
                    </Link>
                    <Link href='/settings'>
                        <div className='bg-gray-100 hover:bg-gray-200 rounded-lg font-bold p-3 my-4 inline-block cursor-cursor-pointer '>
                            <IoSettingsOutline size={20} />
                        </div>
                    </Link>
                </div>

                <div>
                    <Image src={profileImage} alt='profileImage' className='rounded-md' ></Image>
                </div>
            </div>
        </div>
    )
}

export default SideBar