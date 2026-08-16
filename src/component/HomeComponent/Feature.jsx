import React from 'react'

const Feature = () => {
    const data=[
        {
            img :"https://www.debsaipl.in/static/media/Faster%20Delivery.d499a710ba28fe8d720a.png",
            heading :"Faster Delivery",
            para :"Get your products swiftly with our efficient, rapid delivery service, saving you time."
        },
        {
            img :"https://www.debsaipl.in/static/media/EasyToUse.8aa7f8b4c0c63e55e3d6.png",
            heading :"Easy To Use",
            para :"Enjoy a user-friendly experience with simple, intuitive interfaces designed for everyone."
        },
        {
            img :"https://www.debsaipl.in/static/media/247support.b7c47b35870cf9d7891b.png",
            heading:"24/7 Support",
            para :"Access round-the-clock customer support, always available to assist you anytime, day or night."
        }
    ]
  return (
    <div className='mt-5 bg-white w-full h-full '>
        <div className='text-center text-black flex-col'>
      <h1 className='text-4xl md:text-5xl'>What We Feature</h1>
      <p className='mt-2 text-lg md:text-1xl '>Highlights our top services and offerings, showcasing quality, innovation,<br/>and customer satisfaction to meet your needs.</p>
      </div>
      <div className='flex'>
       {data.map((item , index)=>(
          <div key={index} className='bg-white rounded-xl shadow-md p-[70px] text-center'>
            <img src={item.img} alt={item.heading} className='w-full h-[70%] object-contain  rounded-lg mx-auto '/>
            <h2 className='text-2xl font-normal text-[#2D8014] mt-2 text-center'> {item.heading}</h2>
            <p className='text-lg text-black' text-center> {item.para}</p>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Feature
