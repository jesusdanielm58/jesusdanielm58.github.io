function enter(){
	parrafo.style.opacity="0.1";
	circle.style.transform="scale(0)";
	circle2.style.transform="scale(3)";
}
function out(){
	circle.style.transform="scale(1)";
	parrafo.style.opacity="1";
	circle2.style.transform="scale(1)"
}
window.addEventListener("mousemove",function(e){
	circle.style.left=e.pageX-3+"px";
	circle.style.top=e.pageY-3+"px";
	circle2.style.left=e.pageX-10+"px";
	circle2.style.top=e.pageY-10+"px";

})
document.addEventListener('DOMContentLoaded', function() {
	parrafo=document.querySelector("p");
	circle=document.querySelector(".cursor");
	circle2=document.querySelector(".cursor-follower");
}, false);