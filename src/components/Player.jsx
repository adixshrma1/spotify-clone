import React from "react";
import { assets } from "../assets/assets";
import { usePlayer } from "../context/PlayerContext";

const Player = () => {
  const { seekBg, seekBar, seekVolBg, seekVolBar, track, playStatus, play, pause, time, prevPlay, nextPlay, seekSong, seekVolume } = usePlayer();
  return (
    <div className="h-[10%] text-white p-4 flex items-center justify-between">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} />
          <img onClick={prevPlay} className="w-4 cursor-pointer" src={assets.prev_icon} />
          {playStatus ? (
            <img
              onClick={pause}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
            />
          ) : (
            <img
              onClick={play}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
            />
          )}

          <img onClick={nextPlay} className="w-4 cursor-pointer" src={assets.next_icon} />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} />
        </div>
        <div className="flex items-center gap-5">
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div
            onClick={seekSong}
            ref={seekBg}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-0 w-0 bg-green-800 rounded-full"
            />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.play_icon} />
        <img className="w-4" src={assets.mic_icon} />
        <img className="w-4" src={assets.queue_icon} />
        <img className="w-4" src={assets.speaker_icon} />
        <img className="w-4" src={assets.volume_icon} />
        <div onClick={seekVolume} ref={seekVolBg} className="bg-gray-300 h-1 w-20 rounded cursor-pointer">
            <hr ref={seekVolBar} className="h-1 border-0 w-20 bg-green-800 rounded-full"/>
        </div>
        <img className="w-4" src={assets.mini_player_icon} />
        <img className="w-4" src={assets.zoom_icon} />
      </div>
    </div>
  );
};

export default Player;
