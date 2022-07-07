import React, { useRef, useEffect } from 'react'

interface CanvasProps {
    width: number;
    height: number;
    nameString: string;
    arc: number;
    i: number;
    rad: number;
}
const Canvas = ({ width, height, nameString, i, arc, rad }: CanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (canvasRef.current) {
        const canvas = canvasRef.current;
        
        var names = getNamesFromString(nameString);
        const pizzaPiesLength = names.length;
        const diameter = width;
        const rad = diameter / 2;
        const TAU = 2 * Math.PI; //TAU number ... as there are people who find 2*PI confusing ... 
        const arc = TAU / pizzaPiesLength;
        console.log(arc);
        
        drawSector(canvas, nameString, 3, arc, rad);
        // actualDrawing(canvas, nameString)
        console.log(nameString);
    }      
    
  }, [nameString])
  
  return <canvas ref={canvasRef} height={height} width={width} />;
};

Canvas.defaultProps = {
    width: window.innerWidth,
    height: window.innerHeight
};
function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }

function drawSector(canvas: { getContext: (arg0: string) => any; }, nameString: string, i:number, arc:number, rad:number):void {
    const ctx = canvas.getContext('2d');
    const ang = arc * i
    ctx.save()
    // COLOR
    ctx.beginPath()
    ctx.fillStyle = getRandomRgb();
    ctx.moveTo(rad, rad)
    ctx.arc(rad, rad, rad, ang, ang + arc)
    ctx.lineTo(rad, rad)
    ctx.fill()
    // TEXT
    ctx.translate(rad, rad)
    ctx.rotate(ang + arc / 2)
    ctx.textAlign = 'right'
    ctx.fillStyle = '#fff'
    ctx.font = 'bold 18px sans-serif'
    ctx.fillText('sector.label', rad - 10, 10)
    //
    ctx.restore()
  }


function actualDrawing(canvas: { getContext: (arg0: string) => any; }, nameString: string):void {
    const context = canvas.getContext('2d');  
        if (context) {
            context.fillStyle = [100,3,4];
            context.beginPath();
            context.fillStyle = "#c82124";
            context.arc(150, 150, 150, 0, 3 * Math.PI);
            context.closePath();
            context.fill();
            context.font = '48px serif';
            context.fillText(nameString, 10, 50);     
        }
    
}

function getNamesFromString(allNames:String){
    var listOfItems = [];
    listOfItems = allNames.split('\n');
    return listOfItems
}

export default Canvas