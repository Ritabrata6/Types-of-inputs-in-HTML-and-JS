function dolime(){
  var dd2=document.getElementById("d1");
  dd2.style.backgroundColor="lime";
}
function docolor(){
  var dd1=document.getElementById("d1");
  var colorinput=document.getElementById("clr");
  var color = colorinput.value;
  dd1.style.backgroundColor=color;
}
function doslide(){
  var dd1=document.getElementById("d1");
  var sizeinput=document.getElementById("sdr");
  var size=sizeinput.value;
  var ctx=dd1.getContext("2d");
  ctx.fillStyle="black";
  ctx.fillRect(10,10,size,size);
}
