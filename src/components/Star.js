import React from 'react';
import StarButton from './StarButton';

function Star(props) {

  return (
      <StarButton
        style={{
          'left': props.xCoordinate - 10,
          'top': props.yCoordinate - 10
        }}
        onClick={() => props.onStarPlay(props.note, props.xCoordinate, props.yCoordinate)} >&nbsp;
      </StarButton>
  );
}

export default Star;