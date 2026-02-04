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
