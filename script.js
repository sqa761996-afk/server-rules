function toggleMenu(){
  const menu = document.getElementById('navMenu');
  const overlay = document.getElementById('nav-overlay');
  menu.classList.toggle('open');
  overlay.style.display = menu.classList.contains('open') ? 'block' : 'none';
}

// تحديث عدد الأعضاء (Live member count)
const memberCountSpan = document.getElementById('memberCount');
if(memberCountSpan){
  fetch("https://discord.com/api/v10/guilds/1453314826322317366/widget.json")
    .then(res => res.json())
    .then(data => {
      memberCountSpan.textContent = data.presence_count;
    })
    .catch(err => console.log("Discord API error:", err));
}
