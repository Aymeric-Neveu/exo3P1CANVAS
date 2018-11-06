var c = document.getElementById("monCanvas");
 var ctx = c.getContext("2d");
 ctx.lineWidht=6;
 // premier rectangle
 ctx.fillStyle="green";
 ctx.fillRect(80,200,290,70);
// deuxieme rectangle
 ctx.fillStyle="green";
 ctx.fillRect(50,250,380,70);
 // roue gauche
 ctx.beginPath();
 ctx.arc(120,350,30,0,Math.PI*2,false);
 ctx.fillStyle="grey";
 ctx.fill();
 ctx.strokeStyle="black";
 ctx.stroke();
 // roue droite
 ctx.beginPath();
 ctx.arc(330,350,30,0,Math.PI*2,false);
 ctx.fillStyle="grey";
 ctx.fill();
 ctx.strokeStyle="black";
 ctx.stroke();
