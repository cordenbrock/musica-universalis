import React from 'react';
import PlaySynth from './sandbox/PlaySynth';
import moon from './sandbox/moooooon.png';

function App() {

   
  //  const twinkling = {
  //    width:10000px,
  //    height: 100%,
  //    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png") repeat,
  //    background-size: 1000px 1000px,
  //      position: absolute,
  //      right: 0,
  //      top: 0,
  //      bottom: 0,
  //      z-index: 2,
       
  //      -moz-animation:move-background 70s linear infinite,
  //    -ms-animation:move-background 70s linear infinite,
  //    -o-animation:move-background 70s linear infinite,
  //    -webkit-animation:move-background 70s linear infinite,
  //    animation:move-background 70s linear infinite 
  //  }

  return (
    <>
      <div>
        <PlaySynth />
        <img style={{position: 'absolute', top: 50, left: 50, zIndex:3, cursor: 'pointer'}} src={moon} alt="" height='400' width='400'/>
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
    </>
  );
}

export default App;