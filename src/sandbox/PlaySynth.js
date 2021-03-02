import * as Tone from 'tone'

function playSynth() {
  
  const notes = ['C4', 'C4', 'G4', 'G4', 'A4', 'A4', 'G4', 'F4', 'F4', 'E4', 'E4', 'D4', 'D4', 'C4',
  'G4', 'G4', 'F4', 'F4', 'E4', 'E4', 'D4', 'G4', 'G4', 'F4', 'F4', 'E4', 'E4', 'D4', 'C4', 'C4', 'G4', 'G4', 'A4', 'A4',
  'G4', 'F4', 'F4', 'E4', 'E4', 'D4', 'D4', 'C4'];

  function play() {
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now()
    const randomNote = notes[Math.floor(Math.random() * notes.length)]
    console.log(randomNote);
    synth.triggerAttack(randomNote, now);
    synth.triggerAttack(randomNote, now + 2);
    synth.triggerRelease([randomNote, randomNote], now + 4);
  }

  return (
    <>
    <div>
      <button onClick={play}>Boogie!</button>
      <button onClick={play}>Boogie!</button>
      <button onClick={play}>Boogie!</button>
      <button onClick={play}>Boogie!</button>
    </div>
    </>
  );
}

export default playSynth;