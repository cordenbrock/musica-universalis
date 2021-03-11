import React, { useState } from 'react';
import MusicOfTheSpheres from './MusicOfTheSpheres';
import Navigation from './Navigation';

function TheCosmos() {
  const [ starQuantity, setStarQuantity ] = useState(42);
  const [ lineQuantity, setLineQuantity ] = useState(12);
  const [ theme, setTheme ] = useState(1);


  const handleSetStarQuantity = (e, stars) => {
    setStarQuantity(stars);
  }

  const handleSetLineQuantity = (e, lines) => {
    setLineQuantity(lines+1);
  }

  const handleSetTheme = (e, theme) => {
    setTheme(theme);
  }

  return (
    <>
      <div className='cosmos'>
        <div className='stars'></div>
        <div className='twinkle'></div>
      </div>
      <MusicOfTheSpheres
        config={{starQuantity, lineQuantity, theme}} >
      </MusicOfTheSpheres>
      <Navigation
        onSetStarQuantity={handleSetStarQuantity} 
        onSetLineQuantity={handleSetLineQuantity}
        onSetTheme={handleSetTheme} >
      </Navigation>
    </>
  );
}

export default TheCosmos;