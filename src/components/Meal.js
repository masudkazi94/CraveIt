import React,{useState}from 'react';
import { mealData } from '../Data/data';

const Meal = () => {
  const [foods,setFoods]=useState(mealData)
  const fillterCat =(category)=>{
    setFoods(
      mealData.filter((item)=>{
        return item.category === category;

      })
    )
  }
  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
      <h1 className='text-orange-500 font-bold text-2xl text-center '>
        Our Meal 
      </h1>
      <div className='flex flex-col lg:flex-row justify-center'>
        <div className='flex justify-center md:justify-center py-3'>
          <button onClick={()=>setFoods(mealData)} 
          className='m-1 border-ornage-700 text-white  bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>All</button>
          <button onClick={()=>fillterCat("Vegetarian")} 
          className='m-1 border-ornage-700 text-white  bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Vegetarian</button>
          <button onClick={()=>fillterCat("Non-Vegetarian")} 
          className='m-1 border-ornage-700 text-white  bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Non-Vegetarian</button>
          <button onClick={()=>fillterCat("Desserts")} 
          className='m-1 border-ornage-700 text-white  bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Desserts</button> 
        </div>
      </div>
      <div className='grid md:grid-cols-5 sm:grid-cols-1 lg-grid-cols-4 gap-6'>
        {foods.map((item) => (
          <div className='border-none hover:scale-105 duration-300' key={item.id}>
            <img 
              src={item.image} 
              alt={item.name} 
              className='w-full h-[200px] object-cover rounded-lg'
            />
            <div className='flex justify-between py-2 px-4'>
              <p className='font-bold'>{item.name}</p>
              <div className='bg-orange-700 text-white font-bold rounded-full w-16 h-16 flex items-center justify-center -mt-10 border-[5px] border-white'>
                ₹ {item.price}
              </div>
            </div>
            <div className='pl-4 py-4 -mt-7 '>
              <p className='text-indigo-600'>View More</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;
