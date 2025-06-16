import { createContext, useEffect, useRef, useState } from 'react'
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
    const playId=async(id)=>{

      await settrack(songsData[id]);
      await audioRef.current.play();
      setplaystaus(true)


    }

    useEffect(()=>{


      seekbr.current.style.width=(Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%";

      setTimeout(() => {
        audioRef.current.ontimeupdate=()=>{
          settime({
    currentTime:{
      second:Math.floor(audioRef.current.currentTime%60),
      minute:Math.floor(audioRef.current.currentTime/60)
    },
     totalTime:
     {
      second:Math.floor(audioRef.current.duration%60),
      minute:Math.floor(audioRef.current.duration/60)
    }

  })

        }
      }, 1000);



    },
  
  )


const  contextValue={
  audioRef,
  seekbg,
  seekbr,
  track,settrack,
  playstatus,setplaystaus,
  time,settime,
  pause,play,
  playId

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
