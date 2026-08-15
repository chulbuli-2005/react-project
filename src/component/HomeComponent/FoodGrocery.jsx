import React from 'react'

const FoodGrocery = () => {
   const data=[
    {
      img:"https://www.debsaipl.in/static/media/SpecialPrawns.f053cad227a07dde9af6.png",
      heading :" Ghee & Oil",
      para : "Special prawns, cooked to perfection, offering a rich, savory flavor with a fresh, oceanic taste."
    },
    {
      img:"https://www.debsaipl.in/static/media/EggNoodles.381a8920c9b0629277fe.png",
      heading :"Coldrinks",
      para : "Egg noodles, cooked al dente, delivering a soft, savory taste with a hint of spices."
    },
    {
      img : "https://www.debsaipl.in/static/media/EggOmlet.1dd695f82da9544808f2.png",
      heading :"Masala",
      para :"Fluffy egg omelet, perfectly seasoned, with a light texture and delightful filling for a satisfying meal."
    },
    {
      img :"https://www.debsaipl.in/static/media/Cauliflower.ab820f7f4f55f960453d.png",
      heading :"Veg",
      para :"Cauliflower, tender and lightly seasoned, providing a healthy, versatile addition to any meal."
    },
    {
      img :"https://www.debsaipl.in/static/media/SweetCorn.715374c733e3f548c09e.png",
      heading :"Nonveg",
      para :"Sweet corn, naturally crisp and juicy, with a burst of sweetness in every bite."
    
    },
    {
      img:"https://www.debsaipl.in/static/media/FreshVegetables.2bcbcabe6f7cd6241e2d.png",
      heading : "Biriyani",
      para :"Fresh vegetables, colorful and nutrient-packed, offering a crisp texture and refreshing taste in every dish."
    },
   ];
  return (
    <div className='mt-6 w-full h-full bg-white'>
      <h1 className='text-black text-5xl text-center '>Food & Grocery</h1>
      <div className='grid grid-cols-4  gap-6 p-8'>
        {data.map((item , index)=>(
          <div key={index} className={item.span === 2? "col-span-2":""}>
            <img src={item.img} alt={item.heading} className='w-full h-48 object-cover rounded-lg'/>
            <h2 className='text-2xl font-normal text-black mt-4'> {item.heading}</h2>
            <p className='text-gray-600 mt-2'> {item.para}</p>
          </div>
        ))}
{/* 
         <div>
           <img src={data[0].img} alt={data[0].heading} className="w-full rounded-lg"/>
          <h2 className="text-xl text-black mt-4"> {data[0].heading}</h2>
          <p className="text-gray-600 mt-2">"{data[0].para}"</p>  
        </div>
        {/* [0,1] → Image 2 + Image 3 */}
        {/* <div className="flex flex-row gap-6">
          
            <div>
            <img src={data[1].img}  alt={data[1].heading} className="w-full rounded-lg object-cover h-[500px]"/>
             <h2 className="text-xl text-black mt-3">{data[1].heading}</h2>
            <p className="text-gray-600 mt-2">"{data[1].para}"</p>
          </div>
          <div>
            <img src={data[2].img} alt={data[2].heading} className="w-full rounded-lg h-[500px] object-cover"/>
            <h2 className="text-xl text-black mt-3">{data[2].heading}</h2>
            <p className="text-gray-600 mt-2">"{data[2].para}" </p>
          </div>
        </div>

        
        <div className="flex flex-row gap-6">

          <div>
            <img src={data[3].img}  alt={data[3].heading} className="w-full rounded-lg object-cover h-[500px]"/>
             <h2 className="text-xl text-black mt-3">{data[3].heading}</h2>
            <p className="text-gray-600 mt-2">"{data[3].para}"</p>
          </div>
          <div>
            <img src={data[4].img} alt={data[4].heading} className="w-full rounded-lg h-[500px] object-cover"/>
            <h2 className="text-xl text-black mt-3">{data[4].heading}</h2>
            <p className="text-gray-600 mt-2">"{data[4].para}" </p>
          </div>
        </div>
        
        <div>
          <img src={data[5].img} alt={data[5].heading} className="w-full rounded-lg"/>
          <h2 className="text-xl text-black mt-4"> {data[5].heading}</h2>
          <p className="text-gray-600 mt-2">"{data[5].para}"</p>
        </div>  */}
      </div>
    </div>
  )
}

export default FoodGrocery
