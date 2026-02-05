/* ===============================
   القائمة الجانبية (زر الثلاث خطوط)
================================ */
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  const overlay = document.getElementById("nav-overlay");

  menu.classList.toggle("open");

  if (menu.classList.contains("open")) {
    overlay.style.display = "block";
  } else {
    overlay.style.display = "none";
  }
}

/* ===============================
   قوانين السيرفر (زر +)
   واحد فقط يفتح والباقي يقفل
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".rule-toggle");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const card = toggle.closest(".rule-card");
      const desc = card.querySelector(".rule-description");

      // قفل كل القوانين الثانية
      document.querySelectorAll(".rule-description").forEach(otherDesc => {
        if (otherDesc !== desc) {
          otherDesc.style.maxHeight = null;
          const btn = otherDesc.closest(".rule-card").querySelector(".rule-toggle");
          if (btn) btn.textContent = "+";
        }
      });

      // فتح / إغلاق الحالي
      if (desc.style.maxHeight) {
        desc.style.maxHeight = null;
        toggle.textContent = "+";
      } else {
        desc.style.maxHeight = desc.scrollHeight + "px";
        toggle.textContent = "−";
      }
    });
  });
});

/* ===============================
   عداد أعضاء الدسكورد
   (discord.html فقط)
================================ */
const memberCountSpan = document.getElementById("memberCount");

if (memberCountSpan) {
  fetch("https://discord.com/api/v10/guilds/1453314826322317366/widget.json")
    .then(res => {
      if (!res.ok) throw new Error("Discord API Error");
      return res.json();
    })
    .then(data => {
      memberCountSpan.textContent = data.presence_count;
    })
    .catch(() => {
      memberCountSpan.textContent = "غير متاح";
    });
}
