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
    <div name='Music' className='bg-black text-white w-full md:h-screenh-full'>
        <div className='max-w-screen justify-center flex flex-col w-full bg-black'>
            <h1 className='text-2xl font-bold inline pl-8 md:text-4xl'>Check out some of my latest work</h1>
            <div className='grid xl:grid-cols-2 md:grid-cols-1 mx-auto 2xl:grid-cols-3 sm:px-0 justify-center bg-black'>
                {songs.map(song => (<Song key={song.name} song={song} setSong={setSong} setCloseSong={setCloseSong} closeSong={closeSong} />))}
            </div>
        </div>
        { (currentSong.name !== '' && !closeSong)
        && <Overlay song={currentSong} setCloseSong={setCloseSong} closeSong={closeSong} />}
    </div>
  )
}

export default Music;