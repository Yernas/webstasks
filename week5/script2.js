function ereke(event){
  let someimage=document.getElementById("bigImage");
  let myimg=someimage.getElementsByTagName("img")[0];
  myimg.src=event.currentTarget.src;
}
let imags=document.getElementsByTagName("img");
for(i=0;i<imags.length;i++){
  imags[i].addEventListener('click',ereke);
}