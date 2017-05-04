// var onee=document.getElementById("one");
// onee.addEventListener("click", displayDate);
// function displayDate() {
//     document.getElementById("one").innerHTML = Date();
// }
var k=document.getElementsByTagName("td");
for(var i=1;i<k.length;i++){
k[i].addEventListener("click", display);
}
function display() {
	var f=document.getElementById("result");
	f.innerHTML+=this.innerHTML;
	var k=f.innerHTML;
	var l=Number(k[0]);

	if(this.innerHTML=="="){
		for(i=0;i<k.length;i++){
			if(k[i]=="+"||"-"||"*"||"/"){
				if(k[i]=="+"){
					l+=Number(k[i+1]);
				}
				if(k[i]=="-"){
					l-=Number(k[i+1]);
				}
				if(k[i]=="*"){
					l*=Number(k[i+1]);
				}
				if(k[i]=="/"){
					l/=Number(k[i+1]);
				}
			}
		}
		f.innerHTML=l;
   }
   else if(this.innerHTML=="c"){
   	f.innerHTML=""
   }
}