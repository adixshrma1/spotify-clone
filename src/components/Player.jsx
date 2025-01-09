import React from 'react'
import { songsData } from '../assets/assets'
import { assets } from '../assets/assets'

const Player = () => {
  return (
    <div className='h-[10%] text-white p-4 flex items-center justify-between'>
        <div className='hidden lg:flex items-center gap-4'>
            <img className='w-12' src={songsData[0].image} />
            <div>
                <p>{songsData[0].name}</p>
                <p>{songsData[0].desc.slice(0,12)}</p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-1 m-auto'>
            <div className='flex gap-4'>
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} />
                <img className='w-4 cursor-pointer' src={assets.prev_icon} />
                <img className='w-4 cursor-pointer' src={assets.play_icon} />
                <img className='w-4 cursor-pointer' src={assets.next_icon} />
                <img className='w-4 cursor-pointer' src={assets.loop_icon} />
            </div>
            <div className='flex items-center gap-5'>
                <p>1:08</p>
                <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                    <hr className='h-1 border-0 w-1/3 bg-green-800 rounded-full'/>
                </div>
                <p>3:40</p>
            </div>
        </div>
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
            <img className='w-4' src={assets.play_icon} />
            <img className='w-4' src={assets.mic_icon} />
            <img className='w-4' src={assets.queue_icon} />
            <img className='w-4' src={assets.speaker_icon} />
            <img className='w-4' src={assets.volume_icon} />
            <div className='bg-gray-300 h-1 w-20 rounded'></div>
            <img className='w-4' src={assets.mini_player_icon} />
            <img className='w-4' src={assets.zoom_icon} />
        </div>
    </div>
  )
}

export default Player