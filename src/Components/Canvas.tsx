import React, { useRef, useEffect } from 'react'

interface CanvasProps {
    width: number;
    height: number;
    nameString: string;
}
const Canvas = ({ width, height, nameString }: CanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (canvasRef.current) {
        const canvas = canvasRef.current;
        actualDrawing(canvas, nameString)
        console.log(nameString);
    }      
    
  }, [])
  
  return <canvas ref={canvasRef} height={height} width={width} />;
};

Canvas.defaultProps = {
    width: window.innerWidth,
    height: window.innerHeight
};


function actualDrawing(canvas: { getContext: (arg0: string) => any; }, nameString: string):void {
    const context = canvas.getContext('2d');  
        if (context) {
            context.fillStyle = [100,3,4];
            context.beginPath();
            context.arc(150, 150, 150, 0, 3 * Math.PI);
            context.fill();
            context.font = '48px serif';
            context.fillText(nameString, 10, 50);     
            console.log(nameString);    
        }
    
}

export default Canvas