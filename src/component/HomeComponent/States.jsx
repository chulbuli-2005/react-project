import React from 'react'

const States = () => {
    const data=[
        {
            img :"https://www.debsaipl.in/static/media/SatisfiedCustomer.9d08b67f355b19d7d79e.png",
            heading :"10k",
            para :"Satisfied Customer"
        },
        {
            img :"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgA…bAy0sLCwsLCwsLCwsspP/Bz6N6QZ3LVkEAAAAAElFTkSuQmCC",
            heading :"100k",
            para :"Food Delivered"
        },
        {
            img :"https://www.debsaipl.in/static/media/TrustedPartner.290de2413d7872ae6d01.png",
            heading :"25k",
            para :"Trusted Partners"
        },
        {
            img :"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgA…00kgjjTTSSCONNNJII4r/B3IBY+vUWfGqAAAAAElFTkSuQmCC",
            heading :"15k",
            para :"Experienced Drivers"
        },

    ];
  return (
    <div className='w-full bg-white py-10 px-4 '>
      <h1 className='text-center text-3xl md:text-5xl text-black mt-4'>Look at Our Numbers</h1>
     
        <div className='grid grid-cols-4 gap-6 px-8 mt-4'>
             {data.map((item , index)=>(
                <div className='flex flex-col items-center text-center'>
            <img src={item.img} alt={item.heading} className='items-center mt-4' w-full/>
            <h2 className='text-5xl font-normal text-[#2D8014] mt-2'> {item.heading}</h2>
            <p className='text-black mt-2 text-lg'> {item.para}</p>

        </div>
      ))}
    </div>
    </div>
  )
}

export default States
