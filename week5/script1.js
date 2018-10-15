function onClick(){
	let a=document.querySelector("#s11").value;
	let b=document.querySelector("#s12").value;
	let c=document.querySelector("#s13").value;
	let d=document.querySelector("#s21").value;
	let e=document.querySelector("#s22").value;
	let f=document.querySelector("#s23").value;
	let g=document.querySelector("#s31").value;
	let h=document.querySelector("#s32").value;
	let i=document.querySelector("#s33").value;
	let mat=a*e*i+b*f*g+c*d*h-g*e*c-h*f*a-i*d*b;
	document.querySelector("#result").innerHTML=mat; 
}
document.querySelector("#determinant").addEventListener('click',onClick);            