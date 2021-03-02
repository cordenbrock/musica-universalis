import React from 'react';
import * as Tone from 'tone'

function playSynth() {
  
  const notes = ['C4', 'C4', 'G4', 'G4', 'A4', 'A4', 'G4', 'F4', 'F4', 'E4', 'E4', 'D4', 'D4', 'C4',
  'G4', 'G4', 'F4', 'F4', 'E4', 'E4', 'D4', 'G4', 'G4', 'F4', 'F4', 'E4', 'E4', 'D4', 'C4', 'C4', 'G4', 'G4', 'A4', 'A4',
  'G4', 'F4', 'F4', 'E4', 'E4', 'D4', 'D4', 'C4'];


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

export default playSynth;