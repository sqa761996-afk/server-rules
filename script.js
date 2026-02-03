const nav = document.getElementById('nav');
const overlay = document.getElementById('nav-overlay');
const menuBtn = document.getElementById('menu-btn');

function toggleMenu(){
  nav.classList.toggle('open');
  overlay.style.display = nav.classList.contains('open') ? 'block' : 'none';
  menuBtn.classList.toggle('open');
}

function closeMenu(){
  nav.classList.remove('open');
  overlay.style.display = "none";
  menuBtn.classList.remove('open');
}
