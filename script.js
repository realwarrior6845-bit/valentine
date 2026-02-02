const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const music = document.getElementById("bg-music");

/* ---------- NO button runs ---------- */
if (noBtn) {
  function moveButton() {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  }
  noBtn.addEventListener("mouseover", moveButton);
  noBtn.addEventListener("touchstart", moveButton);
}

/* ---------- YES button grows ---------- */
if (yesBtn) {
  let scale = 1;
  setInterval(() => {
    scale += 0.05;
    yesBtn.style.transform = `scale(${scale})`;
  }, 1500);

  yesBtn.addEventListener("click", () => {
    window.location.href = "success.html";
  });
}

/* ---------- Falling hearts ---------- */
const heartsContainer = document.createElement("div");
heartsContainer.className = "hearts";
document.body.appendChild(heartsContainer);

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 400);

/* ---------- Background music ---------- */
function startMusic() {
  if (music) {
    music.volume = 0.4;
    music.play().catch(() => {});
    document.removeEventListener("click", startMusic);
    document.removeEventListener("touchstart", startMusic);
  }
}

document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);