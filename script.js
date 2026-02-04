function toggleMenu() {
  const menu = document.getElementById("navMenu");
  const overlay = document.getElementById("nav-overlay");

  menu.classList.toggle("open");
  overlay.style.display = menu.classList.contains("open") ? "block" : "none";
}
