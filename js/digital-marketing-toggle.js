const toggles = document.querySelectorAll('.accordion-toggle');

// Default open the first item
if (toggles.length > 0) {
  toggles[0].classList.add('active');
  toggles[0].nextElementSibling.style.display = 'block';
}

toggles.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;

    // If already open, close it
    if (button.classList.contains('active')) {
      button.classList.remove('active');
      content.style.display = 'none';
    } else {
      // Close all other items
      toggles.forEach(btn => {
        btn.classList.remove('active');
        btn.nextElementSibling.style.display = 'none';
      });

      // Open the clicked one
      button.classList.add('active');
      content.style.display = 'block';
    }
  });
});
