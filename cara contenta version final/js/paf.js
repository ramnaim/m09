window.addEventListener("load", () => {
  let canvasCara = document.getElementById("cara");
  let ctx = canvasCara.getContext("2d");

  ctx.beginPath();
  ctx.arc(150, 150, 100, 0, Math.PI * 2, true);
  ctx.fillStyle = "yellow";

  ctx.fill();
  ctx.moveTo(130, 130);
  ctx.arc(115, 130, 15, 0, Math.PI * 2);


  ctx.moveTo(200, 130);
  ctx.arc(185, 130, 15, 0, Math.PI * 2);

  ctx.moveTo(235, 150);
  ctx.arc(150, 150, 85, 0, Math.PI);
  ctx.stroke();
  ctx.close();
});
