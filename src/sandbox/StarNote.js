import React from 'react';
import * as Tone from 'tone'

function playSynth() {
  
  const notes = ['E2', 'B2', 'G#2', 'A#2', 'E3', 'B3', 'G#3', 'A#3', 'E4', 'B4', 'G#4', 'A#4' ];


  function createRandomStarNoteElements() {
    const numberOfStars = 100;
    let starBtnNotes = [];
    const randomizedStarNoteObject = {
      randomMusicNote: notes[Math.floor(Math.random() * notes.length)],
      xCoordinate: Math.floor(window.innerWidth * Math.random()),
      yCoordinate: Math.floor(window.innerHeight * Math.random())
    }

    for (let i=0; i<=numberOfStars; i++) {
      starBtnNotes.push(randomizedStarNoteObject);
    };
    console.log(starBtnNotes);
    return starBtnNotes;
  };
  

  function play(note) {
    const starBtnNotes = createRandomStarNoteElements();
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now()
    const randomNote = note
    console.log(randomNote);
    synth.triggerAttack(randomNote, now);
    synth.triggerAttack(randomNote, now + 2);
    synth.triggerRelease([randomNote, randomNote], now + 2.5);
  }



  const starBtnStyle = {
    position: "absolute",
    top: Math.floor(window.innerWidth * Math.random()),
    left: Math.floor(window.innerHeight * Math.random())
  }

  return (
    <>
    <div>
      <button style={starBtnStyle} onClick={() => play(notes[Math.floor(Math.random() * notes.length)])}>Boogie!</button>
    </div>
    </>
  );
}

export default StarNote;