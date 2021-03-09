import React, { useState } from 'react';
import * as Tone from 'tone';
import Moon from './../assets/img/moon.png';
import Magic from './../assets/audio/youarethemagic.wav'
import Star from './Star';
import { theePrimordialChord, mysteryTrain } from './../constants/Notes';

function MusicOfTheSpheres() {
  
  const [stars, setStars] = useState(createRandomStarNotes())
  const [synth, setSynth] = useState(createSynth())
  
  console.log(stars);
  console.log(synth);

  function createRandomStarNotes(starNotes=50, notes=theePrimordialChord) {
    const numberOfStars = starNotes;
    let starNotesArray = [];

    for (let i=0; i<=numberOfStars; i++) {
      const randomizedStarNoteObject = {
        randomMusicNote: notes[Math.floor(Math.random() * notes.length)],
        xCoordinate: Math.floor(window.innerWidth * Math.random()),
        yCoordinate: Math.floor(window.innerHeight * Math.random())
      }
      starNotesArray.push(randomizedStarNoteObject);
      
    };
    return starNotesArray;
  };

  function createSynth() {
    const synth = new Tone.AMSynth(Tone.Synth, 32);
    const reverb = new Tone.Reverb(15, 15)
    const delay = new Tone.FeedbackDelay(.25, .75)
    const filter = new Tone.Filter(2000, "lowpass", -24)
    synth.set({
      oscillator: {
      type:  'sine'
      },
      envelope: {
        attack: 1,
        release: 2
      },
      volume: -12
    })
    return synth.chain(filter, reverb, delay, Tone.Destination);  
  }

  const handleStarPlay = (note) => {
    
    const randomNote = note
    console.log(randomNote);
    synth.triggerAttackRelease(randomNote, '1n');
  }

  const handleMoonPlay = () => {
    const player = new Tone.Player(`${Magic}`).toDestination();
    Tone.loaded().then(() => {
      player.start();
    });
  }

  const moonStyle = {
    position: "absolute",
    width: 400,
    height: 'auto',
    top: 100,
    left: 100,
    zIndex: 3,
    cursor: 'pointer'
  }


  return (
    <>
      <img style={moonStyle} src={Moon} alt="full moon" onClick={() => handleMoonPlay()} />
      {stars.map((star,index) => 
        <Star
          note={star.randomMusicNote}
          position={{bottom: star.yCoordinate, right: star.xCoordinate}}
          onStarPlay={handleStarPlay} 
          key={index} >
        </Star>
      )}
    </>
  );
}

export default MusicOfTheSpheres;