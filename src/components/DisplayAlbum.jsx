import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'

const DisplayAlbum = () => {
  const {id} = useParams();
  const albumData = albumsData[id];
  return (
    <>
      <Navbar />
      <div className={`mt-10 flex gap-8 flex-col md:flex-row md:items-center`}>
        <img className='w-48 rounded' src={albumData.image} />
        <div className='flex flex-col'>
          <p>Playlist</p>
          <h1 className='text-5xl md:text-7xl font-bold mb-4'>{albumData.name}</h1>
          <h2>{albumData.desc}</h2>
          <p className='mt-1'>
            <img className='inline-block w-5' src={assets.spotify_logo}/>
            {" "}<b>Spotify</b> • 123,653 likes • <b>50 songs</b>
            {" "}about 2 hr 30 min
          </p>
        </div>
      </div>
      <div className='grid grid-cols-3 md:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p ><b className='mr-3'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='m-auto w-4' src={assets.clock_icon} />
      </div>
      <hr />
      {
        songsData.map((item,index)=>(
          <div key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
            <p className='text-white'>
              <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
              <img className='inline w-10 mr-5' src={item.image} />
              {item.name}
            </p>
            <p>{albumData.name}</p>
            <p className='hidden sm:block'>5 days ago</p>
            <p className='text-center'>{item.duration}</p>
          </div>
        ))
      }
    </>
  )
}

export default DisplayAlbum