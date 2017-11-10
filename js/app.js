//function show(){
  var tabs = document.querySelectorAll(".tabs");
  var parrafos = document.querySelectorAll(".parrafos");
  /*var tabs2 = document.getElementById("tab2");
  tab2.addEventListener("click",showContainer2);

}
function showContainer2 (){
  var container2 = document.getElementById("container2");
  container2.classList.remove("hidden");
  var container1 = document.getElementById("container1");
  container1.classList.add("hidden");
}*/


function toggleTab (elem){
  for (var i = 0; i <elem.length; i++) {
    elem[i].addEventListener("click",showContainers);
  }
}

function showContainers(){
  for(var j=0; j<parrafos.length; j++){
    if(this.dataset.text === parrafos[j].dataset.text){
      if (parrafos[j].classList.contains("hidden")){
        parrafos[j].classList.remove("hidden");
      }
    } else{
    parrafos[j].classList.add("hidden");
   }
  }
//this.classList.add("red");
}
window.onload = function() {
  toggleTab(tabs);
}
