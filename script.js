// ======= زر الثلاث خطوط للقائمة =======
function toggleMenu(){
  const menu = document.getElementById('navMenu');
  const overlay = document.getElementById('nav-overlay');
  menu.classList.toggle('open');
  if(menu.classList.contains('open')){
    overlay.style.display = 'block';
  } else {
    overlay.style.display = 'none';
  }
}

// ======= Animations سلسة =======
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".user-card, .developer-card, .hero-image, .welcome-text, .welcome-subtext");
  animatedElements.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(15px)";
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
      el.style.transition = "all 0.6s ease";
    }, 150 * i);
  });
});
