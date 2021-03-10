import React, { useState, useEffect, useRef } from 'react';

function Constellation(props) {
  const { constellation } = props;
  const canvasRef = useRef(null);


  const draw = (ctx) => {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.strokeStyle = 'white'
    ctx.shadowBlur = 10;
    ctx.shadowColor = "white";
    ctx.lineWidth = .618;
    
    // if (constellation.length > 1) {
      ctx.beginPath();
      let i = 0;
      if (constellation.length > 10){
        i = constellation.length-10;
      }
      for (i; i < constellation.length-1; i++) {
        ctx.moveTo(constellation[i].xCoordinate, constellation[i].yCoordinate);
        ctx.lineTo(constellation[i+1].xCoordinate, constellation[i+1].yCoordinate);  
      }
      
      ctx.stroke();
      // }
    }

  useEffect(() => {
    console.log(constellation);
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    draw(context)
  }, [draw]);

  return (
      <canvas ref={canvasRef} style={canvasStyle} width={window.innerWidth} height={window.innerHeight}/>
  );
}

const canvasStyle = {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 0,
}

export default Constellation;