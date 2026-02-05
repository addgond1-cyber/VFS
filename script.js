// 🌙 Create moonlight sparkles
for (let s = 0; s < 25; s++) {
  const sp = document.createElement("div");
  sp.className = "sparkle";
  sp.style.left = Math.random() * 100 + "vw";
  sp.style.top = Math.random() * 100 + "vh";
  sp.style.animationDelay = Math.random() * 6 + "s";
  document.body.appendChild(sp);
}

const noMessages = [
  "Are you sure? 💭",
  "Take a moment… 😊",
  "I promise to be gentle with your heart 💗",
  "Some things are worth a yes 🌸",
  "This question came from a real place 💖"
];

let i = 0;
const msg = document.getElementById("message");
const card = document.getElementById("card");
const music = document.getElementById("music");
const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

// Hover escape 😄
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 140 - 70;
  const y = Math.random() * 140 - 70;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Click loop messages
noBtn.addEventListener("click", () => {
  msg.textContent = noMessages[i];
  i = (i + 1) % noMessages.length;
  card.classList.add("glow");
  setTimeout(() => card.classList.remove("glow"), 400);
});

// YES – smooth cinematic transition
yesBtn.addEventListener("click", () => {
  document.body.classList.add("celebrate");
  music.play();

  card.classList.add("fade-out");

  setTimeout(() => {
    card.innerHTML = `
      <h1>She Said YES 💖</h1>
      <p>
        This moment feels calm, warm,<br>
        and perfectly real 🌙
      </p>

      <div class="handwritten">Shubhangi</div>
      <div class="signature">— RAJ</div>
    `;

    card.classList.remove("fade-out");
    card.classList.add("fade-in");

    setTimeout(() => celebrate(), 400);
  }, 600);
});

function celebrate() {
  for (let j = 0; j < 40; j++) {
    const el = document.createElement("span");
    el.innerHTML = Math.random() > 0.5 ? "💖" : "✨";
    el.style.left = Math.random() * 100 + "vw";
    el.style.bottom = "-40px";
    el.className = "float";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5000);
  }
}
