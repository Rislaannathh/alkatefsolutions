const hero = document.querySelector('.hero-2');
const heroImage = document.querySelector('.hero-section img');

hero.addEventListener('mousemove', function (e) {
  const rect = hero.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
  const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;

  // Move background slightly
  hero.style.backgroundPosition = `calc(50% + ${x}px) calc(0% + ${y}px)`;

  // Stylish transform: translate + scale + rotate
  if (heroImage) {
    heroImage.style.transform = `translate(${x}px, ${y}px) scale(1.02) rotate(${x * 0.3}deg)`;
  }
});

hero.addEventListener('mouseleave', function () {
  hero.style.backgroundPosition = 'center top';

  if (heroImage) {
    heroImage.style.transform = 'translate(0px, 0px) scale(1) rotate(0deg)';
  }
});
