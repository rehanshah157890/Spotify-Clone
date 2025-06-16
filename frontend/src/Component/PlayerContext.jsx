import { createContext, useRef, useState } from 'react'
import { songsData } from '../assets/assets';
export const PlayerContext= createContext();

const PlayerContextProvider = (props) => {
  const audioRef=useRef()
  const seekbg=useRef()
  const seekbr=useRef()
  const [track,settrack]=useState(songsData[0])
  const [playstatus,setplaystaus]=useState(false)
  const [time,settime]=useState({
    currentTime:{
      second:0,
      minute:0
    },
     totalTime:
     {
      second:0,
      minute:0
    }

  })
  const play=()=>{
    audioRef.current.play()
    setplaystaus(true)
      
    }

      const pause=()=>{
        audioRef.current.pause()
        setplaystaus(false)
      
    }


const  contextValue={
  audioRef,
  seekbg,
  seekbr,
  track,settrack,
  playstatus,setplaystaus,
  time,settime,
  pause,play

}
  return (
    <div>
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>

      
    </div>
  )
}

export default PlayerContextProvider;
