import { createContext, useContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

const PlayerContext = createContext();

export const PlayerProvider = ({children}) =>{
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    const seekVolBg = useRef();
    const seekVolBar = useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    })

    function play(){
        audioRef.current.play();
        setPlayStatus(true);
    }
    function pause(){
        audioRef.current.pause();
        setPlayStatus(false);
    }
    const playWithId = async (id)=>{
        await setTrack(songsData[id])
        await audioRef.current.play();
        setPlayStatus(true);
    }
    const prevPlay = async ()=>{
        if(track.id > 0){
            await setTrack(songsData[track.id - 1])
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }
    const nextPlay = async ()=>{
        if(track.id < songsData.length -1){
            await setTrack(songsData[track.id + 1])
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }
    const seekSong = async (e) =>{
        audioRef.current.currentTime = (e.nativeEvent.offsetX/seekBg.current.offsetWidth) * audioRef.current.duration;
    }
    const seekVolume = async (e) =>{
        audioRef.current.volume = (e.nativeEvent.offsetX/seekVolBg.current.offsetWidth)
        console.log(audioRef.current.volume)
        seekVolBar.current.style.width = (e.nativeEvent.offsetX/seekVolBg.current.offsetWidth)*100 +"%";
    }
    useEffect(()=>{
        setTimeout(()=>{
            audioRef.current.ontimeupdate = ()=>{
                seekBar.current.style.width = Math.floor(audioRef.current.currentTime/audioRef.current.duration * 100)+"%";
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60).toString().padStart(2, '0'),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        }, 1000)
    }, [audioRef])

    const contextValue = {
        audioRef,
        seekBg,seekBar,
        seekVolBg, seekVolBar,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play, pause,
        playWithId,
        prevPlay, nextPlay,
        seekSong, seekVolume
    }
    return(
        <PlayerContext.Provider value={contextValue}>
            {children}
        </PlayerContext.Provider>
    )
}

export const usePlayer =()=>{
    return useContext(PlayerContext);
}