function drawClock()
{
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	var center = c.width/2;
	ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(center, center, center, 0, 2 * Math.PI, true);
    ctx.stroke();
    ctx.closePath();

    ctx.lineWidth = 2;
    var radSec = (Math.PI/180)/60;
    for (var i = 0; i < 60; i++){
    	if (i%5==0){
    		ctx.lineWidth = 10;
    	}
    	else{
    		ctx.lineWidth = 2;
    	}
    	ctx.beginPath();
    	ctx.moveTo(center,center);
    	var xP = center + center * Math.cos(-6 * i * (Math.PI / 180) + Math.PI / 2);
        var yP = center - center * Math.sin(-6 * i * (Math.PI / 180) + Math.PI / 2);
        ctx.lineTo(xP,yP);
    	ctx.stroke();
    	ctx.closePath();
    }
    ctx.beginPath();
    ctx.arc(center, center, center-20, 0, 2 * Math.PI, true);
    ctx.fillStyle = "white";
	ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    var d = new Date();
    ctx.beginPath();
    ctx.moveTo(center,center);
    var xSecP = center + (center-25) * Math.cos(-6 * d.getSeconds() * (Math.PI / 180) + Math.PI / 2);
    var ySecP = center - (center-25) * Math.sin(-6 * d.getSeconds() * (Math.PI / 180) + Math.PI / 2);
    ctx.lineTo(xSecP,ySecP);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.moveTo(center,center);
    var xMinP = center + (center-50) * Math.cos(-6 * d.getMinutes() * (Math.PI / 180) + Math.PI / 2);
    var yMinP = center - (center-50) * Math.sin(-6 * d.getMinutes() * (Math.PI / 180) + Math.PI / 2);
    ctx.lineTo(xMinP,yMinP);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.moveTo(center,center);
    var xHrP = center + (center-100) * Math.cos(-6 * d.getHours() * (Math.PI / 180) + Math.PI / 2);
    var yHrP = center - (center-100) * Math.sin(-6 * d.getHours() * (Math.PI / 180) + Math.PI / 2);
    ctx.lineTo(xHrP,yHrP);
    ctx.stroke();
    ctx.closePath();
}
window.onload = function ()
{
    window.setInterval
    (
        function ()
        {
                drawClock();

        }
    , 1000);

}