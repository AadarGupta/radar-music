import React from 'react';

const Overlay = ({ song, setCloseSong, closeSong }) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className='flex flex-col justify-center items-center fixed inset-0 w-full h-screen bg-black bg-opacity-80 border-0'
         onClick={() => setCloseSong(!closeSong)}>
        <div className='flex bg-transparent relative justify-center items-center mt-0 w-full'>
            <iframe title={song.name} 
              className='bg-black relative' 
              src={song.embedLink} 
              width="90%" height="200px" 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" 
              loading="lazy" 
            />
        </div>
    </div>
  );
}

export default Overlay;
