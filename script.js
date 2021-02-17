const $ = (prop, all) => {
  if(!all)
    return document.querySelector(prop);
  else
    return document.querySelectorAll(prop);
}
function animateElement(element, animation){
  $(element).style.animation = animation;
  $(element).style.animationFillMode = "forwards";
}
function cssVar(Var, Val){
  $(":root").style.setProperty(Var, Val);
}



function setItems(){
  if(window.innerWidth <= 600){
    $("#nav-links").classList.add("nav-out");
  }else{
    $("#nav-links").classList = "";
  }
}
window.onload = function(){
  setItems();
}
window.onresize = setItems;



function showNav(){
  $("#nav-links").classList.add("nav-in");
  $("#nav-links").classList.remove("nav-out");
}
function hideNav(){
  $("#nav-links").classList.add("nav-out");
  $("#nav-links").classList.remove("nav-in");
}
window.onbeforeunload = function(){ return 'Testing...' }
  var unloadListener = function(){ return 'Testing...' };
  window.addEventListener('beforeunload', unloadListener);
