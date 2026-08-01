// Mobil 100vh düzeltmesi
(function(){
  function setVh(){
    document.documentElement.style.setProperty('--vh', (window.innerHeight * 0.01) + 'px');
  }
  setVh();
  window.addEventListener('resize', setVh);
})();

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('envelope-overlay');
  const envelope = document.getElementById('envelope');
  const hero = document.getElementById('hero');

  // Zarf açılma
  envelope.addEventListener('click', () => {
  envelope.classList.add('open');

  setTimeout(() => {
    overlay.classList.add('hide');

    setTimeout(() => {
      hero.classList.remove('boxed');
      hero.classList.add('expanded');
    }, 1200);

  }, 1100);
  }, { once: true });

  // Geri sayım
  const weddingDate = new Date('2026-09-06T18:00:00');
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function pad(num){ return String(num).padStart(2, '0'); }

  function updateCountdown(){
    const now = new Date();
    let diff = weddingDate - now;
    if (diff <= 0){
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      clearInterval(timerInterval);
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    daysEl.textContent = pad(days);
    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);
  }

  updateCountdown();
  const timerInterval = setInterval(updateCountdown, 1000);
});

document.addEventListener("click", () => {
    const music = document.getElementById("bgMusic");
    music.play();
}, { once: true });
