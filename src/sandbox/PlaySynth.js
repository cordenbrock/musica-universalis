import React, { useState } from 'react';
import * as Tone from 'tone'

function PlaySynth() {
  const notes = ['E2', 'B2', 'G#2', 'A#2', 'E3', 'B3', 'G#3', 'A#3', 'E4', 'B4', 'G#4', 'A#4'];
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
  
  

  function playNote(note) {
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
    bottom: stars.yCoordinate,
    right: stars.xCoordinate
  }

  return (
    <>
      <div>
        {stars.map((star,i=0) => 
          <button style={{position: "absolute", bottom: star.yCoordinate, right: star.xCoordinate}} onClick={() => playNote(star.randomMusicNote)} key={i++}>Boogie!</button>
        )}
      </div>
    </>
  );
}

export default PlaySynth;