document.addEventListener("DOMContentLoaded", function () {
    const track = document.getElementById("carouselTrackk");
    let cards = track.querySelectorAll(".custom-card");
    const prevBtn = document.querySelector(".carousel-prevv");
    const nextBtn = document.querySelector(".carousel-nextt");
  
    function getVisibleCards() {
      if (window.innerWidth <= 576) return 1;
      if (window.innerWidth <= 991) return 2;
      return 5; // changed from 4 to 5 here
    }
  
    let visibleCards = getVisibleCards();
    let currentIndex = visibleCards;
  
    function removeClones() {
      const clones = track.querySelectorAll(".clone");
      clones.forEach(clone => clone.remove());
    }
  
    function setupClones() {
      removeClones();
  
      for (let i = cards.length - visibleCards; i < cards.length; i++) {
        const clone = cards[i].cloneNode(true);
        clone.classList.add("clone");
        track.insertBefore(clone, track.firstChild);
      }
  
      for (let i = 0; i < visibleCards; i++) {
        const clone = cards[i].cloneNode(true);
        clone.classList.add("clone");
        track.appendChild(clone);
      }
    }
  
    setupClones();
  
    cards = track.querySelectorAll(".custom-card");
  
    function updateCarousel(animate = true) {
      const cardWidth = cards[0].offsetWidth + 20;
      track.style.transition = animate ? "transform 0.5s ease-in-out" : "none";
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  
    function nextSlide() {
      currentIndex++;
      updateCarousel();
  
      if (currentIndex === cards.length - visibleCards) {
        setTimeout(() => {
          currentIndex = visibleCards;
          updateCarousel(false);
        }, 510);
      }
    }
  
    function prevSlide() {
      currentIndex--;
      updateCarousel();
  
      if (currentIndex === 0) {
        setTimeout(() => {
          currentIndex = cards.length - visibleCards * 2;
          updateCarousel(false);
        }, 510);
      }
    }
  
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  
    let interval = setInterval(nextSlide, 3000);
  
    track.addEventListener("mouseenter", () => clearInterval(interval));
    track.addEventListener("mouseleave", () => {
      interval = setInterval(nextSlide, 3000);
    });
  
    window.addEventListener("resize", () => {
      const oldVisibleCards = visibleCards;
      visibleCards = getVisibleCards();
      if (oldVisibleCards !== visibleCards) {
        currentIndex = visibleCards;
        setupClones();
        cards = track.querySelectorAll(".custom-card");
        updateCarousel(false);
      } else {
        updateCarousel(false);
      }
    });
  
    updateCarousel(false);
  });
  