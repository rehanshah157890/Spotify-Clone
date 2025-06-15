import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
            <img  onClick={()=>navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />

        </div>
        <div className='flex items-center gap-4'>
            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer '>Explore Premium</p>
            <p className='bg-black text-white text-[15px]  px-3 py-1 rounded-2xl cursor-pointer hidden md:block'>Install App</p>
            <p className='bg-purple-500 rounded-full px-3 py-1 text-black flex items-center'>D</p> 
        </div>
      
      
    </div>
      <div className='flex mt-4 gap-2 items-center'>
             <p className='bg-white text-black rounded-2xl  px-4 py-1 cursor-pointer'>All</p>
 <p className='bg-black  rounded-2xl px-4py-1 cursor-pointer'>Music</p>
  <p className='bg-black rounded-2xl  px-4py-1 cursor-pointer'>Podcast</p>
        </div>
        </>
  )
}

export default Navbar
