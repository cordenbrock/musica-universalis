import React, { useEffect, useRef } from 'react';

function Constellation(props) {
  const { constellation } = props;
  const userLineQuantity = 12;
  const canvasRef = useRef(null);

  const draw = (ctx, lineQuantity) => {
    ctx.strokeStyle = 'white'
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'white';
    ctx.lineWidth = .618;

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.beginPath();
    let i = 0;
    if (constellation.length > lineQuantity){
      i = constellation.length - lineQuantity;
    }
    for (i; i < constellation.length-1; i++) {
      ctx.moveTo(constellation[i].xCoordinate, constellation[i].yCoordinate);
      ctx.lineTo(constellation[i+1].xCoordinate, constellation[i+1].yCoordinate);  
    }
    ctx.stroke();
    }

  useEffect(() => {
    console.log(constellation);
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    draw(context, userLineQuantity)
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