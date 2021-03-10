import React, { useEffect, useRef } from 'react';
import { context } from 'tone';

function Constellation(props) {
  const { constellation } = props;
  console.log(constellation)
  const canvasRef = useRef(null);


    const draw = ctx => {
      ctx.strokeStyle = 'white'
      ctx.shadowBlur = 2;
      ctx.shadowColor = "white";
      ctx.lineWidth = .15;
      ctx.beginPath()
      if (constellation.length > 2) {
        ctx.moveTo(0,0);
        ctx.lineTo(constellation[constellation.length-1].position.right, constellation[constellation.length-1].position.bottom);
        ctx.stroke();
      }
    }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    draw(context)
  }, [draw]);

  return (
      <canvas ref={canvasRef} style={canvasStyle}/>
  );
}

const canvasStyle = {
  position: "fixed",
  width: window.innerWidth,
  height: window.innerHeight,
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: 1,
}

export default Constellation;