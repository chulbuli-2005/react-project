import React from 'react'

const ButtomNavbar = () => {
  return (
    <div>
      <div className='flex mt-3 justify-between bg-white text-black-300 items-center px-5'>
        <img src="https://www.debsaipl.in/static/media/logo.3972d7bb875cfd6b6a8cde6ad1f60c16.svg" alt="image" className='h-14 w-auto '/> 
        <div>
            <ul className='flex justify-center gap-5'>
                <li className='text-base font-normal text-[#2d8014]'>Home</li>
                <li className='text-base font-normal '>About</li>
                <li className='text-base font-normal '>Service</li>
                <li className='text-base font-normal '>Contact</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default ButtomNavbar
