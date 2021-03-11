import React, { useState } from 'react';
import MusicOfTheSpheres from './MusicOfTheSpheres';
import Navigation from './Navigation';

function TheCosmos() {
  const [ starQuantity, setStarQuantity ] = useState(42);
  const [ lineQuantity, setLineQuantity ] = useState(12);

  const handleSetStarQuantity = (e, stars) => {
    setStarQuantity(stars);
  }

  const handleSetLineQuantity = (e, lines) => {
    setLineQuantity(lines);
  }

  return (
    <>
      <div className='cosmos'>
        <div className='stars'></div>
        <div className='twinkle'></div>
      </div>
      <MusicOfTheSpheres
        config={{starQuantity, lineQuantity}} >
      </MusicOfTheSpheres>
      <Navigation
        onSetStarQuantity={handleSetStarQuantity} 
        onSetLineQuantity={handleSetLineQuantity} >
      </Navigation>
    </>
  );
}

export default TheCosmos;