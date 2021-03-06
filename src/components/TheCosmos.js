import React from 'react';
import Synth from './Synth';
import Footer from './Footer';

function TheCosmos() {

  return (
    <>
      <div className='cosmos'>
        <div className='stars'></div>
        <div className='twinkle'></div>
        <Synth />
      </div>
      <Footer />
    </>
  );
}

export default TheCosmos;