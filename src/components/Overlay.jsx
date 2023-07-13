import React from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Overlay = ({song, setCloseSong, closeSong}) => {

  /*function clicked() {
    alert(`You have clicked lyrics for ${song.name}`)
  }*/

  return (
    <div className='flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80'>
        <div className='flex bg-transparent relative justify-center items-center mt-0 w-[100%]'>
        <FontAwesomeIcon icon={ faTimes } className='flex absolute cursor-pointer top-5 right-5 z-10' size="4x" onClick={() => setCloseSong(!closeSong)} />
          <iframe title={song.name} className='bg-transparent relative top-[200px]' src={song.embedLink} width="90%" height="800px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
         {/* Lyrics feature <h1 className='absolute text-center top-[70%] right-[20px] mr-[5%] text-2xl cursor-pointer z-20' onClick={clicked}>Lyrics</h1> */}
        </div>
    </div>
  )
}

export default Overlay