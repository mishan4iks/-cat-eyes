document.onmousemove=function(event){
	var x=event.x-650;
	var y=event.y-100;
	console.log(x+"   "+y);
	document.getElementById("eye").style.transform='rotate('+57.2958*arc(x,y)+'deg)';
	document.getElementById("eye2").style.transform='rotate('+57.2958*arc(x,y)+'deg)';
	var tog=document.getElementById("tongue");
	if ((x>=0 && x<57) ||(y>146 && y<191)) {
		tog.style.display="block";
	}
	else{
		tog.style.display="none";	
	}
function arc(x,y){
	if (x>0 && y>0) return Math.PI/2-Math.atan(x/y);
	if (x<0 && y>0) return Math.PI/2-Math.atan(x/y);
	if (x<0 && y<0) return Math.PI+Math.atan(y/x);
	if (x>0 && y<0) return 3*Math.PI/2+Math.abs(Math.atan(x/y));
}

}

document.querySelector("body").addEventListener("touchmove",myToutch);

function myToutch(event){
var x=event.x-650;
	var y=event.y-100;
	console.log(x+"   "+y);
	document.getElementById("eye").style.transform='rotate('+57.2958*arc(x,y)+'deg)';
	document.getElementById("eye2").style.transform='rotate('+57.2958*arc(x,y)+'deg)';
	var tog=document.getElementById("tongue");
	if ((x>=0 && x<57) ||(y>146 && y<191)) {
		tog.style.display="block";
	}
	else{
		tog.style.display="none";	
	}
function arc(x,y){
	if (x>0 && y>0) return Math.PI/2-Math.atan(x/y);
	if (x<0 && y>0) return Math.PI/2-Math.atan(x/y);
	if (x<0 && y<0) return Math.PI+Math.atan(y/x);
	if (x>0 && y<0) return 3*Math.PI/2+Math.abs(Math.atan(x/y));
}
}