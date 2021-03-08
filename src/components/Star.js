import React from 'react';
import styled from 'styled-components';

function Star(props) {

  const Button = styled.button`
  position: absolute;
  border-radius: 13px;
  box-shadow: 0px 0px 16px #9E9E9E;
  z-index: 2;
  cursor: pointer;
  bottom: ${props.position.bottom}px;
  right: ${props.position.right}px;
  `;

  return (
    <>
      <Button 
        // style={starStyle}
        onClick={() => props.onStarPlay(props.note)} >&nbsp;
      </Button>     
    </>
  );
}

export default Star;