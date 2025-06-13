
    const track = document.getElementById("carouselTrack");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");

let scrollIndex = 0;

const cards = Array.from(track.children);
const visibleCardsCount = 4; // Number of cards visible in a row (adjust if needed)

// Clone first N cards and append to the end for infinite loop effect
function cloneCards() {
  for (let i = 0; i < visibleCardsCount; i++) {
    const clone = cards[i].cloneNode(true);
    clone.classList.add("clone");
    track.appendChild(clone);
  }
}
cloneCards();

function getCardWidth() {
  const card = track.querySelector(".custom-card");
  const style = getComputedStyle(card);
  const margin = parseInt(style.marginLeft) + parseInt(style.marginRight);
  return card.offsetWidth + margin;
}

function updateScroll(animate = true) {
  const cardWidth = getCardWidth();
  if (!animate) {
    track.style.transition = "none";
  } else {
    track.style.transition = "transform 0.5s ease";
  }
  track.style.transform = `translateX(-${scrollIndex * cardWidth}px)`;
}

function nextSlide() {
  const totalCards = track.children.length; // includes clones
  scrollIndex++;
  updateScroll();

  // When reaching clones, reset instantly to start
  const realLength = cards.length;
  if (scrollIndex === realLength) {
    setTimeout(() => {
      scrollIndex = 0;
      updateScroll(false); // jump instantly without animation
    }, 500); // match transition duration
  }
}

function prevSlide() {
  const realLength = cards.length;
  if (scrollIndex === 0) {
    // jump to clones at the end instantly
    scrollIndex = realLength;
    updateScroll(false);
    setTimeout(() => {
      scrollIndex--;
      updateScroll();
    }, 20);
  } else {
    scrollIndex--;
    updateScroll();
  }
}

// Buttons
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto slide every 3s
setInterval(nextSlide, 3000);

// On window resize, adjust scroll without animation
window.addEventListener("resize", () => updateScroll(false));

// Initial setup
updateScroll(false);

