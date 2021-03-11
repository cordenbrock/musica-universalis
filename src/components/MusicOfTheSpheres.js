import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import Magic from './../assets/audio/youarethemagic.wav'
import Moon from './../assets/img/moon.png';
import Star from './Star';
import Constellation from './Constellation';
import noteThemes from './../constants/Notes';

function MusicOfTheSpheres(props) {
  const [stars, setStars] = useState([]);
  const [synth, setSynth] = useState();
  const [constellation, setConstellation] = useState([])

  useEffect(() => {
    const starNotesArray = createRandomStarNotes(props.config.starQuantity, noteThemes[props.config.theme]);
    const synth = createSynth();
    setStars(starNotesArray);
    setSynth(synth);
  }, [props.config])

  function createRandomStarNotes(starNotes, notes) {
    const numberOfStars = starNotes;
    let starNotesArray = [];

    for (let i=0; i<numberOfStars; i++) {
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

  const handleStarPlay = (note, x, y) => {
    const starPlayed = {
      notePlayed: note,
      xCoordinate: x,
      yCoordinate: y
    }
    setConstellation([...constellation, starPlayed]);

    synth.triggerAttackRelease(starPlayed.notePlayed, '1n');
  }

  const handleMoonPlay = () => {
    const player = new Tone.Player(`${Magic}`).toDestination();
    Tone.loaded().then(() => {
      player.start();
    });
  }

  return (
    <>
      <img style={moonStyle} src={Moon} alt="full moon" onClick={() => handleMoonPlay()} />
      {stars.map((star,index) => 
        <Star
          note={star.randomMusicNote}
          xCoordinate={star.xCoordinate}
          yCoordinate={star.yCoordinate}
          onStarPlay={handleStarPlay} 
          key={index} >
        </Star>
      )}
      <Constellation
        constellation={constellation}
        lineQuantity={props.config.lineQuantity} >
      </Constellation>
    </>
  );
}

  const moonStyle = {
    position: "absolute",
    width: 300,
    height: 'auto',
    top: 100,
    left: 100,
    zIndex: 3,
    cursor: 'pointer'
  }


export default MusicOfTheSpheres;
