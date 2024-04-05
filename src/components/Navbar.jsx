import React, {useState} from 'react'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-scroll'

import logo from '../assets/images/logo.png'

const Navbar = () => {

    const [collapseNav, setCollapseNav] = useState(true);

    const navLinks = [
        {
            id: 1,
            name: 'Home',
            path: '#'
        },
        {
            id: 2,
            name: 'Music',
            path: '#'
        },
        {
            id: 3,
            name: 'Contact',
            path: '#'
        },
        /*{
            id: 4,
            name: 'Store',
            path: '#'
        }*/
    ]

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-20'>
        <img src={logo} className='h-20' alt="logo" />
        <ul className='hidden md:flex'>
            {navLinks.map(link => (
                <li key={link.id} className='px-4 text-2xl cursor-pointer font-medium text-gray-500 hover:scale-110 hover:text-white duration-200'><Link to={link.name} smooth duration={500}>{link.name}</Link></li>
            ))}
        </ul>

        <FontAwesomeIcon onClick={() => setCollapseNav(!collapseNav)} icon={collapseNav ? faBars : faTimes} className='flex md:hidden cursor-pointer pr-4 z-10' size="2x" />
       
       {
        !collapseNav && 
            <ul className='flex flex-col justify-center items-center absolute top-20 left-0 w-full h-screen bg-black bg-opacity-80'>
                {navLinks.map(link => (
                    <li key={link.id} className='px-4 py-6 text-4xl cursor-pointer text-gray-400 hover:scale-110 hover:text-white duration-200 bg-transparent'><Link onClick={() => setCollapseNav(!collapseNav)} to={link.name} smooth duration={500}>{link.name}</Link></li>
                ))}
            </ul>
        }
       
    </div>
  )
}

export default Navbar;