var colors=generateColors(6);
var square = document.querySelectorAll(".square");
var pickedcolor=random();

var pcolor=document.getElementById("colordisplay");

pcolor.textContent=pickedcolor; 
var h=document.getElementById("result");
var h1=document.getElementById("head");

var changecolors=document.querySelector("#newcolors");

changecolors.addEventListener("click",function()
{
	var colors=generateColors(6);

	var pickedcolor=random();

	pcolor.textContent=pickedcolor;

	for(var i=0;i<square.length;i++)
	{

	square[i].style.background=colors[i];
	

	}


});
for(var i=0;i<square.length;i++)
{

	square[i].style.background=colors[i];

	square[i].addEventListener("click",function()
	{
		var clickedcolor=this.style.background;
		if(clickedcolor===pickedcolor){
			totalcolor(clickedcolor);
			h.textContent="correct";
			h1.style.background=pickedcolor;
		}
		else{
			this.style.background="#232323";
			h.textContent="try again";
		}
	});

}
function totalcolor(color){
	for(var i=0;i<square.length;i++){
		square[i].style.background=color;
	}
}
function random(){
	var rando=Math.floor(Math.random()*colors.length);
	return colors[rando];
}
function generateColors(num){
	var arr=[]
	for(var i=0;i<num;i++){
		arr.push(eachcolor());
	}
	return arr;
}
function eachcolor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + "," + " " + g + "," + " " + b + ")";

}