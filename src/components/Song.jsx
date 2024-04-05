import React from 'react'

const Song = ({song, setSong, setCloseSong}) => {

  return (
    <div className='m-12 rounded-lg' onClick={() => {
      setSong(song)
      setCloseSong(false)
    }}>
        <img src={song.coverart} alt={song.name} className='rounded-md duration-200 cursor-pointer relative hover:scale-105 lg:w-[25vw] md:w-[50vw] sm:w-[90vw] bg-black' />
    </div>
  )
}

export default Song