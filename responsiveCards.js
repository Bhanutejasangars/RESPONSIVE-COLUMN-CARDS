
function getJokesnow(){
fetch("https://official-joke-api.appspot.com/random_ten")
.then((Response)=>{
return Response.json()
}).then((data)=>{

  for(i=0;i<10;i++){
  document.getElementById("type"+i).innerText=data[i].type;
  document.getElementById("setup"+i).innerText=data[i].setup;
  }
})}
window.onload=function(){
  getJokesnow()
}