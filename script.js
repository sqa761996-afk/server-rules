function toggleMenu(){
  let nav = document.getElementById('nav');
  if(nav.style.left === "0px"){
    nav.style.left = "-250px";
  } else {
    nav.style.left = "0px";
  }
}
