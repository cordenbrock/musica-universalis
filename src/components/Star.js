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
  animation: fade-in 10s 1;
  opacity: 75%;

  :hover {
    box-shadow: 0px 0px 32px #9E9E9E;
    opacity: 100%;
  }

  :focus {
    outline: none;
    box-shadow: 0px 0px 32px #9E9E9E;
    opacity: 100%;
  }

  @keyframes fade-in {
    0% {
      opacity: 0%
    }
    100% {
      opacity: 75%
    }
  }
  `;

  return (
    <>
      <Button
        onClick={() => props.onStarPlay(props.note)} >&nbsp;
      </Button>
    </>
  );
}

export default Star;