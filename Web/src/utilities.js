export const drawBubble = (videoWidth, detections, ctx) => {
    detections.forEach(prediction=>{
        const [x,y] = prediction['bbox'];
        const text ='This is ' +  prediction['class'];
        
        var radius = 10;
  
        ctx.beginPath();
        ctx.arc(videoWidth/2-x, y, radius, 0, 2 * Math.PI, false);
        
        ctx.fillStyle = 'rgb(135, 206, 235, 0.5)';
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'black';
        ctx.font = '25px Sanserif';
        ctx.strokeText(text, (videoWidth/2-x)+10, y+10);
        ctx.stroke();
    })
}