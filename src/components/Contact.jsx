import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-900 via-black text-white'>
        <div className='flex flex-col p-4 max-w-screen-lg mx-auto justify-center h-full'>
            <div className='pb-8 text-center'>
                <h1 className='text-4xl font-bold inline pl-8 md:text-6xl'>Contact RadaR</h1>
            </div>

            <div className='mx-auto justify-center flex flex-col'>
                <form action='https://getform.io/f/e6d1ae44-3d27-4fa2-9ddf-967565b2e91e' method='post' className='flex flex-col w-full md:w-[50vw]'>
                    <input className='p-2 bg-black border-2 rounded-md text-white focus:outline-none' type='text' name='Name' placeholder='Enter your name' />
                    <input className='my-4 p-2 bg-black border-2 rounded-md text-white focus:outline-none' type='text' name='Email' placeholder='Enter your email' />
                    <textarea name='Message' rows='10' placeholder='Enter your message' className='p-2 bg-black border-2 rounded-md text-white focus:outline-none' />
                    <button className='text-white bg-logo-gold rounded-md px-6 py-3 my-8 mx-auto flex items-center justify-center hover:scale-110 duration-200'>Let's Chat!</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact