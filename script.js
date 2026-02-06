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

// ======= عداد أعضاء الدسكورد (صفحة discord.html) =======
const memberCountSpan = document.getElementById('memberCount');
if(memberCountSpan){
  fetch("https://discord.com/api/v10/guilds/1453314826322317366/widget.json")
    .then(res => {
      if(!res.ok) throw new Error("API error");
      return res.json();
    })
    .then(data => {
      memberCountSpan.textContent = data.presence_count;
    })
    .catch(err => {
      console.log("Discord API error:", err);
      memberCountSpan.textContent = "غير متاح";
    });
}

// ======= Animations سلسة =======
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".user-card, .rule-card, .hero-image, .welcome-text, .welcome-subtext, .discord-widget, .discord-btn"
  );
  animatedElements.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(15px)";
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
      el.style.transition = "all 0.6s ease";
    }, 150 * i);
  });

document.querySelectorAll('.rule-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.rule-card');
    const content = card.querySelector('.rule-content');

    document.querySelectorAll('.rule-content').forEach(c => {
      if (c !== content) c.style.maxHeight = null;
    });

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      btn.textContent = '+';
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      btn.textContent = '−';
    }
  });
});
