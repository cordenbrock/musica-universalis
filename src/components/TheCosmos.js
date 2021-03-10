import React, { useState } from 'react';
import MusicOfTheSpheres from './MusicOfTheSpheres';
import Navigation from './Navigation';

function TheCosmos() {
  const [ lineQuantity, setLineQuantity ] = useState(12);
  const [ starQuantity, setStarQuantity ] = useState(42);

  return (
    <>
      <div className='cosmos'>
        <div className='stars'></div>
        <div className='twinkle'></div>
      </div>
      <MusicOfTheSpheres />
      <Navigation
        config={lineQuantity, starQuantity}>
      </Navigation>
    </>
  );
}

export default TheCosmos;