function toggleMenu(){
  let nav = document.getElementById('nav');
  let overlay = document.getElementById('nav-overlay');
  if(nav.style.left === "0px"){
    nav.style.left = "-300px";
    overlay.style.display = "none";
  } else {
    nav.style.left = "0px";
    overlay.style.display = "block";
  }
}
function closeMenu(){
  document.getElementById('nav').style.left = "-300px";
  document.getElementById('nav-overlay').style.display = "none";
}
