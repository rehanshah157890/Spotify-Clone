import React, { useContext } from 'react'
import { PlayerContext } from './PlayerContext'


const Songdata = ({image,name,desc,id}) => {

const {playId}=useContext(PlayerContext)


    return (
    <div onClick={()=>{playId(id)}}className='min-w-[180px] p-2 px-3 cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={image} alt="" />
        <p className='font-bold mt-2 mb-1 text-sm'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
      
    </div>
  )
}

export default Songdata
