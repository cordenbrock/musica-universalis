import React, { useEffect, useRef } from 'react';

function Constellation(props) {
  const { constellation } = props;
  console.log(constellation)
  const canvasRef = useRef(null);


  const draw = (ctx) => {
    ctx.strokeStyle = 'white'
    ctx.shadowBlur = 10;
    ctx.shadowColor = "white";
    ctx.lineWidth = .314;
    
    if (constellation.length > 1) {
      ctx.beginPath();
      ctx.moveTo(constellation[constellation.length-2].xCoordinate, constellation[constellation.length-2].xCoordinate);
      ctx.lineTo(constellation[constellation.length-1].xCoordinate, constellation[constellation.length-1].yCoordinate);
      ctx.stroke();
      }
    }

  useEffect(() => {
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