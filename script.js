let musicaJaTocou = false;

const carta = document.getElementById("carta");

carta.addEventListener("click", toggleCarta);

function toggleCarta() {
  const seta = document.querySelector(".seta");
  const musica = document.getElementById("musica");

  carta.classList.toggle("aberta");

  if (seta) seta.style.display = "none";

  if (!musicaJaTocou) {
    musica.play().catch(() => {});
    musicaJaTocou = true;
  }

  if (carta.classList.contains("aberta")) {
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }

    criarConfete();
  }
}

function criarConfete() {
  let total = window.innerWidth < 600 ? 30 : 50;

  for (let i = 0; i < total; i++) {
    let confete = document.createElement("div");
    confete.classList.add("confete");

    confete.style.left = Math.random() * 100 + "vw";
    confete.style.background = `hsl(${Math.random()*360},100%,50%)`;
    confete.style.animationDuration = (Math.random()*2 + 2) + "s";

    document.body.appendChild(confete);

    setTimeout(() => confete.remove(), 4000);
  }
}
