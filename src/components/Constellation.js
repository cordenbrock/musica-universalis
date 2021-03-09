import React from 'react';
import styled from 'styled-components';

function Constellation(props) {

  return (
    <>
      <canvas
        onClick={() => props.onCreateConstellation(props.starNote)} >&nbsp;
      </canvas>
    </>
  );
}

export default Constellation;