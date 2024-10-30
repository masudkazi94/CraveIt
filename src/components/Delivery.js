import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
        <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[550px] mx-auto my-4' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Get The App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on Demand</h1>
                <p>
                    Experience the ultimate in food delivery convenience with our app, where every meal you crave is just a few taps away. Satisfy your hunger with access to a wide range of cuisines, from local favorites to international delights, delivered right to your doorstep. Say goodbye to waiting in line and let us bring the flavors to you, anytime and anywhere. Whether you're ordering a quick lunch at work or a relaxing dinner at home, our seamless interface makes it easier than ever. Track your order in real-time, customize your meals to your taste, and enjoy swift delivery by our reliable team.
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Delivery