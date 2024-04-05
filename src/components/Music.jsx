import React, {useState} from 'react'
import Song from './Song'
import Overlay from './Overlay'
import {songs} from '../assets/songs'

const Music = () => {
  const [currentSong, setSong] = useState({
    name: '',
    coverart: '',
    lyrics: '',
  });

  const [closeSong, setCloseSong] = useState(false);


  return (
    <div name='Music' className='bg-black text-white w-full min-h-full'>
        <div className='max-w-screen justify-center flex flex-col w-full bg-black h-full pt-[15px]'>
            <h1 className='text-2xl font-bold inline pl-8 md:text-4xl'>My Music</h1>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 mx-auto xl:grid-cols-3 2xl:grid-cols-4 sm:px-0 justify-center bg-black h-full'>
                {songs.map(song => (<Song key={song.name} song={song} setSong={setSong} setCloseSong={setCloseSong} closeSong={closeSong} />))}
            </div>
        </div>
        { (currentSong.name !== '' && !closeSong)
        && <Overlay song={currentSong} setCloseSong={setCloseSong} closeSong={closeSong} />}
    </div>
  )
}

export default Music;