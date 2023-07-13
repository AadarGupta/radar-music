import React from 'react'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import homeImage from '../assets/images/home.png'

const Home = () => {
  return (
    <div className='h-screen w-full bg-black' name='Home'>
        <div className='mx-auto flex flex-col items-center h-full px-6 text-white'>
                <img src={homeImage} alt="RadaR" className='homeImage' />
                <div className='items-center text-center home-text'>
                  <h2 className='text-6xl md:text-7xl font-bold py-6'>RadaR</h2>
                  <p className='text-left p-4 text-2xl md:text-3xl text-gray-600'>Guptaji ka ladka, Guptaji ka ladka, Guptaji ka ladka, main hoon Guptaji ka ladka. I'm Aadar Gupta (aka RadaR), a Canadian born, Desi rapper. Canada se par firang nahi, desi rap hai meri pehchaan. I leverage my Indian background by bringing a unique fusion of Western and Desi culture.</p>
                </div>
                <FontAwesomeIcon icon={faCaretDown} size='2x' bounce className='caret cursor-pointer text-logo-gold' />
        </div>  
    </div>
  )
}

export default Home;
