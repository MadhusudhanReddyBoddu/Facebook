var k=document.querySelector(".demo");
var l=document.querySelector("#count");
var m=document.querySelector("#dice");
var count=0;
m.addEventListener("click",function(){
	var random=randomnumber();
	for(var i=0;i<random;i++)
	{
		
		m.textContent=random;
		k.style.transform+="translate(20px)";
	}
});

function randomnumber(){
var random=Math.floor(Math.random()*7);
return random;
}
