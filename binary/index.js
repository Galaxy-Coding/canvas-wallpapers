'use strict';
var cw, ch;
const canvas = document.createElement("CANVAS");
canvas.width = cw = window.innerWidth;
canvas.height = ch = window.innerHeight;
canvas.style.display = 'block';
const ctx = canvas.getContext('2d');
var matrix = '101010110110101010001101011010110100101'.split('');
var rain = []
onload = () => {
	document.body.style.background = 'black';
	document.body.append(canvas);
	for (let i=0; i<cw/2; i++)
		rain[i] = 1;
	function raining(){
		ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
		ctx.fillRect(0, 0, cw, ch);

		ctx.fillStyle ='#ff0000';
		ctx.font = 10 + 'px arial';
		for (let j=0; j < rain.length; j++){
			var txt = matrix[Math.floor(Math.random() * matrix.length)];
			ctx.fillText(txt, j*10, rain[j] * 10);
			if(rain[j]*10 > ch && Math.random() > 0.975)
			rain[j] = 0;

			rain[j] ++;
		}
	}
setInterval(raining, 20);
}
