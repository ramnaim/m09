var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(10, 110, 90, 90);
ctx.fillStyle = "#759577";
ctx.fill();
ctx.strokeStyle = "#6a8659";
ctx.lineWidth = "6";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.rect(115, 95, 30, 120);
ctx.fillStyle = "#ddf982";
ctx.fill();
ctx.strokeStyle = "#9fb55c";
ctx.lineWidth = "6";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 80, 30, 150);
ctx.fillStyle = "#ddf982";
ctx.fill();
ctx.strokeStyle = "#9fb55c";
ctx.lineWidth = "6";
ctx.stroke();
ctx.closePath();

//rectángulo alto
ctx.beginPath();
ctx.rect(205, 65, 30, 180);
ctx.fillStyle = "#759577";
ctx.fill();
ctx.strokeStyle = "#6a8659";
ctx.lineWidth = "6";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.rect(250, 80, 30, 150);
ctx.fillStyle = "#ddf982";
ctx.fill();
ctx.strokeStyle = "#9fb55c";
ctx.lineWidth = "6";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.rect(295, 95, 30, 120);
ctx.fillStyle = "#ddf982";
ctx.fill();
ctx.strokeStyle = "#9fb55c";
ctx.lineWidth = "6";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(435, 160, 90, 0, Math.PI*2, false);
ctx.fillStyle = "#759577";
ctx.fill();
ctx.strokeStyle = "#6a8659";
ctx.lineWidth = "6";
ctx.stroke();
ctx.closePath();