function ereke(){
	let n=document.getElementById("name").value;
	let s=document.getElementById("surname").value;
	let f=document.getElementById("faculty").value;
	switch(n){
		case "":document.getElementById("name").style.border="2px solid red";
		return;
	}
	switch(s){
		case "":document.getElementById('surname').style.border="2px solid red";
		return;
	}
	switch(f){
		case -1:
		return;
	}
	let a=document.createElement('tr');
	let b=document.createElement('td');
	let c=document.createElement('td');
	let d=document.createElement('td');
	
	b.innerHTML=n;
	c.innerHTML=s;
	d.innerHTML=f;
	a.appendChild(b);
	a.appendChild(c);
	a.appendChild(d);
	let table=document.getElementById('students');
	table.appendChild(a);
}
document.getElementById("addStudent").addEventListener('click',ereke);