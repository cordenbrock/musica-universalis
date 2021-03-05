import React, { useState } from 'react';
import * as Tone from 'tone';

function PlaySynth() {
  const notes = ['B2', 'G#2', 'F#2', 'C#2', 'E3', 'B3', 'F#3', 'G#3', 'A#3', 'E4', 'C#4', 'F#2', 'G#4'];
  const [stars, setStars] = useState(createRandomStarNoteElements())
  console.log(stars);
  function createRandomStarNoteElements() {
    const numberOfStars = 100;
    let starBtnNotes = [];

    for (let i=0; i<=numberOfStars; i++) {
      const randomizedStarNoteObject = {
        randomMusicNote: notes[Math.floor(Math.random() * notes.length)],
        xCoordinate: Math.floor(window.innerWidth * Math.random()),
        yCoordinate: Math.floor(window.innerHeight * Math.random())
      }
      starBtnNotes.push(randomizedStarNoteObject);
    };
    return starBtnNotes;
  };
  
  function createSynth() {
    const synth = new Tone.AMSynth(Tone.Synth, 32);
    const reverb = new Tone.Reverb(15, 15)
    const delay = new Tone.FeedbackDelay(.25, .75)
    // const tremolo = new Tone.Tremolo(9, 0.75)
    const filter = new Tone.Filter(2000, "lowpass", -24)
    synth.set({
      oscillator: {
      type:  'sine'
      },
      envelope: {
        attack: .05,
        release: 2
      },
      volume: -12
    })
    return synth.chain(filter, reverb, delay, Tone.Destination);  
  }

  function playNote(note) {
    const synth = createSynth();
    const randomNote = note
    console.log(randomNote);
    synth.triggerAttackRelease(randomNote, '1n');
  }



  const starBtnStyle = {
    position: "absolute",
    borderRadius: 13,
    boxShadow: '0px 0px 16px #9E9E9E',
    cursor: 'pointer',
    zIndex: 3
  }

  return (
    <>
      
        {stars.map((star,index) => 
          <button 
            style={{...starBtnStyle, bottom: star.yCoordinate, right: star.xCoordinate}}
            onClick={() => playNote(star.randomMusicNote)} key={index}>&nbsp;</button>
        )}
        
      
    </>
  );
}

export default PlaySynth;