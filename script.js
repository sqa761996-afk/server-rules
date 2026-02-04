// زر الثلاث خطوط للقائمة
function toggleMenu(){
  const menu = document.getElementById('navMenu');
  const overlay = document.getElementById('nav-overlay');
  menu.classList.toggle('open');
  overlay.style.display = menu.classList.contains('open') ? 'block' : 'none';
}

// Animations سلسة
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".rule-card");
  cards.forEach((el,i) => {
    el.style.opacity=0;
    el.style.transform="translateY(15px)";
    setTimeout(()=>{
      el.style.opacity=1;
      el.style.transform="translateY(0)";
      el.style.transition="all 0.6s ease";
    }, 100*i);
  });
});
