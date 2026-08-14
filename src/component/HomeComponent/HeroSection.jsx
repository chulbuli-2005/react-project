import React from 'react'

function HeroSection() {
  return (
    <div>
        <div class="h-screen w-full bg-cover bg-center"
        style={{backgroundImage:'url(https://www.debsaipl.in/static/media/banara.def3516a5d0993bd196c.png)'}}
        >
            {/* <img src="" alt="" /> */}
            <div className='px-20 pt-20'>
            <p className='text-[#2d8014] text-2xl'>Welcome to <strong>Deb Online Shopping Store</strong></p>
            <h2 className='text-6xl tacking-wide leading-tight'>We Provide Delivery <br />
                Within 30 Min</h2>
            <p className='text-1xl tacking-wide leading-tight'>We offer exceptional delivery service, ensuring your orders arrive within 30 <br/>minutes directly</p>
            <div className='mt-4 flex justify-start items-center gap-10'>
                <button className="bg-green-700 rounded-full px-10 py-4 text-center">Get Started</button>
                <button className='bg-white text-[#2d8014] px-10 py-3 border-2 border-[#2d8014] rounded-full text-center'> Order Step</button>
            </div>
            <div className='flex items-center gap-10 mt-6'>
                <div>
                    <span className='text-5xl text-[#2d8014] font-medium'>40K</span>
                    <p className='mt-5 text-lg'>Satisfied Customer</p>
                </div>
                <div>
                    <span  className='text-5xl text-[#2d8014] font-medium'>45K</span>
                    <p className='mt-5 text-lg'>Food Delivered</p>
                </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default HeroSection