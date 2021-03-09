import React from 'react';
import StarButton from './StarButton';

function Star(props) {

  // const [constellation, setConstellation] = useState([])


  return (
    <>
      <StarButton
        style={{
          'bottom': props.position.bottom,
          'right': props.position.right
        }}
        onClick={() => props.onStarPlay(props.note, props.position)} >&nbsp;
      </StarButton>
    </>
  );
}

export default Star;