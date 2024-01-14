import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

export const Footer = () => {
    return (
        <div className='flex items-center justify-between bg-orange-700 
        md:gap-28 gap-20 py-6 md:px-60 px-32'>
            <div className='flex flex-col h-44 items-center justify-center'>
                <ul className='flex flex-col gap-2 text-white mx-auto text-4xl cursor-pointer'>
                    <li><FaFacebook /></li>
                    <li><FaInstagramSquare /></li>
                    <li><FaYoutube /></li>
                </ul>
                <p className='text-white pt-6'>© 2023 ombeltran.</p>
            </div>
            <div>
                <ul className='flex flex-col gap-6 text-white mx-auto text-xl cursor-pointer'>
                    <li className='flex justify-between w-36'>
                        <FaPhone className='scale-125' />
                        325675656
                    </li>
                    <li className='flex justify-between w-36'>
                        <IoLogoWhatsapp className='scale-125' />
                        325675656
                    </li>
                </ul>
            </div>
        </div>
    )
}
