score1=0;
score2=0;
max=5;
gameover=false;
var c=document.getElementById("score1");
var d=document.getElementById("score2");
var a=document.getElementById("p1");
var b=document.getElementById("p2");
var e=document.getElementById("r");
var f=document.getElementById("winningscore");
var g=document.getElementById("ok");

a.addEventListener("click",function(){
	if(!gameover){
		score1++;
		if(score1>=max){
			c.classList.add("geee");//dynamically adding class called geee when it reaches max limit
			gameover=true;
		}
		c.textContent=score1;
	}
});
b.addEventListener("click",function(){
	if(!gameover){
		score2++;
		if(score2===max){
			d.style.color="green";//similar to adding property color without adding class as above
			gameover=true;
		}
		d.textContent=score2;
	}
});
e.addEventListener("click",function(){
		c.textContent=0;
		d.textContent=0;
		score1=0;
		score2=0;
		gameover=false;


})
g.addEventListener("change",function(){
	f.textContent=Number(g.value);
	max=Number(g.value);
});