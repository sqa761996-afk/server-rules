function toggleMenu() {
  const menu = document.getElementById("navMenu");
  const overlay = document.getElementById("nav-overlay");
  menu.classList.toggle("open");
  overlay.style.display = menu.classList.contains("open") ? "block" : "none";
}

// تحديث عدد أعضاء السيرفر
async function updateMemberCount() {
  const serverID = "1453314826322317366"; // ID السيرفر
  const endpoint = `https://discord.com/api/guilds/${serverID}/widget.json`;
  try {
    const res = await fetch(endpoint);
    if(res.ok){
      const data = await res.json();
      document.getElementById("memberCount").textContent = data.presence_count || 0;
    } else {
      console.log("خطأ في جلب البيانات");
    }
  } catch(e){
    console.log("فشل الاتصال بالـ API", e);
  }
}
updateMemberCount();
setInterval(updateMemberCount, 10000);
