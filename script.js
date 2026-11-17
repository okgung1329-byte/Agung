// Mencari semua elemen yang punya class 'fade-in'
const faders = document.querySelectorAll('.fade-in');

// Pengaturan kapan animasi jalan (saat elemen masuk layar 20%)
const appearOptions = {
  threshold: 0.2
};

// Fungsi yang dijalankan saat elemen terlihat
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear'); // Tambahkan class 'appear'
      appearOnScroll.unobserve(entry.target); // Berhenti pantau kalau udah muncul
    }
  });
}, appearOptions);

// Pasang ke semua elemen 'fade-in'
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});