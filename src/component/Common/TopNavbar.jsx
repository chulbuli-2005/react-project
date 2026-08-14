import React from 'react'
import {Phone , Mail, Play} from 'lucide-react';
import { FaFacebookF } from "react-icons/fa6";
import { FaGooglePlay , FaInstagram ,FaWhatsapp} from "react-icons/fa";

const TopNavbar = () => {
  return (
    <div className='flex justify-between bg-[#191C1F] px-16 py-2'>
        <div className='flex justify-center item-center gap-4'>
            <p className='text-white flex items-center gap-3'>
               <span className="text-[#2d8014]">
                <Phone/>
               </span>
               +91 82491 99420
            </p>
            <p className='text-white flex items-center gap-3'>
                <span className="text-[#2d8014]">
                    <Mail/>
                </span>
                chulbulisahoo@gmail.com
            </p>
        </div>
      <div className='flex space-around'>
        <ul className='flex justify-between gap-4'>
        <li className='text-[#2d8014]'><FaGooglePlay/> </li>
        <li className='text-[#2d8014]'><FaFacebookF/> </li>
        <li className='text-[#2d8014]'><FaInstagram/></li>
        <li className='text-[#2d8014]'><FaWhatsapp /></li>
        </ul>
      </div>
    </div>
  )
}

export default TopNavbar
