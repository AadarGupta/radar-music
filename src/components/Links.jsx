import React from 'react'
import { faSpotify, faApple, faYoutube, faAmazon, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Links = () => {
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
      <ul className='bg-inherit'>
        <li className='flex justify-between items-center w-48 h-14 ml-[-130px] px-4 rounded-tr-md bg-spotify hover:ml-[-5px] hover:rounded-md duration-200 cursor-pointer'>
          <a href="https://open.spotify.com/artist/0KlEzjTc8TrKaUT2WBhcF0?si=gObO_l8mT66av47-4-yLkA" className='flex justify-between items-center w-full text-white bg-inherit'>Spotify <FontAwesomeIcon icon={faSpotify} size='2x' className='bg-inherit' /> </a>
        </li>
        <li className='flex justify-between items-center w-48 h-14 ml-[-130px] px-4 bg-apple-music hover:ml-[-5px] hover:rounded-md duration-200 cursor-pointer'>
          <a href="https://music.apple.com/us/artist/radar/1512395356" className='flex justify-between items-center w-full text-white bg-inherit'>Apple Music <FontAwesomeIcon icon={faApple} size='2x' className='bg-inherit' /> </a>
        </li>
        <li className='flex justify-between items-center w-48 h-14 ml-[-130px] px-4 bg-youtube hover:ml-[-5px] hover:rounded-md duration-200 cursor-pointer'>
          <a href="https://www.youtube.com/@radar_raps" className='flex justify-between items-center w-full text-white bg-inherit'>Youtube <FontAwesomeIcon icon={faYoutube} size='2x' className='bg-inherit' /> </a>
        </li>
        <li className='flex justify-between items-center w-48 h-14 ml-[-130px] px-4  bg-amazon hover:ml-[-5px] hover:rounded-md duration-200 cursor-pointer'>
          <a href="https://amazon.com/music/player/artists/B09NMCPTMS/radar?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_H2GPMJs42SCwWAxP6nvLV8ZDY" className='flex justify-between items-center w-full text-white bg-inherit'>Amazon Music <FontAwesomeIcon icon={faAmazon} size='2x' className='bg-inherit' /> </a>
        </li>
        <li className='flex justify-between items-center w-48 h-14 ml-[-130px] px-4 rounded-br-md  bg-instagram hover:ml-[-5px] hover:rounded-md duration-200 cursor-pointer'>
          <a href="https://www.instagram.com/radar.raps/" className='flex justify-between items-center w-full text-white bg-transparent'>Instagram <FontAwesomeIcon icon={faInstagram} size='2x' className='bg-inherit' /> </a>
        </li>
      </ul>
    </div>
  )
}

export default Links;