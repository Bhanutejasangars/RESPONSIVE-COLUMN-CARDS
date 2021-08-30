
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
function myFunction() {
  var input=document.getElementById('myInput').value.toUpperCase();
  var  cardcontainer=document.getElementById('cardcontainer');
  var cards=cardcontainer.getElementsByClassName('card');
  
 for(let i=0;i<cards.length;i++){
  let title=cards[i].querySelector('#cardTitle')
  console.log(title)
  if(title.innerText.toUpperCase().indexOf(input)>-1){
    cards[i].style.display ="";
  }else{
    cards[i].style.display ="none";
  }
 }}

/*

 } */