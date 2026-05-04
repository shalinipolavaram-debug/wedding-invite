const weddingDate = new Date("May 5, 2026 10:00:00").getTime();

setInterval(function() {
  const now = new Date().getTime();
  const gap = weddingDate - now;

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  document.getElementById("countdown").innerHTML =
    "⏳ " + days + " days " + hours + " hours left";
}, 1000);
