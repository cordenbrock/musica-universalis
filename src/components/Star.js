import React from 'react';
import styled from 'styled-components';

function Star(props) {

  // const starStyle = {
  //   position: "absolute",
  //   borderRadius: 13,
  //   boxShadow: '0px 0px 16px #9E9E9E',
  //   zIndex: 2,
  //   cursor: 'pointer',
  //   bottom: props.position.bottom,
  //   right: props.position.right
  // }

  const Button = styled.button`
  position: absolute;
  border-radius: 13;
  box-shadow: 0px 0px 16px #9E9E9E;
  z-index: 2;
  cursor: pointer;
  bottom: ${props => props.position.bottom ? props.position.bottom : props.position.bottom};
  right: ${props => props.position.right ? props.position.right : props.position.right};
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