import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1520px] m-auto px-5  bg-[#24262b]'>
      <div className='py-2 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
          <h1 className='w-full text-3xl font-bold text-orange-500'>CraveIt</h1>
          <p>From kitchen to doorstep, bringing flavor to life.  
             Every meal crafted with love, delivered with care.
          </p>
          <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
          </div>
        </div>
        
        <div className='lg:col-span-2 flex justify-center -mt-10 ml-12'>
          <div>
            <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
            <ul >
              <li className='py-2 text-sm'>India</li>
              <li className='py-2 text-sm'>USA</li>
              <li className='py-2 text-sm'>china</li>
              <li className='py-2 text-sm'>UAE</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
